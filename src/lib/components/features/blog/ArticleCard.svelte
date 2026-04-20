<script lang="ts">
	import { resolve } from '$app/paths';
	import type { BlogPostMeta } from '$lib/types/content';

	type Props = {
		post: BlogPostMeta;
		href: string;
	};

	let { post, href }: Props = $props();
</script>

<article class="group interactive-surface rounded-lg p-5">
	<a href={resolve(href as '/')} class="block no-underline">
		<time class="font-mono text-xs text-muted" datetime={post.date}>{post.date}</time>
		<h3 class="mt-2 text-lg font-semibold text-main group-hover:text-accent-teal">{post.title}</h3>
		<p class="mt-2 line-clamp-2 text-sm text-muted">{post.summary}</p>
		<p class="mt-3 font-mono text-xs text-accent-teal">{post.readingMinutes} min read</p>
	</a>
</article>
