import type { Locale } from '$lib/i18n/locales';

/** Localized UI chrome (nav labels, section titles, buttons, meta). */
export type UiStrings = {
	nav: { home: string; about: string; projects: string; blog: string; contact: string };
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
	contact: {
		metaTitle: string;
		metaDescription: string;
		heading: string;
		description: string;
		form: {
			name: string;
			namePlaceholder: string;
			email: string;
			emailPlaceholder: string;
			message: string;
			messagePlaceholder: string;
			submit: string;
			submitting: string;
			success: string;
			error: string;
		};
	};
};

const strings: Record<Locale, UiStrings> = {
	en: {
		nav: { home: 'Home', about: 'About', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
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
		timeline: { education: 'Education', experience: 'Experience' },
		contact: {
			metaTitle: 'Contact',
			metaDescription: 'Get in touch for projects, opportunities, or just to say hi.',
			heading: 'Contact',
			description: 'Reach out to discuss ideas, projects, and opportunities — or just to say hi!',
			form: {
				name: 'Name',
				namePlaceholder: 'Bruce Wayne',
				email: 'Email',
				emailPlaceholder: 'definitelynotbatman@gotham.com',
				message: 'Message',
				messagePlaceholder: "Hi Atta, I'd love to chat about...",
				submit: 'Send message',
				submitting: 'Sending...',
				success: "Message received! Thanks for reaching out — I'll get back to you soon.",
				error: 'Oops, something went wrong on my end. Mind trying again?'
			}
		}
	},
	fr: {
		nav: {
			home: 'Accueil',
			about: 'À propos',
			projects: 'Projets',
			blog: 'Blog',
			contact: 'Contact'
		},
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
		timeline: { education: 'Études', experience: 'Expérience' },
		contact: {
			metaTitle: 'Contact',
			metaDescription:
				'Contactez-moi pour des projets, des opportunités, ou juste pour dire bonjour.',
			heading: 'Contact',
			description:
				"Contactez-moi pour discuter d'idées, de projets et d'opportunités — ou juste pour dire bonjour !",
			form: {
				name: 'Nom',
				namePlaceholder: 'Hubert Bonisseur de La Bath',
				email: 'E-mail',
				emailPlaceholder: 'top.espion@oss117.fr',
				message: 'Message',
				messagePlaceholder: "Bonjour Atta, j'aimerais discuter de...",
				submit: 'Envoyer le message',
				submitting: 'Envoi en cours...',
				success: "Message bien reçu ! Merci de m'avoir contacté — je vous réponds très vite.",
				error: 'Oups, un petit problème de mon côté. Ça vous dérange de réessayer ?'
			}
		}
	},
	ur: {
		nav: { home: 'مرکز', about: 'تعارف', projects: 'پروجکٹس', blog: 'بلاگ', contact: 'رابطہ' },
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
		timeline: { education: 'تعلیم', experience: 'تجربہ' },
		contact: {
			metaTitle: 'رابطہ',
			metaDescription: 'پروجیکٹس، مواقع، یا بس سلام کہنے کے لیے رابطہ کریں۔',
			heading: 'رابطہ کریں',
			description: 'آئیڈیاز، پروجیکٹس اور مواقع پر بات کرنے کے لیے رابطہ کریں — یا بس سلام کہیں!',
			form: {
				name: 'نام',
				namePlaceholder: 'مرزا غالب',
				email: 'ای میل',
				emailPlaceholder: 'mirza.ghalib@diwan-e-dil.com',
				message: 'پیغام',
				messagePlaceholder: 'سلام عطا، میں اس بارے میں بات کرنا چاہتا ہوں...',
				submit: 'پیغام بھیجیں',
				submitting: 'بھیجا جا رہا ہے...',
				success: 'پیغام مل گیا! رابطہ کرنے کا شکریہ — میں جلد ہی آپ کو جواب دوں گا۔',
				error: 'اوہو، میری طرف سے کچھ گڑبڑ ہو گئی ہے۔ کیا آپ دوبارہ کوشش کر سکتے ہیں؟'
			}
		}
	}
};

export function getUi(locale: Locale): UiStrings {
	return strings[locale];
}
