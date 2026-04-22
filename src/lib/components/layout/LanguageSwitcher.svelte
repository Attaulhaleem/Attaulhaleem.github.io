<script lang="ts">
	import { page } from '$app/state';
	import { LOCALES, LOCALE_LABELS, type Locale } from '$lib/i18n/locales';
	import { swapLocaleInPath } from '$lib/i18n/paths';
	import { getUi } from '$lib/i18n/ui';

	type Props = {
		locale: Locale;
	};

	let { locale }: Props = $props();

	const ui = $derived(getUi(locale));
</script>

<div
	class="flex items-center gap-1 rounded-md border border-subtle bg-white/5 p-1"
	role="group"
	aria-label={ui.languageSwitcher.label}
>
	<!-- eslint-disable svelte/no-navigation-without-resolve -- hrefs resolved via $lib/i18n/paths -->
	{#each LOCALES as code (code)}
		{@const active = code === locale}
		{@const classes = `rounded px-2 py-1 font-mono text-xs uppercase no-underline transition-colors ${active ? 'bg-accent-green/15 text-main' : 'text-muted hover:text-main'}`}
		<a
			href={swapLocaleInPath(page.url.pathname, code)}
			class={classes}
			aria-current={active ? 'true' : undefined}
			aria-label={LOCALE_LABELS[code]}
			hreflang={code}>{code}</a
		>
	{/each}
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
</div>
