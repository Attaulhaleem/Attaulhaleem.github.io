<script lang="ts">
	import Timeline from '$lib/components/features/about/Timeline.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import SkillList from '$lib/components/ui/SkillList.svelte';
	import { site } from '$lib/config/site';
	import { getAbout } from '$lib/content/about';
	import { allSkills } from '$lib/content/skills';
	import { getTimeline } from '$lib/content/timeline';
	import { getUi } from '$lib/i18n/ui';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const locale = $derived(data.locale);
	const ui = $derived(getUi(locale));
	const about = $derived(getAbout(locale));
	const timeline = $derived(getTimeline(locale));
</script>

<svelte:head>
	<title>{ui.about.metaTitle} — {site.name}</title>
	<meta name="description" content={about.description} />
</svelte:head>

<Section title={about.title} id="about-intro">
	<div class="flex flex-col gap-4 text-main/90">
		{#each about.paragraphs as paragraph, i (i)}
			<p>{paragraph}</p>
		{/each}
	</div>
</Section>

<Section title={ui.about.educationExperience} id="timeline">
	<Timeline entries={timeline} {locale} />
</Section>

<Section title={ui.about.techStack} id="skills">
	<SkillList skills={allSkills} />
</Section>
