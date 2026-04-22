import { redirect } from '@sveltejs/kit';
import { DEFAULT_LOCALE } from '$lib/i18n/locales';
import { localizedPath } from '$lib/i18n/paths';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	redirect(307, localizedPath(DEFAULT_LOCALE, '/'));
};
