<script lang="ts">
	import type { TimelineEntry } from '$lib/types/content';

	type Props = {
		entry: TimelineEntry;
	};

	let { entry }: Props = $props();
</script>

<li class="relative flex gap-4 pb-10 sm:gap-6 last:pb-0">
	<div class="flex flex-col items-center">
		<span
			class="z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent-green bg-app shadow-[0_0_14px_rgba(0,255,102,0.55)]"
			aria-hidden="true"
		></span>
		<span class="w-px grow bg-subtle" aria-hidden="true"></span>
	</div>
	<div class="min-w-0 flex-1 rounded-card border border-subtle/70 bg-surface/70 p-4 backdrop-blur-lg sm:p-5">
		<p class="font-mono text-xs tracking-wide text-accent-green uppercase">
			{entry.kind === 'education' ? 'Education' : 'Experience'} · {entry.period}
		</p>
		<h3 class="mt-1 text-lg font-semibold text-main">{entry.title}</h3>
		<p class="text-sm text-muted">{entry.subtitle}</p>
		<ul
			class="mt-3 list-outside list-disc space-y-2 ps-4 text-sm leading-relaxed text-main/90 marker:text-accent-green"
		>
			{#each entry.description as line, i (`${entry.id}-${i}`)}
				<li>{line}</li>
			{/each}
		</ul>
	</div>
</li>
