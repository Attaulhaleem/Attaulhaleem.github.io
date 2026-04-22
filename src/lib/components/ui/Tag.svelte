<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';

	type Props = {
		label: string;
		/** Optional SVG from `$lib/assets`; rendered to the left of the label */
		iconSrc?: string;
		class?: string;
	};

	let { label, iconSrc, class: className = '' }: Props = $props();
</script>

<span class={`tag-pill ${className}`}>
	{#if iconSrc}
		<Icon src={iconSrc} class="h-3.5 w-3.5 shrink-0" />
	{/if}
	{label}
</span>
