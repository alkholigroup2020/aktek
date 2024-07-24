<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { AppBar } from '@skeletonlabs/skeleton';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	// : DrawerSettings
	const drawerSettings: DrawerSettings = {
		id: 'facility',
		bgDrawer: 'bg-surface-200-700-token',
		width: 'w-4/6',
		rounded: 'rounded-sm'
		// bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		// padding: 'p-4',
	};
</script>

<AppBar padding="px-8 2xl:px-20 py-10" background="bg-transparent">
	<svelte:fragment slot="lead">
		<div class="flex items-center">
			<div class="mx-3 sm:mx-5">
				<!-- hamburger btn // -->
				<button
					class="md:hidden mt-2"
					on:click={() => {
						drawerStore.open(drawerSettings);
					}}
					aria-label="a button to open the side drawer"
				>
					<span>
						<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="Menu / Hamburger_LG">
								<path
									id="Vector"
									d="M3 17H21M3 12H21M3 7H21"
									stroke="#d3d3d3"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
						</svg>
					</span>
				</button>
			</div>
			<!-- title -->
			<div class="w-24 2xl:w-[200px]">
				<img src="/pictures/logo_278x50.webp" alt="company's logo" class="w-full aspect-[278/50]" />
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- links -->
		<ul class="flex text-white text-base lg:text-lg 2xl:text-2xl max-md:hidden">
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">
				<span>Home</span>
			</li>
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">About Us</li>
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">Services</li>
			<li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">Contact Us</li>
			<!-- <li class="flex items-center mx-5 xl:mx-7 2xl:mx-10">
				<LocaleSwitcher />
			</li> -->
		</ul>
	</svelte:fragment>
</AppBar>
