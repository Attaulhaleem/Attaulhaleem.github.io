<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- only https/mailto external links */
	import Icon from '$lib/components/ui/Icon.svelte';
	import type { SocialLink } from '$lib/types/content';

	type Props = {
		links: SocialLink[];
		class?: string;
	};

	let { links, class: className = '' }: Props = $props();
</script>

<ul class={`flex flex-wrap items-center gap-4 ${className}`}>
	{#each links as link (link.href)}
		{@const external = link.href.startsWith('http')}
		<li>
			<a
				href={link.href}
				class="inline-flex items-center text-muted transition-colors hover:text-accent-teal"
				target={external ? '_blank' : undefined}
				rel={external ? 'noreferrer noopener' : undefined}
			>
				<span class="sr-only">{link.label}</span>
				<Icon src={link.iconSrc} class="h-5 w-5" />
			</a>
		</li>
	{/each}
</ul>
