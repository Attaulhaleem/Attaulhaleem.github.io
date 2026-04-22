<script lang="ts">
	import type { TimelineEntry } from '$lib/types/content';

	type Props = {
		entry: TimelineEntry;
	};

	let { entry }: Props = $props();

	const TIMELINE_KIND_LABEL: Record<TimelineEntry['kind'], string> = {
		education: 'Education',
		experience: 'Experience'
	};
</script>

<li class="relative flex gap-4 pb-10 last:pb-0 sm:gap-6">
	<div class="flex flex-col items-center">
		<span
			class="z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent-green bg-app shadow-[0_0_14px_rgba(0,255,102,0.55)]"
			aria-hidden="true"
		></span>
		<span class="w-0.5 grow bg-white/12" aria-hidden="true"></span>
	</div>
	<div class="interactive-surface min-w-0 flex-1 p-4 sm:p-5">
		<p class="type-eyebrow">
			{TIMELINE_KIND_LABEL[entry.kind]} · {entry.period}
		</p>
		<h3 class="type-card-title mt-1">{entry.title}</h3>
		<p class="type-card-body">{entry.subtitle}</p>
		<ul
			class="type-card-body mt-3 list-outside list-disc space-y-2 ps-4 text-main/90 marker:text-accent-green"
		>
			{#each entry.description as line, i (`${entry.id}-${i}`)}
				<li>{line}</li>
			{/each}
		</ul>
	</div>
</li>
