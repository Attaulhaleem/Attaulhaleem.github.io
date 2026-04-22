<script lang="ts">
	import { resolve } from '$app/paths';
	import { isExternalHref, toInternalHref } from '$lib/utils/href';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'ghost';

	type Props = {
		variant?: Variant;
		href?: string;
		class?: string;
		children: Snippet;
	} & Record<string, unknown>;

	let { variant = 'primary', href, class: className = '', children, ...rest }: Props = $props();

	const isExternal = $derived(!!href && isExternalHref(href));
	const variantClass = $derived(variant === 'ghost' ? 'btn--ghost' : 'btn--primary');
</script>

{#if href && isExternal}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external / mailto -->
	<a {href} class={`btn ${variantClass} ${className}`} {...rest}>
		{@render children()}
	</a>
{:else if href}
	<a href={resolve(toInternalHref(href))} class={`btn ${variantClass} ${className}`} {...rest}>
		{@render children()}
	</a>
{:else}
	<button type="button" class={`btn ${variantClass} ${className}`} {...rest}>
		{@render children()}
	</button>
{/if}
