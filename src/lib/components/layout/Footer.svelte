<script lang="ts">
	import { site, socialLinks } from '$lib/config/site';
	import SocialLinks from '$lib/components/layout/SocialLinks.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="mt-auto border-t border-subtle bg-surface/40 py-10">
	<div class="section-inner flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
		<p class="text-sm text-muted">
			© {year}
			{site.name}. All rights reserved.
		</p>
		<SocialLinks links={socialLinks} />
	</div>
</footer>
