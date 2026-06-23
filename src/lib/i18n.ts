export const locales = ['ar', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; native: string; dir: 'rtl' | 'ltr'; htmlLang: string }> = {
  ar: { label: 'AR', native: 'العربية', dir: 'rtl', htmlLang: 'ar-SA' },
  en: { label: 'EN', native: 'English', dir: 'ltr', htmlLang: 'en' },
  fr: { label: 'FR', native: 'Français', dir: 'ltr', htmlLang: 'fr' }
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizePath(locale: Locale, href: string) {
  if (href === '/') return `/${locale}`;
  return `/${locale}${href}`;
}
