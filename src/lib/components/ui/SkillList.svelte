<script lang="ts">
	import Tag from '$lib/components/ui/Tag.svelte';
	import type { Skill } from '$lib/content/skills';

	type Props = {
		/** We only iterate — readonly arrays are fine. */
		skills: Iterable<Skill>;
		class?: string;
	};

	let { skills, class: className = '' }: Props = $props();
</script>

<ul class={`m-0 flex list-none flex-wrap gap-2 p-0 ${className}`}>
	{#each skills as skill (skill.label)}
		<li><Tag {...skill} /></li>
	{/each}
</ul>
