<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- explicit outbound URLs only */
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		class?: string;
		children: Snippet;
	};

	let { href, class: className = '', children }: Props = $props();
</script>

<a {href} class={className} target="_blank" rel="noreferrer noopener">
	{@render children()}
</a>
