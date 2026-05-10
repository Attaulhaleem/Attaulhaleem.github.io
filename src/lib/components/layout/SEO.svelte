<script lang="ts">
	import { page } from '$app/state';
	import { site, getSiteDisplayName, getSiteCopy, socialLinks } from '$lib/config/site';
	import { toLocale } from '$lib/i18n/locales';
	// Let's use the site's profile photo as a fallback OG image since we know it exists.
	// You could replace this later with a dedicated 1200x630 static/og-image.png.
	import ogImageDefault from '$lib/assets/photos/profile_photo.png';

	type Props = {
		title?: string;
		description?: string;
		type?: 'website' | 'article';
		image?: string;
	};

	let { title, description, type = 'website', image }: Props = $props();

	const locale = $derived(toLocale(page.params.lang));
	const siteName = $derived(getSiteDisplayName(locale));
	const defaultCopy = $derived(getSiteCopy(locale));

	// If no title is passed, use the site name. Otherwise, format as "Page Title - Site Name"
	const seoTitle = $derived(title ? `${title} - ${siteName}` : siteName);
	const seoDescription = $derived(description || defaultCopy.description);
	const seoImage = $derived(
		new URL(image || ogImageDefault, page.url.origin).href
	);
	const canonicalUrl = $derived(new URL(page.url.pathname, site.url).href);

	const twitterHandle = socialLinks.find((l) => l.label === 'Twitter' || l.label === 'X')?.href.split('/').pop() || '';
</script>

<svelte:head>
	<!-- Standard Meta Tags -->
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:image" content={seoImage} />
	<meta property="og:site_name" content={siteName} />

	<meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ur' ? 'ur_PK' : 'en_US'} />
	{#if locale !== 'en'}
		<meta property="og:locale:alternate" content="en_US" />
	{/if}
	{#if locale !== 'fr'}
		<meta property="og:locale:alternate" content="fr_FR" />
	{/if}
	{#if locale !== 'ur'}
		<meta property="og:locale:alternate" content="ur_PK" />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
	<meta name="twitter:image" content={seoImage} />
	{#if twitterHandle}
		<meta name="twitter:creator" content={`@${twitterHandle}`} />
		<meta name="twitter:site" content={`@${twitterHandle}`} />
	{/if}
</svelte:head>
