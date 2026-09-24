export const LANGUAGES = ['de', 'en'] as const;
export type Lang = (typeof LANGUAGES)[number];

export type Localized<T> = Record<Lang, T>;

export const DEFAULT_LANG: Lang = 'de';
export const STORAGE_KEY = 'dvb.lang';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}
