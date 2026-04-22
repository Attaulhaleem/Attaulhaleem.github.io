import { getSortedPosts } from '$lib/content/blog';
import type { Locale } from '$lib/i18n/locales';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const locale = params.lang as Locale;
	return { posts: getSortedPosts(locale) };
};
