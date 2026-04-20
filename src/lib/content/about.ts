/** About page copy — keep out of components for easy edits / CMS migration. */
export const aboutContent = {
	title: 'About',
	description: 'Bio, timeline, and tools I work with.',
	intro:
		"I'm an engineer and graduate student who enjoys building reliable systems and clear interfaces. Replace this intro with your story.",
	paragraphs: [
		'This site is structured so content lives in `$lib/content` and layout stays in reusable components.',
		'Swap timeline entries, skills, and links in one place without touching UI code.'
	] as const
} as const;
