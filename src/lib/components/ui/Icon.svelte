<script lang="ts">
	type Props = {
		/** Vite-resolved URL of an SVG from `$lib/assets` */
		src: string;
		/** Accessible label; omit for purely decorative icons */
		label?: string;
		class?: string;
	};

	let { src, label, class: className = '' }: Props = $props();
</script>

<span
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
	class="icon inline-block bg-current {className}"
	style:--icon-url={`url("${src}")`}
></span>

<style>
	.icon {
		-webkit-mask: var(--icon-url) no-repeat center / contain;
		mask: var(--icon-url) no-repeat center / contain;
	}
</style>
