<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import personalLogoWhite from '$lib/assets/icons/personal_logo_white.svg?url';
	import { navItems, site } from '$lib/config/site';

	function isActive(href: string, pathname: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="chrome-bar chrome-bar--top sticky top-0 z-50">
	<div class="section-inner chrome-bar-inner">
		<a href={resolve('/')} class="group inline-flex shrink-0 items-center no-underline">
			<img
				src={personalLogoWhite}
				alt={site.name}
				width="32"
				height="32"
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
					class={`rounded-md border px-3 py-2 text-sm font-medium no-underline transition-all ${
						isActive(item.href, page.url.pathname)
							? 'border-accent-green/30 bg-white/8 text-main shadow-[0_0_24px_rgba(0,255,102,0.18)]'
							: 'border-transparent text-muted hover:border-subtle hover:bg-white/6 hover:text-main'
					}`}
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
</header>
