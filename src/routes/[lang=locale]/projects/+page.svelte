<script lang="ts">
	import ProjectCard from '$lib/components/features/projects/ProjectCard.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { site } from '$lib/config/site';
	import { getAllProjects } from '$lib/content/projects';
	import { getUi } from '$lib/i18n/ui';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const locale = $derived(data.locale);
	const ui = $derived(getUi(locale));
	const projects = $derived(getAllProjects(locale));
</script>

<svelte:head>
	<title>{ui.projects.metaTitle} — {site.name}</title>
	<meta name="description" content={ui.projects.metaDescription} />
</svelte:head>

<Section title={ui.projects.heading} id="projects">
	<div class="grid gap-6 sm:grid-cols-2">
		{#each projects as project (project.slug)}
			<ProjectCard {project} {locale} />
		{/each}
	</div>
</Section>
