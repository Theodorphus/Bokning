export interface Slot {
  id: string;
  date: string;        // "YYYY-MM-DD"
  start_time: string;  // "HH:MM:SS"
  duration_minutes: number;
  service_id: string | null;
}

/** Slots grouped by date string */
export type SlotsByDate = Record<string, Slot[]>;
