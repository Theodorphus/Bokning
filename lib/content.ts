import { getSupabaseAdmin } from "./supabase-server";
import type { PageContent, PageName } from "./cms-types";

let contentCache: Record<string, PageContent> = {};
let cacheTime: Record<string, number> = {};
const CACHE_DURATION = 60000; // 60 seconds

/**
 * Fetch all page content for a specific page
 * Returns a key/value object, e.g. { hero_title: "...", hero_image: "..." }
 */
export async function getPageContent(page: PageName): Promise<PageContent> {
  const now = Date.now();

  // Check cache
  if (contentCache[page] && now - (cacheTime[page] || 0) < CACHE_DURATION) {
    return contentCache[page];
  }

  try {
    const db = getSupabaseAdmin();
    const { data, error } = await db
      .from("page_content")
      .select("key, value")
      .eq("page", page);

    if (error) throw error;

    // Convert array of { key, value } to object { key: value }
    const content: PageContent = {};
    if (data) {
      for (const row of data) {
        content[row.key] = row.value;
      }
    }

    // Cache it
    contentCache[page] = content;
    cacheTime[page] = now;

    return content;
  } catch (error) {
    console.error(`Error fetching page content for "${page}":`, error);
    return {};
  }
}

/**
 * Update a single field on a page (or multiple fields)
 * Call from server actions only
 */
export async function updatePageContent(page: PageName, fields: Record<string, string>): Promise<void> {
  const db = getSupabaseAdmin();

  // Upsert each field
  const promises = Object.entries(fields).map(([key, value]) =>
    db.from("page_content").upsert(
      {
        page,
        key,
        value,
      },
      { onConflict: "page,key" }
    )
  );

  await Promise.all(promises);

  // Clear cache for this page
  delete contentCache[page];
  delete cacheTime[page];
}
