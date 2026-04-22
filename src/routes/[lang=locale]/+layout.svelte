<script lang="ts">
	import { LOCALE_TEXT_DIRECTION } from '$lib/i18n/locales';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	$effect(() => {
		document.documentElement.lang = data.locale;
		document.documentElement.dir = LOCALE_TEXT_DIRECTION[data.locale];
	});
</script>

{@render children()}
