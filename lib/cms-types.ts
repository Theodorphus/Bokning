// Types for CMS tables

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  price: string | null;
  duration: string | null;
  image_url: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export type PageContent = Record<string, string>;

export type PageName = 'homepage' | 'about' | 'corporate' | 'gift_cards';

export interface PageContentRow {
  id: number;
  page: PageName;
  key: string;
  value: string;
  updated_at: string;
}

export interface GlobalSettings {
  showGiftCards: boolean;
  showCorporateMassage: boolean;
}
