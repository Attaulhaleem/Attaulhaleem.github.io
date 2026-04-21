<script lang="ts">
	import { resolve } from '$app/paths';
	import arrowUpRight from '$lib/assets/icons/arrow_up_right.svg';
	import GlowingCard from '$lib/components/ui/GlowingCard.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import OutboundLink from '$lib/components/ui/OutboundLink.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import type { Project } from '$lib/types/content';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();
</script>

<GlowingCard as="article" class="flex h-full flex-col overflow-hidden">
	<div
		class="relative -mx-6 -mt-6 mb-4 flex aspect-video justify-center overflow-hidden bg-gradient-to-br from-subtle to-app"
		role="img"
		aria-label={project.imageAlt}
	>
		{#if project.imageSrc}
			<img
				src={project.imageSrc}
				alt={project.imageAlt}
				class="block h-full w-auto"
			/>
		{:else}
			<div class="absolute inset-0 flex items-center justify-center p-6 text-center">
				<span class="font-mono text-xs text-muted">{project.imageAlt}</span>
			</div>
		{/if}
	</div>
	<h3 class="text-xl font-semibold tracking-tight">{project.title}</h3>
	<p class="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
	<div class="mt-4 flex flex-wrap gap-2">
		{#each project.tags as tag (tag)}
			<Tag text={tag} />
		{/each}
	</div>
	<ul class="mt-5 flex flex-wrap gap-3 border-t border-subtle pt-4">
		{#each project.links as link (link.href)}
			<li>
				{#if link.external}
					<OutboundLink
						href={link.href}
						class="inline-flex items-center gap-1 text-sm font-medium text-accent-teal no-underline hover:text-main"
					>
						{link.label}
						<Icon src={arrowUpRight} class="h-4 w-4" />
					</OutboundLink>
				{:else}
					<a
						href={resolve(link.href as '/')}
						class="inline-flex items-center gap-1 text-sm font-medium text-accent-teal no-underline hover:text-main"
					>
						{link.label}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</GlowingCard>
