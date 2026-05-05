import flashImage from '$lib/assets/captures/flash.gif';
import oblivisionImage from '$lib/assets/captures/oblivision.png';
import groundedImage from '$lib/assets/captures/grounded.png';
import omnidirectionalConveyorImage from '$lib/assets/captures/omnidirectional_conveyor.gif';
import smartDumbbellImage from '$lib/assets/captures/smart_dumbbell.png';
import mazeSolvingRobotImage from '$lib/assets/captures/arduino_maze.png';
import chessGameImage from '$lib/assets/captures/sfml_chess.png';
import type { Locale } from '$lib/i18n/locales';
import type { Project } from '$lib/types/content';
import type { SkillId } from '$lib/content/skills';

/** Locale-independent wiring (slug, skills, image, outbound URLs). */
type ProjectShared = {
	slug: string;
	skills: readonly SkillId[];
	imageSrc?: string;
	links: { href: string; external?: boolean }[];
};

/** Translatable fields per locale. */
type ProjectCopy = {
	title: string;
	summary: string;
	imageAlt: string;
	/** Labels align 1:1 with `shared.links` by position. */
	linkLabels: string[];
};

const shared: ProjectShared[] = [
	{
		slug: 'flash',
		skills: ['svelte'],
		imageSrc: flashImage,
		links: [
			{ href: 'https://github.com/anirudhprabhakaran3/llm-traffic-management', external: true }
		]
	},
	{
		slug: 'oblivision',
		skills: ['godot'],
		imageSrc: oblivisionImage,
		links: [
			{ href: 'https://dustypizza.itch.io/oblivision', external: true },
			{ href: 'https://github.com/Attaulhaleem/oblivision', external: true }
		]
	},
	{
		slug: 'grounded',
		skills: ['godot'],
		imageSrc: groundedImage,
		links: [
			{ href: 'https://dustypizza.itch.io/grounded', external: true },
			{ href: 'https://github.com/Attaulhaleem/grounded', external: true }
		]
	},
	{
		slug: 'omnidirectional-conveyor',
		skills: ['python', 'raspberry-pi'],
		imageSrc: omnidirectionalConveyorImage,
		links: [{ href: 'https://github.com/Attaulhaleem/omnidirectional-conveyor', external: true }]
	},
	{
		slug: 'smart-dumbbell',
		skills: ['c++', 'arduino'],
		imageSrc: smartDumbbellImage,
		links: [{ href: 'https://github.com/Attaulhaleem/smart-dumbbell', external: true }]
	},
	{
		slug: 'arduino-maze',
		skills: ['arduino'],
		imageSrc: mazeSolvingRobotImage,
		links: [{ href: 'https://github.com/Attaulhaleem/arduino-maze', external: true }]
	},
	{
		slug: 'sfml-chess',
		skills: ['c++'],
		imageSrc: chessGameImage,
		links: [{ href: 'https://github.com/Attaulhaleem/sfml-chess', external: true }]
	}
];

