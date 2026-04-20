<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'ghost';

	type Props = {
		variant?: Variant;
		href?: string;
		class?: string;
		children: Snippet;
	} & Record<string, unknown>;

	let { variant = 'primary', href, class: className = '', children, ...rest }: Props = $props();

	const isExternal = $derived(
		!!href &&
			(href.startsWith('http://') ||
				href.startsWith('https://') ||
				href.startsWith('mailto:') ||
				href.startsWith('tel:') ||
				href.startsWith('#'))
	);

	const base =
		'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal';

	const variantClass = $derived(
		variant === 'ghost'
			? 'border border-transparent text-main hover:border-subtle hover:bg-surface/60'
			: 'interactive-surface bg-surface text-main'
	);
</script>

{#if href && isExternal}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external / mailto -->
	<a {href} class={`${base} ${variantClass} ${className} no-underline`} {...rest}>
		{@render children()}
	</a>
{:else if href}
	<a
		href={resolve(href as '/')}
		class={`${base} ${variantClass} ${className} no-underline`}
		{...rest}
	>
		{@render children()}
	</a>
{:else}
	<button type="button" class={`${base} ${variantClass} ${className}`} {...rest}>
		{@render children()}
	</button>
{/if}
