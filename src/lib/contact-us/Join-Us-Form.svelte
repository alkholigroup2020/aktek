<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { superForm } from 'sveltekit-superforms';
	import { yup } from 'sveltekit-superforms/adapters'; // Import Yup adapter
	import * as yupp from 'yup';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	// Define a Yup schema for validating the "name" field on the client side
	const querySchema = yupp.object({
		name: yupp
			.string()
			.required(`${$t('contact.query.errors.isRequires')}`)
			.min(3, `${$t('contact.query.errors.nameTooShort')}`)
			.max(60, `${$t('contact.query.errors.nameTooLong')}`)
			.matches(/^[\u0621-\u064Aa-zA-Z\s]+$/, `${$t('contact.query.errors.nameContent')}`),
		email: yupp
			.string()
			.required(`${$t('contact.query.errors.isRequires')}`)
			.email(`${$t('contact.query.errors.validEmail')}`)
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				`${$t('contact.query.errors.validEmail')}`
			),
		mobile: yupp
			.string()
			.required(`${$t('contact.query.errors.isRequires')}`)
			.matches(/^[0-9]{10}$/, `${$t('contact.query.errors.mobileError')}`),
		textArea: yupp
			.string()
			.required(`${$t('contact.query.errors.isRequires')}`)
			.max(500, `${$t('contact.query.errors.messageTooLong')}`)
	});

	let showProgressRadial = false;

	export let joinUsFormData;

	const { form, errors, message, constraints, enhance } = superForm(joinUsFormData, {
		validators: yup(querySchema), // Use Yup schema for validation
		validationMethod: 'onblur',
		onSubmit: () => {
			showProgressRadial = true;
		},
		onResult: (result) => {
			showProgressRadial = false;

			if (result.result.status === 200) {
				const successMSG: ToastSettings = {
					message: 'Message Sent. Thank You!',
					hideDismiss: true,
					timeout: 3000,
					background: 'bg-success-700',
					classes: 'text-white text-2xl xl:text-4xl p-2'
				};
				toastStore.trigger(successMSG);
			} else {
				const successMSG: ToastSettings = {
					message: 'Something went wrong. Please try again!',
					hideDismiss: true,
					timeout: 3000,
					background: 'bg-red-600',
					classes: 'text-white text-2xl xl:text-4xl p-2'
				};
				toastStore.trigger(successMSG);
			}
		}
	});
</script>

<div class="relative pb-12 md:pb-24">
	{#if showProgressRadial}
		<div class="w-full flex justify-center items-center bg-transparent absolute h-full z-50">
			<ProgressRadial meter="stroke-surface-500" track="stroke-surface-200" width="w-20 md:w-28" />
		</div>
	{/if}

	<div class="relative">
		{#if $message}
			<!-- eslint-disable-next-line svelte/valid-compile -->
			<!-- <div
				class="status pt-8 text-success-500"
				class:error={$page.status >= 400}
				class:success={$page.status == 200}
			>
				{$message}
			</div> -->
		{/if}
		<form method="POST" action="?/joinUs" enctype="multipart/form-data" use:enhance>
			<div class="grid md:grid-cols-2 gap-3 md:gap-12 xl:gap-16 py-5 md:py-12 xl:py-16">
				<div class="space-y-5 md:space-y-8">
					<!-- first name -->
					<label class="label text-base sm:text-lg lg:text-xl">
						<span class="text-white"
							>{$t('contact.forms.name')} <span class="text-red-500">*</span></span
						>
						<input
							name="name"
							aria-invalid={$errors.name ? 'true' : undefined}
							bind:value={$form.name}
							class="input rounded-md bg-stone-100 h-14 md:h-16 border-none text-base sm:text-lg lg:text-xl"
							type="text"
						/>
						{#if $errors.name}<span class="invalid text-red-500">
								{$errors.name[0]}
							</span>{/if}
					</label>

					<!-- email -->
					<label class="label text-base sm:text-lg lg:text-xl">
						<span class="text-white"
							>{$t('contact.forms.email')} <span class="text-red-500">*</span></span
						>
						<input
							name="email"
							aria-invalid={$errors.email ? 'true' : undefined}
							bind:value={$form.email}
							class="input rounded-md bg-stone-100 h-14 md:h-16 border-none text-base sm:text-lg lg:text-xl"
							type="email"
						/>
						{#if $errors.email}<span class="invalid text-red-500">
								{$errors.email[0]}
							</span>{/if}
					</label>

					<!-- mobile number -->
					<label class="label text-base sm:text-lg lg:text-xl">
						<span class="text-white"
							>{$t('contact.forms.mobile')} <span class="text-red-500">*</span></span
						>
						<input
							name="mobile"
							aria-invalid={$errors.mobile ? 'true' : undefined}
							bind:value={$form.mobile}
							{...$constraints.mobile}
							placeholder="05xxxxxxxx"
							class="input rounded-md bg-stone-100 h-14 md:h-16 border-none text-base sm:text-lg lg:text-xl"
							type="tel"
						/>
						{#if $errors.mobile}<span class="invalid text-red-500">
								{$errors.mobile[0]}
							</span>{/if}
					</label>

					<!-- cv attachment -->
					<label class="label text-base sm:text-lg lg:text-xl">
						<span class="text-white"
							>{$t('contact.forms.attachment')} <span class="text-red-500">*</span></span
						>
						<input
							class="flex input rounded-md bg-stone-100 h-12 md:h-14 border-none text-base sm:text-lg lg:text-xl"
							type="file"
							name="employeeCV"
							accept=".pdf,.docx,.doc"
						/>
						{#if $errors.employeeCV}
							<span class="invalid text-red-500">
								{$errors.employeeCV[0]}
							</span>
						{/if}
					</label>
				</div>

				<div class="pb-8">
					<!-- message field -->
					<div class="h-full">
						<label class="label text-base sm:text-lg lg:text-xl h-full">
							<span class="text-white"
								>{$t('contact.forms.message')} <span class="text-red-500">*</span></span
							>

							<textarea
								class="input rounded-md bg-stone-100 border-none {$errors.textArea
									? 'h-[88%]'
									: 'h-full'}  text-base sm:text-lg lg:text-xl p-5"
								bind:value={$form.textArea}
								title="textarea"
								name="textArea"
							></textarea>

							{#if $errors.textArea}
								<p class="invalid text-red-500">
									{$errors.textArea[0]}
								</p>
							{/if}
						</label>
					</div>
				</div>
			</div>

			<!-- submit button -->
			<div class="my-5 md:mt-5 md:mb-10">
				<button
					type="submit"
					class="btn bg-surface-100 w-full text-base sm:text-lg lg:text-[22px] rounded-md py-4 lg:py-6"
					><span class="text-surface-800">{$t('contact.forms.submit')}</span></button
				>
			</div>
		</form>
	</div>
</div>
