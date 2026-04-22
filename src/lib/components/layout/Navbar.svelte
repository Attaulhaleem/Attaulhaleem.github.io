<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import personalLogo from '$lib/assets/logos/personal.svg';
	import Icon from '$lib/components/ui/Icon.svelte';
	import { navItems, site } from '$lib/config/site';

	function isActive(href: string, pathname: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="chrome-bar chrome-bar--top sticky top-0 z-50">
	<div class="section-inner chrome-bar-inner">
		<a href={resolve('/')} class="group inline-flex shrink-0 items-center text-main no-underline">
			<Icon
				src={personalLogo}
				label={site.name}
				class="size-8 transition-[filter] duration-300 ease-out group-hover:filter-[drop-shadow(0_0_10px_rgba(0,255,102,0.95))_drop-shadow(0_0_22px_rgba(0,255,102,0.45))_drop-shadow(0_0_36px_rgba(0,255,102,0.2))]"
			/>
		</a>
		<nav
			aria-label="Main"
			class="flex w-full flex-wrap items-center justify-center gap-1 sm:w-auto sm:justify-end sm:gap-2"
		>
			{#each navItems as item (item.href)}
				<a
					href={resolve(item.href)}
					class={`nav-pill ${isActive(item.href, page.url.pathname) ? 'nav-pill--active' : ''}`}
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
</header>
