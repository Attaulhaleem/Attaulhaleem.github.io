<script lang="ts">
	import './layout.css';
	/* `?url` avoids data: URI inlining — browsers update favicons reliably from real URLs */
	import favicon from '$lib/assets/icons/favicon.svg?url';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { onNavigate } from '$app/navigation';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	let ripple = $state<HTMLDivElement | undefined>(undefined);
	let lastPointer = { x: 0, y: 0 };
	let reducedMotion: MediaQueryList | undefined;

	$effect(() => {
		lastPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

		const onPointerDown = (event: PointerEvent) => {
			lastPointer = { x: event.clientX, y: event.clientY };
		};
		document.addEventListener('pointerdown', onPointerDown);

		return () => {
			document.removeEventListener('pointerdown', onPointerDown);
		};
	});

	$effect(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

		return () => {
			reducedMotion = undefined;
		};
	});

	/** Scripted ripple field blur overlay during same-document navigations */
	onNavigate((navigation) => {
		const overlay = ripple;
		if (!overlay || reducedMotion?.matches) {
			window.scrollTo({ top: 0, behavior: 'instant' });
			return;
		}

		overlay.style.setProperty('--ripple-x', `${lastPointer.x}px`);
		overlay.style.setProperty('--ripple-y', `${lastPointer.y}px`);
		overlay.classList.add('is-active');

		return new Promise<void>((resolve) => {
			setTimeout(async () => {
				resolve();
				await navigation.complete;
				window.scrollTo({ top: 0, behavior: 'instant' });
				requestAnimationFrame(() => overlay.classList.remove('is-active'));
			}, 180);
		});
	});
</script>

<svelte:head>
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<link rel="icon" href={favicon} type="image/svg+xml" sizes="any" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
	/>
</svelte:head>

<div class="app-shell">
	<Navbar />
	<div class="page-ripple" aria-hidden="true" bind:this={ripple}></div>
	<main id="main" class="app-main">
		{@render children()}
	</main>
	<Footer />
</div>
