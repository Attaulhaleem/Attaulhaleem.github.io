<script lang="ts">
	import type { Locale } from '$lib/i18n/locales';
	import { localizedBlogPost } from '$lib/i18n/paths';
	import { getUi } from '$lib/i18n/ui';
	import type { BlogPostMeta } from '$lib/types/content';

	type Props = {
		post: BlogPostMeta;
		locale: Locale;
	};

	let { post, locale }: Props = $props();

	const href = $derived(localizedBlogPost(locale, post.slug));
	const ui = $derived(getUi(locale));
</script>

<article class="group interactive-surface rounded-card p-5">
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href resolved via $lib/i18n/paths -->
	<a {href} class="block no-underline">
		<time class="type-meta" datetime={post.date}>{post.date}</time>
		<h3 class="type-card-title mt-2 transition-colors group-hover:text-accent-green">
			{post.title}
		</h3>
		<p class="type-card-body mt-2 line-clamp-2">{post.summary}</p>
		<p class="type-eyebrow mt-3">{ui.blog.readLength(post.readingMinutes)}</p>
	</a>
</article>
