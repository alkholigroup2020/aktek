<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { t, locale, locales } from '$lib/i18n/translator';
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
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	initializeStores();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>{$t('tab.title')}</title>
</svelte:head>

<Drawer />

{#if devOrProduction}
	<WindowSize />
{/if}

{#if $navigating}
	<LoadingSpinner />
{:else}
	<!-- <AppShell>...</AppShell> -->
	<div dir={$pageDirection} class="max-w-[1920px] mx-auto">
		<div class="absolute z-20 w-[100%] min-[1920px]:max-w-[1920px] mx-auto">
			<MainNav />
		</div>

		<slot />
	</div>
{/if}
