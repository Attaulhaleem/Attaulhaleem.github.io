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

<span
	class={`inline-flex items-center gap-1.5 rounded-md border border-subtle bg-app/60 px-2 py-0.5 font-mono text-xs text-muted transition-all duration-300 ease-out hover:border-accent-green/40 hover:bg-white/4 hover:text-main hover:shadow-[0_0_16px_rgba(0,255,102,0.28),0_0_32px_rgba(0,255,102,0.1)] ${className}`}
>
	{#if iconSrc}
		<Icon src={iconSrc} class="h-3.5 w-3.5 shrink-0" />
	{/if}
	{label}
</span>
