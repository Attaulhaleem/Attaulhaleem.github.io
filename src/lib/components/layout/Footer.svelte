<script lang="ts">
	import { site, socialLinks } from '$lib/config/site';
	import SocialLinks from '$lib/components/layout/SocialLinks.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="chrome-bar chrome-bar--bottom fixed inset-x-0 bottom-0 z-50">
	<div class="section-inner chrome-bar-inner">
		<p class="type-meta sm:text-sm">
			© {year}
			{site.name}
		</p>
		<SocialLinks links={socialLinks} class="justify-center sm:justify-end" />
	</div>
</footer>
