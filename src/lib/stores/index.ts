import { writable, derived } from 'svelte/store';

export const currentAppLang = writable({});

// create a derived store that will reactively update the page direction based on the currentAppLang store
export const pageDirection = derived(currentAppLang, ($currentAppLang) =>
	$currentAppLang === 'ar' ? 'rtl' : 'ltr'
);
