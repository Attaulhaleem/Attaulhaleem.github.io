import type { Locale } from '$lib/i18n/locales';
import { getUi } from '$lib/i18n/ui';
import type { NavItem } from '$lib/types/content';

export function getNavItems(locale: Locale): NavItem[] {
	const { nav } = getUi(locale);
	return [
		{ label: nav.home, href: '/' },
		{ label: nav.about, href: '/about' },
		{ label: nav.projects, href: '/projects' },
		{ label: nav.blog, href: '/blog' }
	];
}
