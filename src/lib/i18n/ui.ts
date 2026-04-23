import type { Locale } from '$lib/i18n/locales';

/** Localized UI chrome (nav labels, section titles, buttons, meta). */
export type UiStrings = {
	nav: { home: string; about: string; projects: string; blog: string };
	languageSwitcher: { label: string };
	home: {
		metaTitle: string;
		recentProjects: string;
		recentPosts: string;
		allProjects: string;
		allPosts: string;
		aboutMe: string;
		viewProjects: string;
	};
	about: {
		metaTitle: string;
		educationExperience: string;
		techStack: string;
	};
	projects: {
		metaTitle: string;
		metaDescription: string;
		heading: string;
	};
	blog: {
		metaTitle: string;
		metaDescription: string;
		heading: string;
		readLength: (minutes: number) => string;
		allPostsBack: string;
	};
	timeline: {
		education: string;
		experience: string;
	};
};

const strings: Record<Locale, UiStrings> = {
	en: {
		nav: { home: 'Home', about: 'About', projects: 'Projects', blog: 'Blog' },
		languageSwitcher: { label: 'Language' },
		home: {
			metaTitle: 'Home',
			recentProjects: 'Recent projects',
			recentPosts: 'Recent posts',
			allProjects: 'All projects →',
			allPosts: 'All posts →',
			aboutMe: 'About me',
			viewProjects: 'View projects'
		},
		about: {
			metaTitle: 'About',
			educationExperience: 'Education & experience',
			techStack: 'Tech stack'
		},
		projects: {
			metaTitle: 'Projects',
			metaDescription: 'Selected engineering work and experiments.',
			heading: 'Projects'
		},
		blog: {
			metaTitle: 'Blog',
			metaDescription: 'Articles and notes on engineering and tools.',
			heading: 'Blog',
			readLength: (minutes) => `${minutes} min read`,
			allPostsBack: '← All posts'
		},
		timeline: { education: 'Education', experience: 'Experience' }
	},
	fr: {
		nav: { home: 'Accueil', about: 'À propos', projects: 'Projets', blog: 'Blog' },
		languageSwitcher: { label: 'Langue' },
		home: {
			metaTitle: 'Accueil',
			recentProjects: 'Projets récents',
			recentPosts: 'Articles récents',
			allProjects: 'Tous les projets →',
			allPosts: 'Tous les articles →',
			aboutMe: 'À propos de moi',
			viewProjects: 'Voir les projets'
		},
		about: {
			metaTitle: 'À propos',
			educationExperience: 'Études et expérience',
			techStack: 'Stack technique'
		},
		projects: {
			metaTitle: 'Projets',
			metaDescription: 'Sélection de projets et expérimentations.',
			heading: 'Projets'
		},
		blog: {
			metaTitle: 'Blog',
			metaDescription: "Articles et notes sur l'ingénierie et les outils.",
			heading: 'Blog',
			readLength: (minutes) => `${minutes} min de lecture`,
			allPostsBack: '← Tous les articles'
		},
		timeline: { education: 'Études', experience: 'Expérience' }
	},
	ur: {
		nav: { home: 'مرکز', about: 'تعارف', projects: 'پروجکٹس', blog: 'بلاگ' },
		languageSwitcher: { label: 'زبان' },
		home: {
			metaTitle: 'مرکز',
			recentProjects: 'حالیہ پروجکٹس',
			recentPosts: 'حالیہ تحریریں',
			allProjects: 'تمام پروجکٹس ←',
			allPosts: 'تمام تحریریں ←',
			aboutMe: 'میرا تعارف',
			viewProjects: 'پروجکٹس دیکھیں'
		},
		about: {
			metaTitle: 'تعارف',
			educationExperience: 'تعلیم اور تجربہ',
			techStack: 'ٹیکنیکل اسٹیک'
		},
		projects: {
			metaTitle: 'پروجکٹس',
			metaDescription: 'منتخب انجینئرنگ کے کام اور تجربات۔',
			heading: 'پروجکٹس'
		},
		blog: {
			metaTitle: 'بلاگ',
			metaDescription: 'انجینئرنگ اور ٹولز پر مضامین اور نوٹس۔',
			heading: 'بلاگ',
			readLength: (minutes) => `${minutes} منٹ پڑھنے کا وقت`,
			allPostsBack: 'تمام تحریریں ←'
		},
		timeline: { education: 'تعلیم', experience: 'تجربہ' }
	}
};

export function getUi(locale: Locale): UiStrings {
	return strings[locale];
}
