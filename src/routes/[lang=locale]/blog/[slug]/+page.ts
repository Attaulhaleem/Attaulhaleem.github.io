import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/content/blog';
import type { Locale } from '$lib/i18n/locales';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const locale = params.lang as Locale;
	const post = getPostBySlug(params.slug, locale);
	if (!post) error(404, 'Not found');
	return { post };
};
