<script lang="ts">
	import { page } from '$app/state';
	import { getSiteFooterLabel, socialLinks } from '$lib/config/site';
	import SocialLinks from '$lib/components/layout/SocialLinks.svelte';
	import { toLocale } from '$lib/i18n/locales';

	const siteFooterLabel = $derived(getSiteFooterLabel(toLocale(page.params.lang)));
</script>

<footer class="chrome-bar chrome-bar--bottom fixed inset-x-0 bottom-0 z-50">
	<div class="section-inner chrome-bar-inner">
		<p class="type-meta sm:text-sm">{siteFooterLabel}</p>
		<SocialLinks links={socialLinks} class="justify-center sm:justify-end" />
	</div>
</footer>
