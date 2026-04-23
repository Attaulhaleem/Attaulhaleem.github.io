import profilePhoto from '$lib/assets/photos/profile_photo.png';
import discordLogo from '$lib/assets/logos/discord.svg';
import fiverrLogo from '$lib/assets/logos/fiverr.svg';
import githubLogo from '$lib/assets/logos/github.svg';
import gmailLogo from '$lib/assets/logos/gmail.svg';
import itchIoLogo from '$lib/assets/logos/itchdotio.svg';
import linkedinLogo from '$lib/assets/logos/linkedin.svg';
import upworkLogo from '$lib/assets/logos/upwork.svg';
import type { SocialLink } from '$lib/types/content';
import type { Locale } from '$lib/i18n/locales';

/** Locale-independent site identity. */
export const site = {
	name: 'Atta Ul Haleem',
	url: 'https://attaulhaleem.com'
} as const;

type SiteCopy = {
	description: string;
	heroEyebrow: string;
	heroHeadline: { title: string; subtitle: string };
	heroProfilePhotoAlt: string;
};

const siteCopy: Record<Locale, SiteCopy> = {
	en: {
		description: 'Personal website of Atta Ul Haleem. Come explore my projects and writings.',
		heroEyebrow: 'Electronics Engineer · Software Developer · Game Designer',
		heroHeadline: {
			title: "Hi, I'm Atta 👋",
			subtitle: 'Engineer with an obsession for electronics and <code/>'
		},
		heroProfilePhotoAlt: `Portrait of ${site.name}`
	},
	fr: {
		description: "Site personnel d'Atta Ul Haleem. Découvrez mes projets et mes écrits.",
		heroEyebrow: 'Ingénieur en électronique · Développeur · Game designer',
		heroHeadline: {
			title: 'Salut, je suis Atta 👋',
			subtitle: "Ingénieur passionné par l'électronique et le <code/>"
		},
		heroProfilePhotoAlt: `Portrait de ${site.name}`
	},
	ur: {
		description: 'عطا الحلیم کی ذاتی ویب سائٹ۔ میرے پروجکٹس اور تحریریں یہاں دیکھیں۔',
		heroEyebrow: 'الیکٹریکل انجینئر · سافٹ ویئر ڈویلپر · گیم ڈیزائنر',
		heroHeadline: {
			title: 'سلام، میرا نام عطاء ہے 👋',
			subtitle: 'الیکٹرونکس اور <code/> کا شوقین انجنیر'
		},
		heroProfilePhotoAlt: `${site.name} کی تصویر`
	}
};

export function getSiteCopy(locale: Locale): SiteCopy {
	return siteCopy[locale];
}

/** Shared profile photo (same asset across locales). */
export const heroProfilePhotoSrc = profilePhoto;

/** Footer / social row — locale-independent. */
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
