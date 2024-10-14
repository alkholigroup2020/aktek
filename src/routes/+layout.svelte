<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n/translator';
	// import { t, locale, locales } from '$lib/i18n/translator';
	import WindowSize from '$lib/WindowSize.svelte';
	import MainNav from '$lib/MainNav.svelte';
	import { navigating } from '$app/stores';
	import LoadingSpinner from '$lib/LoadingSpinner.svelte';
	import { pageDirection } from '$lib/stores/index';
	// set the theme to light all the time
	import { setModeCurrent } from '@skeletonlabs/skeleton';

	onMount(async () => {
		setModeCurrent(true);
	});

	$: devOrProduction = process.env.NODE_ENV === 'development' ? true : false;

	// import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	// import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { initializeStores, Drawer, Toast } from '@skeletonlabs/skeleton';
	initializeStores();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import DrawerLinks from '$lib/DrawerLinks.svelte';
	import MainFooter from '$lib/MainFooter.svelte';
	import ScrollToTopButton from '$lib/ScrollToTopButton.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>{$t('tab.title')}</title>
	<meta name="description" content="AKTEK MEP Company" />
</svelte:head>

<Toast position="t" />

<Drawer>
	<DrawerLinks />
</Drawer>

{#if devOrProduction}
	<WindowSize />
{/if}

{#if $navigating}
	<LoadingSpinner />
{:else}
	<!-- <AppShell>...</AppShell> -->

	<ScrollToTopButton />

	<div dir={$pageDirection} class="max-w-[1920px] mx-auto">
		<div class="absolute z-20 w-[100%] min-[1920px]:max-w-[1920px] mx-auto">
			<MainNav />
		</div>

		<slot />

		<!-- footer -->
		<div>
			<MainFooter />
		</div>
	</div>
{/if}
