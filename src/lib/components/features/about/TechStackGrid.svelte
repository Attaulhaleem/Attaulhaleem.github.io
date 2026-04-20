<script lang="ts">
	import Tag from '$lib/components/ui/Tag.svelte';
	import type { Skill } from '$lib/types/content';

	type Props = {
		skills: Skill[];
	};

	let { skills }: Props = $props();
</script>

<div class="flex flex-wrap gap-2">
	{#each skills as skill (skill.id)}
		<Tag text={skill.label} />
	{/each}
</div>
