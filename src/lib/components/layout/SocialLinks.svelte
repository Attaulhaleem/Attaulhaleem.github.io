<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- only https/mailto external links */
	import Icon from '$lib/components/ui/Icon.svelte';
	import type { SocialLink } from '$lib/types/content';
	import { isExternalHref } from '$lib/utils/href';

	type Props = {
		links: SocialLink[];
		class?: string;
	};

	let { links, class: className = '' }: Props = $props();
</script>

<ul class={`flex flex-wrap items-center gap-4 ${className}`}>
	{#each links as link (link.href)}
		{@const external = isExternalHref(link.href)}
		<li>
			<a
				href={link.href}
				class="social-icon"
				target={external ? '_blank' : undefined}
				rel={external ? 'noreferrer noopener' : undefined}
			>
				<span class="sr-only">{link.label}</span>
				<Icon src={link.iconSrc} class="h-5 w-5" />
			</a>
		</li>
	{/each}
</ul>
