/** Canonical list of locales supported across content, routing, and UI. */
export const LOCALES = ['en', 'fr'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
	en: 'English',
	fr: 'Français'
};

export function isLocale(value: string): value is Locale {
	return (LOCALES as readonly string[]).includes(value);
}

/** Narrow an unknown route param to a `Locale`, falling back to the default. */
export function toLocale(value: string | undefined): Locale {
	return value && isLocale(value) ? value : DEFAULT_LOCALE;
}
