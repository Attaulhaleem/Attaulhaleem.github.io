<script lang="ts">
	import type { TimelineEntry } from '$lib/types/content';

	type Props = {
		entry: TimelineEntry;
	};

	let { entry }: Props = $props();
</script>

<li class="relative flex gap-6 pb-10 last:pb-0">
	<div class="flex flex-col items-center">
		<span
			class="z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent-teal bg-app shadow-[0_0_10px_rgba(45,212,191,0.5)]"
			aria-hidden="true"
		></span>
		<span class="w-px grow bg-subtle" aria-hidden="true"></span>
	</div>
	<div class="min-w-0 flex-1">
		<p class="font-mono text-xs tracking-wide text-accent-teal uppercase">
			{entry.kind === 'education' ? 'Education' : 'Experience'} · {entry.period}
		</p>
		<h3 class="mt-1 text-lg font-semibold text-main">{entry.title}</h3>
		<p class="text-sm text-muted">{entry.subtitle}</p>
		<p class="mt-3 text-sm leading-relaxed text-main/90">{entry.description}</p>
	</div>
</li>
