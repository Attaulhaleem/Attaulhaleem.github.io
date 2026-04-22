import { resolve } from '$app/paths';
import type { Locale } from '$lib/i18n/locales';

/** Top-level in-app paths (without the locale segment). Keep in sync with `src/routes/[lang]`. */
export type AppPath = '/' | '/about' | '/projects' | '/blog';

/** Build a type-safe URL under the active locale for a top-level page. */
export function localizedPath(locale: Locale, path: AppPath): string {
	switch (path) {
		case '/':
			return resolve('/[lang=locale]', { lang: locale });
		case '/about':
			return resolve('/[lang=locale]/about', { lang: locale });
		case '/projects':
			return resolve('/[lang=locale]/projects', { lang: locale });
		case '/blog':
			return resolve('/[lang=locale]/blog', { lang: locale });
	}
}

/** Build a type-safe URL for a single blog post under the active locale. */
export function localizedBlogPost(locale: Locale, slug: string): string {
	return resolve('/[lang=locale]/blog/[slug]', { lang: locale, slug });
}

/**
 * Swap the locale segment of any in-app pathname to `nextLocale`, preserving the rest.
 * Used by the language switcher, where the remaining path is unknown at compile time.
 */
export function swapLocaleInPath(pathname: string, nextLocale: Locale): string {
	const segments = pathname.split('/').filter(Boolean);
	if (segments.length === 0) return resolve('/[lang=locale]', { lang: nextLocale });
	segments[0] = nextLocale;
	return `/${segments.join('/')}`;
}
