<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { t, locale, locales } from '$lib/i18n/translator';

	// set the theme to light all the time
	import { setModeCurrent } from '@skeletonlabs/skeleton';
	onMount(async () => {
		setModeCurrent(true);
	});

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>{$t('tab.title')}</title>
</svelte:head>

<slot />
