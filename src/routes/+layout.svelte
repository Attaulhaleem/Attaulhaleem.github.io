<script lang="ts">
	import './layout.css';
	/* `?url` avoids data: URI inlining — browsers update favicons reliably from real URLs */
	import favicon from '$lib/assets/icons/favicon.svg?url';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<link rel="icon" href={favicon} type="image/svg+xml" sizes="any" />
</svelte:head>

<div class="app-shell">
	<Navbar />
	<main id="main" class="app-main">
		{@render children()}
	</main>
	<Footer />
</div>
