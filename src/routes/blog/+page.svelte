<script lang="ts">
	import ArticleCard from '$lib/components/features/blog/ArticleCard.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { site } from '$lib/config/site';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog — {site.name}</title>
	<meta name="description" content="Articles and notes on engineering and tools." />
</svelte:head>

<Section title="Blog" id="blog-list">
	<ul class="flex list-none flex-col gap-4 p-0">
		{#each data.posts as post (post.slug)}
			<li>
				<ArticleCard {post} href={`/blog/${post.slug}`} />
			</li>
		{/each}
	</ul>
</Section>
