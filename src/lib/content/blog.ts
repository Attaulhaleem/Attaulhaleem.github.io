import type { BlogPost } from '$lib/types/content';

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

function byDateDesc(a: BlogPost, b: BlogPost): number {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getSortedPosts(): BlogPost[] {
	return [...posts].sort(byDateDesc);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(limit = 2): BlogPost[] {
	return getSortedPosts().slice(0, limit);
}
