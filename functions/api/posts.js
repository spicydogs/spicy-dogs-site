// GET /api/posts
// Fetches the Spicy Dogs Substack RSS feed server-side and returns
// a small JSON array of recent posts for the blog page to render.
// Runs as a Cloudflare Pages Function — no build step needed, this
// file just needs to live at /functions/api/posts.js in the repo.

const FEED_URL = "https://spicydogss.substack.com/feed";
const MAX_POSTS = 6;
const EXCERPT_LENGTH = 160;
const CACHE_SECONDS = 300;

export async function onRequestGet(context) {
  const cache = caches.default;
  const cacheKey = new Request(context.request.url, { method: "GET" });

  // Serve from Cloudflare's edge cache when possible so we don't hit
  // Substack on every page view.
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const feedRes = await fetch(FEED_URL, {
      headers: { "User-Agent": "SpicyDogsSite/1.1 (+https://spicydogsbehaviour.com)" },
      cf: { cacheTtl: CACHE_SECONDS, cacheEverything: true },
    });

    if (!feedRes.ok) {
      throw new Error(`Feed responded with ${feedRes.status}`);
    }

    const xml = await feedRes.text();
    const posts = parseFeed(xml)
      .filter((post) => post.title && post.link)
      .sort((a, b) => (Date.parse(b.pubDate || 0) || 0) - (Date.parse(a.pubDate || 0) || 0))
      .slice(0, MAX_POSTS);
    if (!posts.length) throw new Error("No readable posts found in Substack feed");

    const response = new Response(JSON.stringify({ posts, fetchedAt: new Date().toISOString() }), {
      headers: {
        "Content-Type": "application/json",
        // Browser: don't cache. Edge (Cloudflare): cache for 1 hour,
        // serve stale for up to a day while revalidating in the background.
        "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=600",
        "Access-Control-Allow-Origin": "*",
      },
    });

    context.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (err) {
    return new Response(JSON.stringify({ posts: [], error: String(err) }), {
      status: 200, // blog.html falls back to a direct Substack link
      headers: { "Content-Type": "application/json" },
    });
  }
}

function parseFeed(xml) {
  const items = xml.match(/<item\b[\s\S]*?<\/item>/g) || [];
  return items.map((item) => {
    const title = decodeEntities(stripCdata(matchTag(item, "title")));
    const link = stripCdata(matchTag(item, "link")).trim();
    const pubDateRaw = matchTag(item, "pubDate");
    const rawDescription =
      matchTag(item, "content:encoded") || matchTag(item, "description") || "";
    const description = decodeEntities(stripHtml(stripCdata(rawDescription)));

    return {
      title: title.trim(),
      link,
      pubDate: pubDateRaw ? new Date(pubDateRaw).toISOString() : null,
      displayDate: pubDateRaw
        ? new Date(pubDateRaw).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "",
      excerpt: truncate(description.trim(), EXCERPT_LENGTH),
    };
  });
}

function matchTag(block, tag) {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, "i");
  const match = block.match(re);
  return match ? match[1] : "";
}

function stripCdata(str) {
  return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
}

function stripHtml(str) {
  return str.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function truncate(str, len) {
  if (str.length <= len) return str;
  const cut = str.slice(0, len);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}
