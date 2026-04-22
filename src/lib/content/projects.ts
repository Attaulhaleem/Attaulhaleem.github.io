import flashImage from '$lib/assets/captures/flash.gif';
import oblivisionImage from '$lib/assets/captures/oblivision.png';
import groundedImage from '$lib/assets/captures/grounded.png';
import omnidirectionalConveyorImage from '$lib/assets/captures/omnidirectional_conveyor.gif';
import smartDumbbellImage from '$lib/assets/captures/smart_dumbbell.png';
import mazeSolvingRobotImage from '$lib/assets/captures/arduino_maze.png';
import chessGameImage from '$lib/assets/captures/sfml_chess.png';
import type { Project } from '$lib/types/content';

export const projects: readonly Project[] = [
	{
		slug: 'flash',
		title: 'Flash',
		summary: 'Proactive traffic management using real-time traffic and event data.',
		imageAlt: 'Flash',
		skills: ['svelte'],
		links: [
			{
				label: 'Source (Coming Soon...)',
				href: 'https://github.com/anirudhprabhakaran3/llm-traffic-management',
				external: true
			}
		],
		imageSrc: flashImage
	},
	{
		slug: 'oblivision',
		title: 'Oblivision',
		summary: 'A 2D puzzle platformer made in Godot for a game jam.',
		imageAlt: 'Oblivision',
		skills: ['godot'],
		links: [
			{
				label: 'Demo',
				href: 'https://dustypizza.itch.io/oblivision',
				external: true
			},
			{
				label: 'Source',
				href: 'https://github.com/Attaulhaleem/oblivision',
				external: true
			}
		],
		imageSrc: oblivisionImage
	},
	{
		slug: 'grounded',
		title: 'Grounded',
		summary: 'A casual side-scroller with fun mini-games.',
		imageAlt: 'Grounded',
		skills: ['godot'],
		links: [
			{
				label: 'Demo',
				href: 'https://dustypizza.itch.io/grounded',
				external: true
			},
			{
				label: 'Source',
				href: 'https://github.com/Attaulhaleem/grounded',
				external: true
			}
		],
		imageSrc: groundedImage
	},
	{
		slug: 'omnidirectional-conveyor',
		title: 'Omnidirectional Conveyor',
		summary: 'A modular omnidirectional conveyor for material flow.',
		imageAlt: 'Omnidirectional Conveyor',
		skills: ['python', 'raspberry-pi'],
		links: [
			{
				label: 'Source',
				href: 'https://github.com/Attaulhaleem/omnidirectional-conveyor',
				external: true
			}
		],
		imageSrc: omnidirectionalConveyorImage
	},
	{
		slug: 'smart-dumbbell',
		title: 'Smart Dumbbell',
		summary:
			'Real-time workout classification using Arduino Nano 33 BLE Sense, Edge Impulse, and Web Bluetooth.',
		imageAlt: 'Smart Dumbbell',
		skills: ['c++'],
		links: [
			{ label: 'Source', href: 'https://github.com/Attaulhaleem/smart-dumbbell', external: true }
		],
		imageSrc: smartDumbbellImage
	},
	{
		slug: 'arduino-maze',
		title: 'Maze Solving Robot',
		summary: 'Mapping and solving of closed mazes using the Arduino platform.',
		imageAlt: 'Maze Solving Robot',
		skills: ['arduino'],
		links: [
			{ label: 'Source', href: 'https://github.com/Attaulhaleem/arduino-maze', external: true }
		],
		imageSrc: mazeSolvingRobotImage
	},
	{
		slug: 'sfml-chess',
		title: 'Chess Game',
		summary: 'A vanilla Chess game created using C++ and SFML.',
		imageAlt: 'Chess Game',
		skills: ['c++'],
		links: [
			{ label: 'Source', href: 'https://github.com/Attaulhaleem/sfml-chess', external: true }
		],
		imageSrc: chessGameImage
	}
];

export function getAllProjects(): readonly Project[] {
	return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 2): Project[] {
	return projects.slice(0, limit);
}
