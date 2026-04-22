<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	$effect(() => {
		document.documentElement.lang = data.locale;
	});
</script>

{@render children()}
