<script lang="ts">
	import TimelineItem from '$lib/components/features/about/TimelineItem.svelte';
	import type { TimelineEntry } from '$lib/types/content';

	type Props = {
		entries: TimelineEntry[];
	};

	let { entries }: Props = $props();
</script>

<ol class="relative list-none pl-0">
	{#each entries as entry, i (entry.id)}
		<TimelineItem {entry} isLast={i === entries.length - 1} />
	{/each}
</ol>
