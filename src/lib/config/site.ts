import githubLogo from '$lib/assets/github_logo.svg';
import gmailLogo from '$lib/assets/gmail_logo.svg';
import linkedinLogo from '$lib/assets/linkedin_logo.svg';
import profilePhoto from '$lib/assets/profile.png';
import type { NavItem, SocialLink } from '$lib/types/content';

export const site = {
	/** Shown in nav + footer */
	brand: 'Personal Site · Atta Ul Haleem',
	name: 'Atta Ul Haleem',
	titleTemplate: '%s · Personal Site',
	description:
		"Engineer with an obsession for electronics and <code/>.Engineer's portfolio: projects, writing, and background.",
	url: 'https://example.com' // TODO: replace when deploying
} as const;

/** Hero eyebrow line */
export const heroEyebrow = 'Electronics Engineer · Software Developer · Game Designer';

/** Main hero image — swap `profile.svg` for e.g. `profile.jpg` and update the import above */
export const heroProfilePhoto = {
	src: profilePhoto,
	alt: `Portrait of ${site.name}`
} as const;

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Blog', href: '/blog' }
];

export const socialLinks: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/Attaulhaleem', iconSrc: githubLogo },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/attaulhaleem', iconSrc: linkedinLogo },
	{ label: 'Email', href: 'mailto:haleem.attaul@gmail.com', iconSrc: gmailLogo }
];
