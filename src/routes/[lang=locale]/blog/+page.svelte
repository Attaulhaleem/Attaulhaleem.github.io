<script lang="ts">
	import ArticleCard from '$lib/components/features/blog/ArticleCard.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { getSiteDisplayName } from '$lib/config/site';
	import { getUi } from '$lib/i18n/ui';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const locale = $derived(data.locale);
	const ui = $derived(getUi(locale));
</script>

<svelte:head>
	<title>{ui.blog.metaTitle} — {getSiteDisplayName(locale)}</title>
	<meta name="description" content={ui.blog.metaDescription} />
</svelte:head>

<Section title={ui.blog.heading} id="blog-list">
	<ul class="flex list-none flex-col gap-4 p-0">
		{#each data.posts as post (post.slug)}
			<li>
				<ArticleCard {post} {locale} />
			</li>
		{/each}
	</ul>
</Section>
