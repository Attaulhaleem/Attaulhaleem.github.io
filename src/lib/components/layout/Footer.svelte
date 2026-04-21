<script lang="ts">
	import { site, socialLinks } from '$lib/config/site';
	import SocialLinks from '$lib/components/layout/SocialLinks.svelte';

	const year = new Date().getFullYear();
</script>

<footer
	class="fixed inset-x-0 bottom-0 z-50 border-t border-subtle/80 bg-surface/85 py-4 backdrop-blur-2xl sm:py-6"
>
	<div
		class="section-inner flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left"
	>
		<p class="text-sm text-muted sm:text-base">
			© {year}
			{site.name}
		</p>
		<SocialLinks links={socialLinks} class="justify-center sm:justify-end" />
	</div>
</footer>
