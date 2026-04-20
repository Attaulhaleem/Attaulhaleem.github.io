<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- only https/mailto external links */
	import { ExternalLink, Link, Mail } from 'lucide-svelte';
	import type { SocialLink } from '$lib/types/content';

	type Props = {
		links: SocialLink[];
		class?: string;
	};

	let { links, class: className = '' }: Props = $props();
</script>

<ul class={`flex flex-wrap items-center gap-4 ${className}`}>
	{#each links as link (link.href)}
		<li>
			<a
				href={link.href}
				class="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent-teal"
				target={link.href.startsWith('http') ? '_blank' : undefined}
				rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
			>
				<span class="sr-only">{link.label}</span>
				<span class="inline-flex h-5 w-5" aria-hidden="true">
					{#if link.icon === 'mail'}
						<Mail class="h-5 w-5" />
					{:else if link.icon === 'external'}
						<ExternalLink class="h-5 w-5" />
					{:else}
						<Link class="h-5 w-5" />
					{/if}
				</span>
			</a>
		</li>
	{/each}
</ul>
