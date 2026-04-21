<script lang="ts">
	import ArticleCard from '$lib/components/features/blog/ArticleCard.svelte';
	import Hero from '$lib/components/features/home/Hero.svelte';
	import ProjectCard from '$lib/components/features/projects/ProjectCard.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { heroProfilePhoto, site } from '$lib/config/site';
	import { getFeaturedPostsMeta } from '$lib/content/blog';
	import { getFeaturedProjects } from '$lib/content/projects';

	const featuredProjects = getFeaturedProjects(2);
	const featuredPosts = getFeaturedPostsMeta(2);
</script>

<svelte:head>
	<title>{site.brand}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<div class="section-inner flex flex-col">
	<Hero
		title="Hi, I'm Atta 👋"
		subtitle="Engineer with an obsession for electronics and <code/>"
		profileSrc={heroProfilePhoto.src}
		profileAlt={heroProfilePhoto.alt}
	>
		{#snippet actions()}
			<Button href="/projects">View projects</Button>
			<Button href="/blog">Read the blog</Button>
		{/snippet}
	</Hero>
</div>

<Section title="Recent projects" id="projects-preview">
	<div class="grid gap-6 sm:grid-cols-2">
		{#each featuredProjects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
	<p class="pt-2">
		<Button variant="ghost" href="/projects">All projects →</Button>
	</p>
</Section>

<Section title="Recent posts" id="blog-preview">
	<div class="grid gap-6 sm:grid-cols-2">
		{#each featuredPosts as post (post.slug)}
			<ArticleCard {post} href={`/blog/${post.slug}`} />
		{/each}
	</div>
	<p class="pt-2">
		<Button variant="ghost" href="/blog">All posts →</Button>
	</p>
</Section>
