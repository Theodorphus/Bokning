import { getSupabaseAdmin } from "./supabase-server";
import type { Service } from "./cms-types";

export type { Service };

/**
 * Fetch all active services from Supabase (formerly from WordPress GraphQL)
 */
export async function getAllServices(): Promise<Service[]> {
  try {
    const db = getSupabaseAdmin();
    const { data, error } = await db
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const db = getSupabaseAdmin();
    const { data, error } = await db
      .from("services")
      .select("*")
      .eq("slug", slug)
      .eq("is_active", true)
      .single();

    if (error && error.code === "PGRST116") {
      // No rows found
      return null;
    }

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching service with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch all service slugs for static generation
 */
export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const db = getSupabaseAdmin();
    const { data, error } = await db
      .from("services")
      .select("slug")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data?.map((s) => s.slug) || [];
  } catch (error) {
    console.error("Error fetching service slugs:", error);
    return [];
  }
}

/**
 * Create a new service (admin only)
 */
export async function createService(
  service: Omit<Service, "id" | "created_at" | "updated_at">
): Promise<Service> {
  const db = getSupabaseAdmin();
  const { data, error } = await db
    .from("services")
    .insert([service])
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Update a service (admin only)
 */
export async function updateService(id: number, updates: Partial<Service>): Promise<Service> {
  const db = getSupabaseAdmin();
  const { data, error } = await db
    .from("services")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Delete a service (admin only)
 */
export async function deleteService(id: number): Promise<void> {
  const db = getSupabaseAdmin();
  const { error } = await db.from("services").delete().eq("id", id);

  if (error) throw error;
}
