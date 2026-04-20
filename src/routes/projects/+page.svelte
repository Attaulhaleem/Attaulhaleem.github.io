<script lang="ts">
	import ProjectCard from '$lib/components/features/projects/ProjectCard.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { site } from '$lib/config/site';
	import { getAllProjects } from '$lib/content/projects';

	const projects = getAllProjects();
</script>

<svelte:head>
	<title>Projects — {site.brand}</title>
	<meta name="description" content="Selected engineering work and experiments." />
</svelte:head>

<Section title="Projects" id="projects">
	<div class="grid gap-6 sm:grid-cols-2">
		{#each projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>
