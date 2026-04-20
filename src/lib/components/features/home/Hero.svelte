<script lang="ts">
	import { heroEyebrow } from '$lib/config/site';
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		subtitle: string;
		eyebrow?: string;
		actions?: Snippet;
	};

	let { title, subtitle, eyebrow = heroEyebrow, actions }: Props = $props();
</script>

<div class="flex flex-col gap-6 py-16 md:py-24">
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
