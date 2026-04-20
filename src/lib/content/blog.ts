import type { BlogPost, BlogPostMeta } from '$lib/types/content';

/** Placeholder HTML until you switch to MD/mdsvex or a CMS. */
const posts: BlogPost[] = [
	{
		slug: 'hello-world',
		title: 'Hello, world',
		date: '2026-01-15',
		readingMinutes: 3,
		summary: 'Kickoff post for the blog section—swap for real content anytime.',
		html: `
			<p>This is a <strong>sample article</strong> body. Replace it with markdown-driven content or a CMS.</p>
			<p>Code samples can use monospace styling from your design system:</p>
			<pre><code>npm run dev</code></pre>
		`.trim()
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
