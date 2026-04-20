import type { NavItem, SocialLink } from '$lib/types/content';

export const site = {
	/** Shown in nav + footer */
	brand: 'Portfolio',
	name: 'Personal site',
	titleTemplate: '%s · Personal site',
	description: "Engineer's portfolio: projects, writing, and background.",
	url: 'https://example.com' // replace when deploying
} as const;

/** Hero eyebrow line — edit to match your intro */
export const heroEyebrow = 'Engineer · Student · Builder';

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Blog', href: '/blog' }
];

export const socialLinks: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com', icon: 'link' },
	{ label: 'LinkedIn', href: 'https://linkedin.com', icon: 'link' },
	{ label: 'Email', href: 'mailto:hello@example.com', icon: 'mail' }
];
