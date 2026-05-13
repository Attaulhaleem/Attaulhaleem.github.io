<script lang="ts">
	import { getUi } from '$lib/i18n/ui';
	import type { Locale } from '$lib/i18n/locales';
	import { env } from '$env/dynamic/public';

	let { locale }: { locale: Locale } = $props();
	let ui = $derived(getUi(locale).contact.form);

	const accessKey = env.PUBLIC_WEB3FORMS_ACCESS_KEY;

	let state = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		state = 'submitting';

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		formData.append('access_key', accessKey);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					Accept: 'application/json'
				},
				body: formData
			});

			const data = await response.json();

			if (data.success) {
				state = 'success';
				form.reset();
			} else {
				console.error('Web3Forms Error:', data);
				state = 'error';
			}
		} catch (error) {
			console.error('Submission Error:', error);
			state = 'error';
		}
	};
</script>

<div class="surface p-6 md:p-8">
	{#if state === 'success'}
		<div class="flex flex-col items-center justify-center space-y-4 py-8 text-center">
			<div
				class="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500"
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			</div>
			<h3 class="text-xl font-medium text-main">{ui.success}</h3>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-6">
			<!-- Web3Forms Honeypot Spam Protection -->
			<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

			<div>
				<label for="name" class="mb-2 block text-sm font-medium text-main/80">{ui.name}</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					maxlength="100"
					placeholder={ui.namePlaceholder}
					class="w-full rounded-lg border border-subtle bg-main/5 px-4 py-3 text-main placeholder-main/40 transition-all duration-300 focus:border-accent-green/50 focus:bg-white/5 focus:ring-1 focus:ring-accent-green/50 focus:outline-none"
				/>
			</div>

			<div>
				<label for="email" class="mb-2 block text-sm font-medium text-main/80">{ui.email}</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					maxlength="100"
					placeholder={ui.emailPlaceholder}
					class="w-full rounded-lg border border-subtle bg-main/5 px-4 py-3 text-main placeholder-main/40 transition-all duration-300 focus:border-accent-green/50 focus:bg-white/5 focus:ring-1 focus:ring-accent-green/50 focus:outline-none"
				/>
			</div>

			<div>
				<label for="message" class="mb-2 block text-sm font-medium text-main/80">{ui.message}</label
				>
				<textarea
					id="message"
					name="message"
					required
					maxlength="5000"
					rows="5"
					placeholder={ui.messagePlaceholder}
					class="w-full rounded-lg border border-subtle bg-main/5 px-4 py-3 text-main placeholder-main/40 transition-all duration-300 focus:border-accent-green/50 focus:bg-white/5 focus:ring-1 focus:ring-accent-green/50 focus:outline-none"
				></textarea>
			</div>

			{#if state === 'error'}
				<div class="rounded-lg bg-red-500/10 p-4 text-sm text-red-500">
					{ui.error}
				</div>
			{/if}

			<button
				type="submit"
				disabled={state === 'submitting'}
				class="btn btn--primary w-full disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
			>
				{state === 'submitting' ? ui.submitting : ui.submit}
			</button>
		</form>
	{/if}
</div>
