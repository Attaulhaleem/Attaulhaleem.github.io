<script lang="ts">
	import { page } from '$app/state';
	import personalLogo from '$lib/assets/logos/personal.svg';
	import personalUrduLogo from '$lib/assets/logos/personal_urdu.svg';
	import Icon from '$lib/components/ui/Icon.svelte';
	import LanguageSwitcher from '$lib/components/layout/LanguageSwitcher.svelte';
	import { getSiteDisplayName } from '$lib/config/site';
	import { toLocale } from '$lib/i18n/locales';
	import { getNavItems } from '$lib/i18n/nav';
	import { localizedPath } from '$lib/i18n/paths';

	const locale = $derived(toLocale(page.params.lang));
	const navItems = $derived(getNavItems(locale));
	const homeHref = $derived(localizedPath(locale, '/'));
	const logoSrc = $derived(locale === 'ur' ? personalUrduLogo : personalLogo);
	const siteDisplayName = $derived(getSiteDisplayName(locale));

	function isActive(href: string, pathname: string): boolean {
		if (href === homeHref) return pathname === homeHref;
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="chrome-bar chrome-bar--top sticky top-0 z-50">
	<div class="section-inner chrome-bar-inner">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href resolved via $lib/i18n/paths -->
		<a href={homeHref} class="group inline-flex shrink-0 items-center text-main no-underline">
			<Icon
				src={logoSrc}
				label={siteDisplayName}
				class="size-8 transition-all duration-300 ease-out group-hover:text-accent-green group-hover:drop-shadow-glow-green"
			/>
		</a>
		<nav
			aria-label="Main"
			class="flex w-full flex-wrap items-center justify-center gap-1 sm:w-auto sm:justify-end sm:gap-2"
		>
			{#each navItems as item (item.href)}
				{@const href = localizedPath(locale, item.href)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href resolved via $lib/i18n/paths -->
				<a {href} class={`nav-pill ${isActive(href, page.url.pathname) ? 'nav-pill--active' : ''}`}>
					{item.label}
				</a>
			{/each}
			<LanguageSwitcher {locale} />
		</nav>
	</div>
</header>
