<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';

	type Props = {
		text: string;
		/** Optional SVG from `$lib/assets`; rendered to the left of the text */
		iconSrc?: string;
		class?: string;
	};

	let { text, iconSrc, class: className = '' }: Props = $props();
</script>

<span
	class={`inline-flex items-center gap-1.5 rounded-md border border-subtle bg-app/60 px-2 py-0.5 font-mono text-xs text-muted ${className}`}
>
	{#if iconSrc}
		<Icon src={iconSrc} class="h-3.5 w-3.5 shrink-0" />
	{/if}
	{text}
</span>
