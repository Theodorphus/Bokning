import { getSupabaseAdmin } from "./supabase-server";

export interface GlobalOptions {
  showGiftCards: boolean;
  showCorporateMassage: boolean;
}

let cachedOptions: GlobalOptions | null = null;
let cacheTime: number = 0;
const CACHE_DURATION = 60000; // 60 sekunder

export async function getGlobalOptions(): Promise<GlobalOptions> {
  // Använd cache för att minska antalet databaskällningar
  const now = Date.now();
  if (cachedOptions && now - cacheTime < CACHE_DURATION) {
    return cachedOptions;
  }

  try {
    const db = getSupabaseAdmin();
    const { data, error } = await db
      .from("settings")
      .select("key, value")
      .in("key", ["show_gift_cards", "show_corporate_massage"]);

    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows returned
      throw error;
    }

    const settingsMap = new Map(data?.map((row: any) => [row.key, row.value]) ?? []);
    const showGiftCards = settingsMap.has("show_gift_cards")
      ? settingsMap.get("show_gift_cards") === "true" || settingsMap.get("show_gift_cards") === true
      : true;
    const showCorporateMassage = settingsMap.has("show_corporate_massage")
      ? settingsMap.get("show_corporate_massage") === "true" || settingsMap.get("show_corporate_massage") === true
      : true;

    cachedOptions = {
      showGiftCards,
      showCorporateMassage,
    };
    cacheTime = now;

    return cachedOptions;
  } catch (error) {
    console.error("Error fetching global options:", error);
    // Returnera default values om något går fel
    return {
      showGiftCards: true,
      showCorporateMassage: true,
    };
  }
}

export async function updateGlobalOption(key: string, value: string | boolean): Promise<void> {
  const db = getSupabaseAdmin();

  const stringValue = typeof value === "boolean" ? (value ? "true" : "false") : value;

  const { error } = await db
    .from("settings")
    .upsert(
      {
        key,
        value: stringValue,
      },
      { onConflict: "key" }
    )
    .select();

  if (error) {
    throw error;
  }

  // Nollställ cache så ny data hämtas nästa gång
  cachedOptions = null;
  cacheTime = 0;
}
