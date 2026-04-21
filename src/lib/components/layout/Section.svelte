<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title?: string;
		id?: string;
		class?: string;
		children: Snippet;
	};

	let { title, id, class: className = '', children }: Props = $props();
</script>

<section {id} class="section-stack {className}">
	<div class="section-inner flex flex-col gap-6">
		{#if title}
			<h2 class="section-title">{title}</h2>
		{/if}
		{@render children()}
	</div>
</section>
