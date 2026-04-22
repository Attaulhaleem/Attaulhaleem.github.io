<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		subtitle: string;
		eyebrow: string;
		/** Vite-resolved URL (import from `$lib/assets`) */
		profileSrc?: string;
		profileAlt?: string;
		actions?: Snippet;
	};

	let { title, subtitle, eyebrow, profileSrc, profileAlt, actions }: Props = $props();
</script>

<div
	class="flex flex-col gap-8 py-16 md:flex-row-reverse md:items-center md:gap-12 md:py-24 lg:gap-16"
>
	{#if profileSrc}
		<div class="flex shrink-0 justify-center md:justify-end">
			<img
				src={profileSrc}
				alt={profileAlt ?? ''}
				class="aspect-square h-36 w-36 rounded-full border border-subtle bg-surface/90 object-cover shadow-(--shadow-glow) md:h-44 md:w-44"
				width="176"
				height="176"
				decoding="async"
				fetchpriority="high"
			/>
		</div>
	{/if}

	<div class="flex min-w-0 flex-1 flex-col gap-6">
		<p class="type-eyebrow">{eyebrow}</p>
		<h1 class="type-display max-w-3xl">
			{title}
		</h1>
		<p class="type-lede max-w-2xl">
			{subtitle}
		</p>
		{#if actions}
			<div class="flex flex-wrap gap-3">
				{@render actions()}
			</div>
		{/if}
	</div>
</div>
