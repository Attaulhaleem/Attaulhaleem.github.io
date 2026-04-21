<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { navItems, site } from '$lib/config/site';

	function isActive(href: string, pathname: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="nav-blur sticky top-0 z-50">
	<div class="section-inner flex min-h-14 flex-wrap items-center justify-between gap-3 py-2 sm:flex-nowrap sm:gap-4">
		<a
			href={resolve('/')}
			class="font-semibold tracking-tight text-main no-underline hover:text-accent-teal"
		>
			{site.brand}
		</a>
		<nav aria-label="Main" class="flex w-full flex-wrap items-center gap-1 sm:w-auto sm:justify-end sm:gap-2">
			{#each navItems as item (item.href)}
				<a
					href={resolve(item.href)}
					class={`rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors ${
						isActive(item.href, page.url.pathname)
							? 'bg-surface text-accent-teal'
							: 'text-muted hover:bg-surface/60 hover:text-main'
					}`}
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
</header>
