/** Shared content models — keep UI generic and data replaceable (CMS/MD later). */

/** Keep in sync with `src/routes` so `resolve()` stays type-safe */
export type AppNavHref = '/' | '/about' | '/projects' | '/blog';

export type NavItem = {
	label: string;
	href: AppNavHref;
};

export type SocialLink = {
	label: string;
	href: string;
	/** Vite-resolved URL of an SVG from `$lib/assets` (e.g. `github_logo.svg`) */
	iconSrc: string;
};

export type TimelineEntry = {
	id: string;
	title: string;
	subtitle: string;
	period: string;
	description: string;
	kind: 'education' | 'experience';
};

export type Skill = {
	id: string;
	label: string;
};

export type Project = {
	slug: string;
	title: string;
	summary: string;
	imageAlt: string;
	tags: string[];
	links: { label: string; href: string; external?: boolean }[];
	/** Optional; use placeholder gradient if absent */
	imageSrc?: string;
};

export type BlogPostMeta = {
	slug: string;
	title: string;
	date: string;
	readingMinutes: number;
	summary: string;
};

export type BlogPost = BlogPostMeta & {
	html: string;
};
