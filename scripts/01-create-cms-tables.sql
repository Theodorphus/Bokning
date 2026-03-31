-- Migration: Create CMS tables (replace WordPress)
-- Run this in Supabase SQL Editor

-- 1. Services table (replaces WordPress CPT)
CREATE TABLE IF NOT EXISTS services (
  id          BIGSERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  description TEXT,
  short_description TEXT,
  price       TEXT,
  duration    TEXT,
  image_url   TEXT,
  is_active   BOOLEAN DEFAULT true,
  sort_order  INT DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Page content table (generic key/value for all pages)
CREATE TABLE IF NOT EXISTS page_content (
  id         BIGSERIAL PRIMARY KEY,
  page       TEXT NOT NULL,
  key        TEXT NOT NULL,
  value      TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(page, key)
);

-- 3. Seed initial services (from hardcoded ServicesSection.tsx)
INSERT INTO services (title, slug, short_description, description, price, duration, image_url, sort_order)
VALUES
  (
    'Avslappningsmassage',
    'avslappningsmassage',
    'Helkroppsmassage med mjuka, lugna rörelser som löser upp spänningar och sänker stressnivån. Perfekt för återhämtning.',
    'Helkroppsmassage med mjuka, lugna rörelser som löser upp spänningar och sänker stressnivån. Perfekt för återhämtning.',
    'från 695 kr',
    '60–90 min',
    '/images/avslappning.png',
    1
  ),
  (
    'Djupvävnadsmassage',
    'djupvavnadsmassage',
    'Intensivare massage som arbetar djupare i musklerna för att lösa upp kroniska spänningar och smärta.',
    'Intensivare massage som arbetar djupare i musklerna för att lösa upp kroniska spänningar och smärta.',
    'från 795 kr',
    '60–90 min',
    '/images/djupvavnad.png',
    2
  ),
  (
    'Sportmassage',
    'sportmassage',
    'Anpassad för aktiva och idrottare. Förbättrar återhämtning, rörlighet och förebygger skador.',
    'Anpassad för aktiva och idrottare. Förbättrar återhämtning, rörlighet och förebygger skador.',
    'från 795 kr',
    '45–60 min',
    '/images/sport.png',
    3
  ),
  (
    'Gravidmassage',
    'gravidmassage',
    'Skonsam massage anpassad för gravida. Minskar ryggvärk, svullnad och ger välbehövlig avkoppling.',
    'Skonsam massage anpassad för gravida. Minskar ryggvärk, svullnad och ger välbehövlig avkoppling.',
    'från 795 kr',
    '60 min',
    '/images/gravid.png',
    4
  ),
  (
    'Trigger point-terapi',
    'triggerpoint',
    'Riktad behandling av ömma punkter i musklerna. Effektiv mot kronisk smärta och spänningshuvudvärk.',
    'Riktad behandling av ömma punkter i musklerna. Effektiv mot kronisk smärta och spänningshuvudvärk.',
    'från 895 kr',
    '45–60 min',
    '/images/triggerpoint.png',
    5
  )
ON CONFLICT (slug) DO NOTHING;

-- 4. Seed initial page content (from hardcoded pages)
INSERT INTO page_content (page, key, value)
VALUES
  -- Homepage
  ('homepage', 'hero_title', 'Hitta din balans. Känn skillnaden.'),
  ('homepage', 'hero_subtitle', 'Professionell massage i hjärtat av Stockholm. Varje behandling skräddarsys efter just dina behov – oavsett om du söker avkoppling eller smärtlindring.'),
  ('homepage', 'hero_image', '/images/hero.png'),

  -- About page
  ('about', 'title', 'Välkommen till Wellness Studio'),
  ('about', 'subtitle', 'Om terapeuten'),
  ('about', 'body', 'Här kan du skriva en introduktion om dig själv eller ändra denna text från adminpanelen.'),
  ('about', 'image_url', '/images/portratt.png'),

  -- Corporate page
  ('corporate', 'title', 'Investera i ditt teams välmående'),
  ('corporate', 'body', 'Professionell massage för din personalgrupp – på plats hos er eller i vår studio.'),
  ('corporate', 'image_url', '/images/foretag.png'),

  -- Gift cards page
  ('gift_cards', 'title', 'Ge bort välmående'),
  ('gift_cards', 'body', 'Ett presentkort på massage är mer än en present – det är en stund av ro, återhämtning och omsorg.'),
  ('gift_cards', 'image_url', '/images/8.PRESENKORT2.png')
ON CONFLICT (page, key) DO NOTHING;

-- 5. Update settings (ensure these exist)
INSERT INTO settings (key, value)
VALUES
  ('show_gift_cards', 'true'),
  ('show_corporate_massage', 'true')
ON CONFLICT (key) DO NOTHING;
