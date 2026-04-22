import profilePhoto from '$lib/assets/photos/profile_photo.png';
import discordLogo from '$lib/assets/icons/discord_logo.svg';
import fiverrLogo from '$lib/assets/icons/fiverr_logo.svg';
import githubLogo from '$lib/assets/icons/github_logo.svg';
import gmailLogo from '$lib/assets/icons/gmail_logo.svg';
import itchIoLogo from '$lib/assets/icons/itch_io_logo.svg';
import linkedinLogo from '$lib/assets/icons/linkedin_logo.svg';
import upworkLogo from '$lib/assets/icons/upwork_logo.svg';
import type { NavItem, SocialLink } from '$lib/types/content';

export const site = {
	/** Shown in nav + footer */
	name: 'Atta Ul Haleem',
	description: "Engineer's portfolio: projects, writing, and background.",
	url: 'https://example.com' // TODO: replace when deploying
} as const;

/** Hero eyebrow line */
export const heroEyebrow = 'Electronics Engineer · Software Developer · Game Designer';

/** Main hero image */
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

/** Footer / social row */
export const socialLinks: SocialLink[] = [
	{ label: 'Email', href: 'mailto:haleem.attaul@gmail.com', iconSrc: gmailLogo },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/attaulhaleem', iconSrc: linkedinLogo },
	{ label: 'GitHub', href: 'https://github.com/Attaulhaleem', iconSrc: githubLogo },
	{ label: 'Itch.io', href: 'https://dustypizza.itch.io', iconSrc: itchIoLogo },
	{ label: 'Discord', href: 'https://discord.com/users/1113896603418366023', iconSrc: discordLogo },
	{
		label: 'Upwork',
		href: 'https://www.upwork.com/freelancers/~01bfb4c00ec17cdcfb?mp_source=share',
		iconSrc: upworkLogo
	},
	{ label: 'Fiverr', href: 'https://www.fiverr.com/attaul_haleem', iconSrc: fiverrLogo }
];
