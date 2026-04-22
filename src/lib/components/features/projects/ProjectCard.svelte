<script lang="ts">
	import arrowUpRight from '$lib/assets/icons/arrow_up_right.svg';
	import GlowingCard from '$lib/components/ui/GlowingCard.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import SkillList from '$lib/components/ui/SkillList.svelte';
	import { resolveSkills } from '$lib/content/skills';
	import type { Locale } from '$lib/i18n/locales';
	import { localizedPath, type AppPath } from '$lib/i18n/paths';
	import type { Project } from '$lib/types/content';
	import { isExternalHref } from '$lib/utils/href';

	type Props = {
		project: Project;
		locale: Locale;
	};

	let { project, locale }: Props = $props();

	const projectSkills = $derived(resolveSkills(project.skills));
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
				<span class="type-meta">{project.imageAlt}</span>
			</div>
		{/if}
	</div>
	<h3 class="type-card-title">{project.title}</h3>
	<p class="type-card-body mt-2 flex-1">{project.summary}</p>
	<SkillList skills={projectSkills} class="mt-4" />
	<ul class="mt-5 flex flex-wrap gap-3 border-t border-subtle/70 pt-4">
		{#each project.links as link (link.href)}
			<li>
				{#if isExternalHref(link.href)}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- explicit outbound URL -->
					<a href={link.href} class="link-accent" target="_blank" rel="noreferrer noopener">
						{link.label}
						<Icon
							src={arrowUpRight}
							class="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				{:else}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href resolved via $lib/i18n/paths -->
					<a href={localizedPath(locale, link.href as AppPath)} class="link-accent">
						{link.label}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</GlowingCard>
