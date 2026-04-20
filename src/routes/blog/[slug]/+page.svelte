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
	<title>{data.post.title} — {site.brand}</title>
	<meta name="description" content={data.post.summary} />
</svelte:head>

<Section>
	<article class="max-w-3xl">
		<header class="mb-8 border-b border-subtle pb-8">
			<p class="font-mono text-sm text-accent-teal">
				<time datetime={data.post.date}>{data.post.date}</time>
				· {data.post.readingMinutes} min read
			</p>
			<h1 class="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{data.post.title}</h1>
			<p class="mt-4 text-lg text-muted">{data.post.summary}</p>
		</header>
		<Prose html={data.post.html} />
		<p class="mt-10">
			<a href={blogIndexHref} class="font-medium text-accent-teal no-underline hover:underline">
				← All posts
			</a>
		</p>
	</article>
</Section>
