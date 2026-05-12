<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import SEO from '$lib/components/layout/SEO.svelte';
	import ContactForm from '$lib/components/features/contact/ContactForm.svelte';
	import { getUi } from '$lib/i18n/ui';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const locale = $derived(data.locale);
	const ui = $derived(getUi(locale).contact);
</script>

<SEO title={ui.metaTitle} description={ui.metaDescription} />

<Section title={ui.heading} id="contact-intro">
	<div class="mb-8 flex flex-col gap-4 text-main/90">
		<p>{ui.description}</p>
	</div>

	<div class="w-full">
		<ContactForm {locale} />
	</div>
</Section>
