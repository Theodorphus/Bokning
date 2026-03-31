import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { updatePageContent } from "@/lib/content";
import type { PageName } from "@/lib/cms-types";

// Verify admin auth
function verifyAdminAuth(request: NextRequest): boolean {
  const cookies = request.cookies;
  const adminToken = cookies.get("admin_token")?.value;
  return adminToken === process.env.ADMIN_TOKEN;
}

/**
 * GET /api/content?page=homepage
 * Returns all content for a specific page
 */
export async function GET(request: NextRequest) {
  if (!verifyAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const page = request.nextUrl.searchParams.get("page") as PageName;
  if (!page) {
    return NextResponse.json({ error: "Missing page parameter" }, { status: 400 });
  }

  try {
    const db = getSupabaseAdmin();
    const { data, error } = await db
      .from("page_content")
      .select("key, value")
      .eq("page", page);

    if (error) throw error;

    const content: Record<string, string> = {};
    if (data) {
      for (const row of data) {
        content[row.key] = row.value;
      }
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error("Error fetching page content:", error);
    return NextResponse.json(
      { error: "Failed to fetch page content" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/content
 * Update page content
 * Body: { page: 'homepage', fields: { hero_title: '...', hero_image: '...' } }
 */
export async function PUT(request: NextRequest) {
  if (!verifyAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { page, fields } = await request.json();

    if (!page || !fields) {
      return NextResponse.json(
        { error: "Missing page or fields" },
        { status: 400 }
      );
    }

    await updatePageContent(page, fields);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating page content:", error);
    return NextResponse.json(
      { error: "Failed to update page content" },
      { status: 500 }
    );
  }
}
