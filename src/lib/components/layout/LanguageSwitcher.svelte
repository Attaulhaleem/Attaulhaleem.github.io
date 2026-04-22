<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import chevronDown from '$lib/assets/icons/chevron-down-solid-full.svg?url';
	import { LOCALES, LOCALE_LABELS, type Locale } from '$lib/i18n/locales';
	import { swapLocaleInPath } from '$lib/i18n/paths';
	import { getUi } from '$lib/i18n/ui';

	type Props = {
		locale: Locale;
	};

	let { locale }: Props = $props();

	const ui = $derived(getUi(locale));

	function onLocaleChange(event: Event) {
		const select = event.currentTarget as HTMLSelectElement;
		const next = select.value as Locale;
		if (next !== locale) {
			// eslint-disable-next-line svelte/no-navigation-without-resolve -- URL preserves path; only locale segment changes
			void goto(swapLocaleInPath(page.url.pathname, next));
		}
	}
</script>

<div class="flex shrink-0 items-center">
	<label for="site-locale" class="sr-only">{ui.languageSwitcher.label}</label>
	<select
		id="site-locale"
		class="locale-select"
		style:--locale-select-chevron={`url("${chevronDown}")`}
		value={locale}
		onchange={onLocaleChange}
	>
		{#each LOCALES as code (code)}
			<option value={code}>{LOCALE_LABELS[code]}</option>
		{/each}
	</select>
</div>
