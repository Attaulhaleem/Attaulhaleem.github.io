<script lang="ts">
	import Timeline from '$lib/components/features/about/Timeline.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import SkillList from '$lib/components/ui/SkillList.svelte';
	import { site } from '$lib/config/site';
	import { aboutContent } from '$lib/content/about';
	import { allSkills } from '$lib/content/skills';
	import { timeline } from '$lib/content/timeline';
</script>

<svelte:head>
	<title>About — {site.name}</title>
	<meta name="description" content={aboutContent.description} />
</svelte:head>

<Section title={aboutContent.title} id="about-intro">
	<div class="flex flex-col gap-4 text-main/90">
		{#each aboutContent.paragraphs as paragraph, i (i)}
			<p>{paragraph}</p>
		{/each}
	</div>
</Section>

<Section title="Education & experience" id="timeline">
	<Timeline entries={timeline} />
</Section>

<Section title="Tech stack" id="skills">
	<SkillList skills={allSkills} />
</Section>
