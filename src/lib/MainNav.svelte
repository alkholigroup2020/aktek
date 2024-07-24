<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { AppBar } from '@skeletonlabs/skeleton';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
</script>

<AppBar padding="px-8 2xl:px-20 py-10" background="bg-transparent">
	<svelte:fragment slot="lead">
		<div>
			<!-- title -->
			<div class="w-24 2xl:w-[200px]">
				<img src="/pictures/logo_278x50.webp" alt="company's logo" class="w-full aspect-[278/50]" />
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- links -->
		<ul class="flex text-white text-base lg:text-lg 2xl:text-2xl max-lg:hidden">
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">
				<span>Home</span>
			</li>
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">About Us</li>
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">Services</li>
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">Contact Us</li>
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">
				<LocaleSwitcher />
			</li>
		</ul>
	</svelte:fragment>
</AppBar>
