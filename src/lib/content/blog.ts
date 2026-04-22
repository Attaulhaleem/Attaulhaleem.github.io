import type { Locale } from '$lib/i18n/locales';
import type { BlogPost } from '$lib/types/content';

/** Locale-independent post wiring. */
type PostShared = {
	slug: string;
	date: string;
};

type PostCopy = {
	title: string;
	summary: string;
	readingMinutes: number;
	html: string;
};

const shared: PostShared[] = [{ slug: 'hello-world', date: '2026-04-21' }];

const copyByLocale: Record<Locale, Record<string, PostCopy>> = {
	en: {
		'hello-world': {
			title: 'Hello, world!',
			summary: 'Welcome to my blog!',
			readingMinutes: 2,
			html: '<p>Coming soon...</p>'
		}
	},
	fr: {
		'hello-world': {
			title: 'Bonjour, le monde !',
			summary: 'Bienvenue sur mon blog !',
			readingMinutes: 2,
			html: '<p>Bientôt disponible...</p>'
		}
	},
	ur: {
		'hello-world': {
			title: 'ہیلو، دنیا!',
			summary: 'میرے بلاگ میں خوش آمدید!',
			readingMinutes: 2,
			html: '<p>جلد آرہا ہے...</p>'
		}
	}
};

function buildPost(s: PostShared, c: PostCopy): BlogPost {
	return {
		slug: s.slug,
		date: s.date,
		title: c.title,
		summary: c.summary,
		readingMinutes: c.readingMinutes,
		html: c.html
	};
}

function byDateDesc(a: BlogPost, b: BlogPost): number {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function allForLocale(locale: Locale): BlogPost[] {
	const localeCopy = copyByLocale[locale];
	return shared.filter((s) => localeCopy[s.slug]).map((s) => buildPost(s, localeCopy[s.slug]));
}

export function getSortedPosts(locale: Locale): BlogPost[] {
	return allForLocale(locale).sort(byDateDesc);
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | undefined {
	const s = shared.find((p) => p.slug === slug);
	if (!s) return undefined;
	const c = copyByLocale[locale][slug];
	if (!c) return undefined;
	return buildPost(s, c);
}

export function getFeaturedPosts(locale: Locale, limit = 2): BlogPost[] {
	return getSortedPosts(locale).slice(0, limit);
}
