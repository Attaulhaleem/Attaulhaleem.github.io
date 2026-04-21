<script lang="ts">
	import { site, socialLinks } from '$lib/config/site';
	import SocialLinks from '$lib/components/layout/SocialLinks.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="fixed inset-x-0 bottom-0 z-50 border-t border-subtle bg-surface/95 py-6 backdrop-blur">
	<div class="section-inner flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
		<p class="text-sm text-muted">
			© {year}
			{site.name}. All rights reserved.
		</p>
		<SocialLinks links={socialLinks} />
	</div>
</footer>
