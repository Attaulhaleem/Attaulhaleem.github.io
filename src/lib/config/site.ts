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

/** Locale-independent site identity (canonical Latin name for URLs / structured data). */
export const site = {
	name: 'Atta Ul Haleem',
	url: 'https://attaul.com'
} as const;

/** UI / document titles — Arabic script for Urdu. */
const SITE_DISPLAY_NAME: Record<Locale, string> = {
	en: site.name,
	fr: site.name,
	ur: 'عطاءالحلیم'
};

export function getSiteDisplayName(locale: Locale): string {
	return SITE_DISPLAY_NAME[locale];
}

type SiteCopy = {
	description: string;
	heroEyebrow: string;
	heroHeadline: { title: string; subtitle: string };
	heroProfilePhotoAlt: string;
	footerLabel: string;
};

const siteCopy: Record<Locale, SiteCopy> = {
	en: {
		description: 'Personal website of Atta Ul Haleem. Come explore my projects and writings.',
		heroEyebrow: 'Electronics Engineer · Software Developer · Game Designer',
		heroHeadline: {
			title: "Hi, I'm Atta 👋",
			subtitle: 'Engineer with an obsession for electronics and <code/>'
		},
		heroProfilePhotoAlt: `Portrait of ${SITE_DISPLAY_NAME.en}`,
		footerLabel: `Made with 💚 by Atta © ${new Date().getFullYear()}`
	},
	fr: {
		description: "Site personnel d'Atta Ul Haleem. Découvrez mes projets et mes écrits.",
		heroEyebrow: 'Ingénieur en électronique · Développeur · Game designer',
		heroHeadline: {
			title: 'Salut, je suis Atta 👋',
			subtitle: "Ingénieur passionné par l'électronique et le <code/>"
		},
		heroProfilePhotoAlt: `Portrait de ${SITE_DISPLAY_NAME.fr}`,
		footerLabel: `Fait avec 💚 par Atta © ${new Date().getFullYear()}`
	},
	ur: {
		description: 'عطا الحلیم کی ذاتی ویب سائٹ۔ میرے پروجکٹس اور تحریریں یہاں دیکھیں۔',
		heroEyebrow: 'الیکٹریکل انجینئر · سافٹ ویئر ڈویلپر · گیم ڈیزائنر',
		heroHeadline: {
			title: 'سلام، میرا نام عطا ہے 👋',
			subtitle: 'الیکٹرونکس اور <code/> کا شوقین انجنیر'
		},
		heroProfilePhotoAlt: `کی تصویر ${SITE_DISPLAY_NAME.ur}`,
		footerLabel: `💚 سے بنا۔ عطا © ${new Date().getFullYear()}`
	}
};

export function getSiteCopy(locale: Locale): SiteCopy {
	return siteCopy[locale];
}

export function getSiteFooterLabel(locale: Locale): string {
	return siteCopy[locale].footerLabel;
}

/** Shared profile photo (same asset across locales). */
export const heroProfilePhotoSrc = profilePhoto;

/** Footer / social row — locale-independent. */
export const socialLinks: SocialLink[] = [
	{ label: 'Email', href: 'mailto:contact@attaul.com', iconSrc: gmailLogo },
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
