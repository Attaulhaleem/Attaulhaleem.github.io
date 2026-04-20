<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags -- trusted repo-only article HTML */
	type Props = {
		html: string;
		class?: string;
	};

	let { html, class: className = '' }: Props = $props();
</script>

<div class={`prose-article ${className}`}>
	<!-- Trusted static content from the repo; sanitize if sourcing user HTML -->
	{@html html}
</div>
