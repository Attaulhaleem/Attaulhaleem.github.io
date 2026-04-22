<script lang="ts">
	import { page } from '$app/state';
	import { toLocale } from '$lib/i18n/locales';
	import { localizedPath, type AppPath } from '$lib/i18n/paths';
	import { isExternalHref } from '$lib/utils/href';
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
	const locale = $derived(toLocale(page.params.lang));
	const internalHref = $derived(href && !isExternal ? localizedPath(locale, href as AppPath) : '');
</script>

{#if href && isExternal}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external / mailto -->
	<a {href} class={`btn ${variantClass} ${className}`} {...rest}>
		{@render children()}
	</a>
{:else if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href resolved via $lib/i18n/paths -->
	<a href={internalHref} class={`btn ${variantClass} ${className}`} {...rest}>
		{@render children()}
	</a>
{:else}
	<button type="button" class={`btn ${variantClass} ${className}`} {...rest}>
		{@render children()}
	</button>
{/if}
