<script lang="ts">
	import { resolve } from '$app/paths';
	import Prose from '$lib/components/features/blog/Prose.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { site } from '$lib/config/site';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const blogIndexHref = resolve('/blog');
</script>

<svelte:head>
	<title>{data.post.title} — {site.name}</title>
	<meta name="description" content={data.post.summary} />
</svelte:head>

<Section>
	<article class="max-w-3xl">
		<header class="mb-8 border-b border-subtle pb-8">
			<p class="type-eyebrow">
				<time datetime={data.post.date}>{data.post.date}</time>
				· {data.post.readingMinutes} min read
			</p>
			<h1 class="type-post-title mt-3">{data.post.title}</h1>
			<p class="type-lede mt-4">{data.post.summary}</p>
		</header>
		<Prose html={data.post.html} />
		<p class="mt-10">
			<a href={blogIndexHref} class="link-accent"> ← All posts </a>
		</p>
	</article>
</Section>