const copyByLocale: Record<Locale, Record<string, ProjectCopy>> = {
	en: {
		flash: {
			title: 'Flash',
			summary: 'Proactive traffic management using real-time traffic and event data.',
			imageAlt: 'Flash',
			linkLabels: ['Source Code (Coming Soon...)']
		},
		oblivision: {
			title: 'Oblivision',
			summary: 'A 2D puzzle platformer made in Godot for a game jam.',
			imageAlt: 'Oblivision',
			linkLabels: ['Demo', 'Source Code']
		},
		grounded: {
			title: 'Grounded',
			summary: 'A casual side-scroller with fun mini-games.',
			imageAlt: 'Grounded',
			linkLabels: ['Demo', 'Source Code']
		},
		'omnidirectional-conveyor': {
			title: 'Omnidirectional Conveyor',
			summary: 'A modular omnidirectional conveyor for material flow.',
			imageAlt: 'Omnidirectional Conveyor',
			linkLabels: ['Source Code']
		},
		'smart-dumbbell': {
			title: 'Smart Dumbbell',
			summary:
				'Real-time workout classification using Arduino Nano 33 BLE Sense, Edge Impulse, and Web Bluetooth.',
			imageAlt: 'Smart Dumbbell',
			linkLabels: ['Source Code']
		},
		'arduino-maze': {
			title: 'Maze Solving Robot',
			summary: 'Mapping and solving of closed mazes using the Arduino platform.',
			imageAlt: 'Maze Solving Robot',
			linkLabels: ['Source Code']
		},
		'sfml-chess': {
			title: 'Chess Game',
			summary: 'A vanilla Chess game created using C++ and SFML.',
			imageAlt: 'Chess Game',
			linkLabels: ['Source Code']
		}
	},
	fr: {
		flash: {
			title: 'Flash',
			summary:
				'Gestion proactive du trafic à partir de données de circulation et d’évènements en temps réel.',
			imageAlt: 'Flash',
			linkLabels: ['Code source (bientôt...)']
		},
		oblivision: {
			title: 'Oblivision',
			summary: 'Un jeu de plateformes avec énigmes en 2D réalisé sous Godot pour une game jam.',
			imageAlt: 'Oblivision',
			linkLabels: ['Démo', 'Code source']
		},
		grounded: {
			title: 'Grounded',
			summary: 'Un side-scroller décontracté avec des mini-jeux amusants.',
			imageAlt: 'Grounded',
			linkLabels: ['Démo', 'Code source']
		},
		'omnidirectional-conveyor': {
			title: 'Convoyeur omnidirectionnel',
			summary: 'Un convoyeur omnidirectionnel modulaire pour le déplacement de matériaux.',
			imageAlt: 'Convoyeur omnidirectionnel',
			linkLabels: ['Code source']
		},
		'smart-dumbbell': {
			title: 'Haltère connecté',
			summary:
				"Classification d'exercices en temps réel avec Arduino Nano 33 BLE Sense, Edge Impulse et Web Bluetooth.",
			imageAlt: 'Haltère connecté',
			linkLabels: ['Code source']
		},
		'arduino-maze': {
			title: 'Robot résolveur de labyrinthe',
			summary: 'Cartographie et résolution de labyrinthes fermés sur plateforme Arduino.',
			imageAlt: 'Robot résolveur de labyrinthe',
			linkLabels: ['Code source']
		},
		'sfml-chess': {
			title: "Jeu d'échecs",
			summary: "Un jeu d'échecs classique développé en C++ avec SFML.",
			imageAlt: "Jeu d'échecs",
			linkLabels: ['Code source']
		}
	},
	ur: {
		flash: {
			title: 'Flash',
			summary: 'ریل ٹائم ٹریفک اور واقعات کے ڈیٹا سے فعال ٹریفک مینجمنٹ۔',
			imageAlt: 'Flash',
			linkLabels: ['سورس کوڈ (جلد...)']
		},
		oblivision: {
			title: 'Oblivision',
			summary: 'گیم جم کے لیے Godot میں بنایا گیا 2D پزل پلیٹ فارمر۔',
			imageAlt: 'Oblivision',
			linkLabels: ['ڈیمو', 'سورس کوڈ']
		},
		grounded: {
			title: 'Grounded',
			summary: 'مزیدار منی گیمز کے ساتھ ایک آرام دہ سائیڈ سکولر۔',
			imageAlt: 'Grounded',
			linkLabels: ['ڈیمو', 'سورس کوڈ']
		},
		'omnidirectional-conveyor': {
			title: 'اومنی ڈائریکشنل کنویئر',
			summary: 'مواد کی نقل کے لیے ماڈیولر اومنی ڈائریکشنل کنویئر۔',
			imageAlt: 'اومنی ڈائریکشنل کنویئر',
			linkLabels: ['سورس کوڈ']
		},
		'smart-dumbbell': {
			title: 'اسمارٹ ڈمبل',
			summary:
				'Arduino Nano 33 BLE Sense، Edge Impulse، اور Web Bluetooth کے ساتھ ورزش کی قسم کی ریئل ٹائم درجہ بندی۔',
			imageAlt: 'اسمارٹ ڈمبل',
			linkLabels: ['سورس کوڈ']
		},
		'arduino-maze': {
			title: 'میز حل کرنے والا روبوٹ',
			summary: 'Arduino پلیٹ فارم پر بند میزوں کی نقشہ سازی اور حل۔',
			imageAlt: 'میز حل کرنے والا روبوٹ',
			linkLabels: ['سورس کوڈ']
		},
		'sfml-chess': {
			title: 'شطرنج',
			summary: 'C++ اور SFML سے بنایا گیا کلاسک شطرنج کا کھیل۔',
			imageAlt: 'شطرنج',
			linkLabels: ['سورس کوڈ']
		}
	}
};

function buildProject(s: ProjectShared, c: ProjectCopy): Project {
	return {
		slug: s.slug,
		title: c.title,
		summary: c.summary,
		imageAlt: c.imageAlt,
		skills: s.skills,
		imageSrc: s.imageSrc,
		links: s.links.map((link, i) => ({
			label: c.linkLabels[i] ?? '',
			href: link.href,
			external: link.external
		}))
	};
}

function allForLocale(locale: Locale): Project[] {
	const localeCopy = copyByLocale[locale];
	return shared.map((s) => buildProject(s, localeCopy[s.slug]));
}

export function getAllProjects(locale: Locale): Project[] {
	return allForLocale(locale);
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
	const s = shared.find((p) => p.slug === slug);
	if (!s) return undefined;
	return buildProject(s, copyByLocale[locale][slug]);
}

export function getFeaturedProjects(locale: Locale, limit = 2): Project[] {
	return allForLocale(locale).slice(0, limit);
}
