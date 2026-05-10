import { error } from '@sveltejs/kit';
import { getPostBySlug, getSortedPosts } from '$lib/content/blog';
import { LOCALES, type Locale } from '$lib/i18n/locales';
import type { PageLoad } from './$types';

export const entries = () => {
	const result: { lang: Locale; slug: string }[] = [];
	for (const lang of LOCALES) {
		const posts = getSortedPosts(lang);
		for (const post of posts) {
			result.push({ lang, slug: post.slug });
		}
	}
	return result;
};

export const load: PageLoad = ({ params }) => {
	const locale = params.lang as Locale;
	const post = getPostBySlug(params.slug, locale);
	if (!post) error(404, 'Not found');
	return { post };
};
