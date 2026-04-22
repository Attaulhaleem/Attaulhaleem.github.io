<script lang="ts">
	import TimelineItem from '$lib/components/features/about/TimelineItem.svelte';
	import type { Locale } from '$lib/i18n/locales';
	import type { TimelineEntry } from '$lib/types/content';

	type Props = {
		entries: TimelineEntry[];
		locale: Locale;
	};

	let { entries, locale }: Props = $props();
</script>

<ol class="relative list-none pl-0">
	{#each entries as entry (entry.id)}
		<TimelineItem {entry} {locale} />
	{/each}
</ol>
