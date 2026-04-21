<script lang="ts">
	import TechStackGrid from '$lib/components/features/about/TechStackGrid.svelte';
	import Timeline from '$lib/components/features/about/Timeline.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { site } from '$lib/config/site';
	import { aboutContent } from '$lib/content/about';
	import { skills } from '$lib/content/skills';
	import { timeline } from '$lib/content/timeline';
</script>

<svelte:head>
	<title>About — {site.brand}</title>
	<meta name="description" content={aboutContent.description} />
</svelte:head>

<Section title={aboutContent.title} id="about-intro">
	<div class="flex max-w-3xl flex-col gap-4 text-main/90">
		{#each aboutContent.paragraphs as paragraph, i (i)}
			<p>{paragraph}</p>
		{/each}
	</div>
</Section>

<Section title="Education & experience" id="timeline">
	<Timeline entries={timeline} />
</Section>

<Section title="Tech stack" id="skills">
	<TechStackGrid {skills} />
</Section>
