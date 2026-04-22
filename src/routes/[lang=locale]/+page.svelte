<script lang="ts">
	import ArticleCard from '$lib/components/features/blog/ArticleCard.svelte';
	import Hero from '$lib/components/features/home/Hero.svelte';
	import ProjectCard from '$lib/components/features/projects/ProjectCard.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { getSiteCopy, heroProfilePhotoSrc, site } from '$lib/config/site';
	import { getFeaturedPosts } from '$lib/content/blog';
	import { getFeaturedProjects } from '$lib/content/projects';
	import { getUi } from '$lib/i18n/ui';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const locale = $derived(data.locale);
	const siteCopy = $derived(getSiteCopy(locale));
	const ui = $derived(getUi(locale));
	const featuredProjects = $derived(getFeaturedProjects(locale, 2));
	const featuredPosts = $derived(getFeaturedPosts(locale, 2));
</script>

<svelte:head>
	<title>{ui.home.metaTitle} — {site.name}</title>
	<meta name="description" content={siteCopy.description} />
</svelte:head>

<div class="section-inner flex flex-col">
	<Hero
		title={siteCopy.heroHeadline.title}
		subtitle={siteCopy.heroHeadline.subtitle}
		eyebrow={siteCopy.heroEyebrow}
		profileSrc={heroProfilePhotoSrc}
		profileAlt={siteCopy.heroProfilePhotoAlt}
	>
		{#snippet actions()}
			<Button href="/about">{ui.home.aboutMe}</Button>
			<Button variant="ghost" href="/projects">{ui.home.viewProjects}</Button>
		{/snippet}
	</Hero>
</div>

<Section title={ui.home.recentProjects} id="projects-preview">
	<div class="grid gap-6 sm:grid-cols-2">
		{#each featuredProjects as project (project.slug)}
			<ProjectCard {project} {locale} />
		{/each}
	</div>
	<p class="pt-2">
		<Button variant="ghost" href="/projects">{ui.home.allProjects}</Button>
	</p>
</Section>

<Section title={ui.home.recentPosts} id="blog-preview">
	<div class="grid gap-6 sm:grid-cols-2">
		{#each featuredPosts as post (post.slug)}
			<ArticleCard {post} {locale} />
		{/each}
	</div>
	<p class="pt-2">
		<Button variant="ghost" href="/blog">{ui.home.allPosts}</Button>
	</p>
</Section>
