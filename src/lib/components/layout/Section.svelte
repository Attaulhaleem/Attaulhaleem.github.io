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
	<div class="section-inner flex flex-col gap-8">
		{#if title}
			<header class="section-heading">
				<h2 class="section-title">{title}</h2>
			</header>
		{/if}
		{@render children()}
	</div>
</section>
