<script lang="ts">
	import Prose from '$lib/components/features/blog/Prose.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { getSiteDisplayName } from '$lib/config/site';
	import { localizedPath } from '$lib/i18n/paths';
	import { getUi } from '$lib/i18n/ui';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const locale = $derived(data.locale);
	const ui = $derived(getUi(locale));
	const blogIndexHref = $derived(localizedPath(locale, '/blog'));
</script>

<svelte:head>
	<title>{data.post.title} — {getSiteDisplayName(locale)}</title>
	<meta name="description" content={data.post.summary} />
</svelte:head>

<Section>
	<article class="max-w-3xl">
		<header class="mb-8 border-b border-subtle pb-8">
			<p class="type-eyebrow">
				<time datetime={data.post.date}>{data.post.date}</time>
				· {ui.blog.readLength(data.post.readingMinutes)}
			</p>
			<h1 class="type-post-title mt-3">{data.post.title}</h1>
			<p class="type-lede mt-4">{data.post.summary}</p>
		</header>
		<Prose html={data.post.html} />
		<p class="mt-10">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href resolved via $lib/i18n/paths -->
			<a href={blogIndexHref} class="link-accent">{ui.blog.allPostsBack}</a>
		</p>
	</article>
</Section>
