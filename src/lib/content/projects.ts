import type { Project } from '$lib/types/content';

const projects: Project[] = [
	{
		slug: 'sample-sveltekit-app',
		title: 'Sample SvelteKit app',
		summary: 'A minimal scaffold you can extend with real project details and imagery.',
		imageAlt: 'Abstract project preview',
		tags: ['SvelteKit', 'TypeScript', 'Tailwind'],
		links: [
			{ label: 'Source', href: 'https://github.com', external: true },
			{ label: 'Demo', href: 'https://example.com', external: true }
		]
	},
	{
		slug: 'another-project',
		title: 'Another project',
		summary: 'Short description of problem, approach, and outcome.',
		imageAlt: 'Project diagram placeholder',
		tags: ['API', 'Performance'],
		links: [{ label: 'Write-up', href: '/blog/hello-world', external: false }]
	}
];

export function getAllProjects(): Project[] {
	return [...projects];
}

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 2): Project[] {
	return projects.slice(0, limit);
}
