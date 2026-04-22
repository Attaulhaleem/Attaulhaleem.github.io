<script lang="ts">
	import { resolve } from '$app/paths';
	import arrowUpRight from '$lib/assets/icons/arrow_up_right.svg';
	import GlowingCard from '$lib/components/ui/GlowingCard.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import OutboundLink from '$lib/components/ui/OutboundLink.svelte';
	import SkillList from '$lib/components/ui/SkillList.svelte';
	import { resolveSkills } from '$lib/content/skills';
	import type { Project } from '$lib/types/content';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();

	const projectSkills = $derived(resolveSkills(project.skills));

	/** Project footer links: accent + glow, pill surface, nudge icon on hover */
	const projectLinkClass =
		'group inline-flex items-center gap-1.5 rounded-md px-2 -mx-2 py-1 text-sm font-medium text-accent-green no-underline transition-all duration-300 ease-out hover:bg-white/5 hover:text-main hover:shadow-[0_0_22px_rgba(0,255,102,0.22),0_0_40px_rgba(0,255,102,0.08)] hover:[text-shadow:0_0_20px_rgba(0,255,102,0.45)] active:scale-[0.98]';
</script>

<GlowingCard as="article" class="flex h-full flex-col overflow-hidden">
	<div
		class="relative -mx-6 -mt-6 mb-4 flex aspect-video justify-center overflow-hidden bg-app"
		role="img"
		aria-label={project.imageAlt}
	>
		{#if project.imageSrc}
			<img
				src={project.imageSrc}
				alt={project.imageAlt}
				class="block h-full w-auto max-w-none object-contain"
			/>
		{:else}
			<div class="absolute inset-0 flex items-center justify-center p-6 text-center">
				<span class="font-mono text-xs text-muted">{project.imageAlt}</span>
			</div>
		{/if}
	</div>
	<h3 class="text-xl font-semibold tracking-tight">{project.title}</h3>
	<p class="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
	<SkillList skills={projectSkills} class="mt-4" />
	<ul class="mt-5 flex flex-wrap gap-3 border-t border-subtle/70 pt-4">
		{#each project.links as link (link.href)}
			<li>
				{#if link.external}
					<OutboundLink href={link.href} class={projectLinkClass}>
						{link.label}
						<Icon
							src={arrowUpRight}
							class="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</OutboundLink>
				{:else}
					<a href={resolve(link.href as '/')} class={projectLinkClass}>
						{link.label}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</GlowingCard>
