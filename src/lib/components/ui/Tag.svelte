<script lang="ts">
	type Props = {
		text: string;
		class?: string;
	};

	let { text, class: className = '' }: Props = $props();
</script>

<span
	class={`inline-flex items-center rounded-md border border-subtle bg-app/60 px-2 py-0.5 font-mono text-xs text-muted ${className}`}
>
	{text}
</span>
