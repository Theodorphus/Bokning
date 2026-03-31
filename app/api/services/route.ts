import { NextRequest, NextResponse } from "next/server";
import { createService } from "@/lib/services";
import type { Service } from "@/lib/cms-types";

// Verify admin auth
function verifyAdminAuth(request: NextRequest): boolean {
  const cookies = request.cookies;
  const adminToken = cookies.get("admin_token")?.value;
  return adminToken === process.env.ADMIN_TOKEN;
}

/**
 * POST /api/services
 * Create a new service
 * Body: { title, slug, description, short_description, price, duration, image_url }
 */
export async function POST(request: NextRequest) {
  if (!verifyAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, description, short_description, price, duration, image_url } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    const newService: Omit<Service, "id" | "created_at" | "updated_at"> = {
      title,
      slug,
      description: description || null,
      short_description: short_description || null,
      price: price || null,
      duration: duration || null,
      image_url: image_url || null,
      is_active: true,
      sort_order: 0,
    };

    const service = await createService(newService);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}
