<script lang="ts">
	import { heroEyebrow } from '$lib/config/site';
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		subtitle: string;
		eyebrow?: string;
		/** Vite-resolved URL (import from `$lib/assets`) */
		profileSrc?: string;
		profileAlt?: string;
		actions?: Snippet;
	};

	let { title, subtitle, eyebrow = heroEyebrow, profileSrc, profileAlt, actions }: Props = $props();
</script>

<div
	class="flex flex-col gap-8 py-16 md:flex-row-reverse md:items-center md:gap-12 md:py-24 lg:gap-16"
>
	{#if profileSrc}
		<div class="flex shrink-0 justify-center md:justify-end">
			<img
				src={profileSrc}
				alt={profileAlt ?? ''}
				class="interactive-surface aspect-square h-36 w-36 rounded-full! object-cover shadow-(--shadow-glow) md:h-44 md:w-44"
				width="176"
				height="176"
				decoding="async"
				fetchpriority="high"
			/>
		</div>
	{/if}

	<div class="flex min-w-0 flex-1 flex-col gap-6">
		<p class="font-mono text-sm text-accent-teal">{eyebrow}</p>
		<h1 class="max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
			{title}
		</h1>
		<p class="max-w-2xl text-lg text-muted md:text-xl">
			{subtitle}
		</p>
		{#if actions}
			<div class="flex flex-wrap gap-3">
				{@render actions()}
			</div>
		{/if}
	</div>
</div>
