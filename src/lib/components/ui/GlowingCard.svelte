<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		as?: 'div' | 'article' | 'section';
		children: Snippet;
	};

	let { class: className = '', as: Tag = 'div', children }: Props = $props();
</script>

<svelte:element this={Tag} class={`interactive-surface p-6 ${className}`}>
	{@render children()}
</svelte:element>
