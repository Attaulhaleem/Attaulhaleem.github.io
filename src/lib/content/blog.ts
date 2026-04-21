import type { BlogPost, BlogPostMeta } from '$lib/types/content';

/** Placeholder HTML until you switch to MD/mdsvex or a CMS. */
const posts: BlogPost[] = [
	{
		slug: 'hello-world',
		title: 'Hello, world!',
		date: '2026-04-21',
		readingMinutes: 2,
		summary: 'Welcome to my blog!',
		html: `
			<p>Coming soon...`.trim()
	}
];

function byDateDesc(a: BlogPostMeta, b: BlogPostMeta): number {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getAllPostsMeta(): BlogPostMeta[] {
	return posts.map(({ slug, title, date, readingMinutes, summary }) => ({
		slug,
		title,
		date,
		readingMinutes,
		summary
	}));
}

export function getSortedPostsMeta(): BlogPostMeta[] {
	return getAllPostsMeta().sort(byDateDesc);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	return posts.find((p) => p.slug === slug);
}

export function getFeaturedPostsMeta(limit = 2): BlogPostMeta[] {
	return getSortedPostsMeta().slice(0, limit);
}
