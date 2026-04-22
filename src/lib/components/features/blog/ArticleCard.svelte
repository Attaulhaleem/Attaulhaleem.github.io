<script lang="ts">
	import { resolve } from '$app/paths';
	import type { BlogPostMeta } from '$lib/types/content';

	type Props = {
		post: BlogPostMeta;
		href: string;
	};

	let { post, href }: Props = $props();
</script>

<article class="group interactive-surface rounded-card p-5">
	<a href={resolve(href as '/')} class="block no-underline">
		<time class="type-meta" datetime={post.date}>{post.date}</time>
		<h3 class="type-card-title mt-2 transition-colors group-hover:text-accent-green">
			{post.title}
		</h3>
		<p class="type-card-body mt-2 line-clamp-2">{post.summary}</p>
		<p class="type-eyebrow mt-3">{post.readingMinutes} min read</p>
	</a>
</article>
