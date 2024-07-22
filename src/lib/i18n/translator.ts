import { derived, writable, get } from 'svelte/store';
import translations from './index';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

// Define Types
type TranslationsType = typeof translations;
type LocaleType = keyof TranslationsType;
type TranslationKeysType = keyof TranslationsType[LocaleType];
type VarsType = { [key: string]: string };

// initiate a local storage variable
const userPreferredLocal: Writable<string> = localStorageStore('preferredLocal', '');

// Get the locale from localStorage, or default to the browser's language, or 'en'
const initialLocale = (get(userPreferredLocal) ||
	(typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : undefined) ||
	'en') as LocaleType;

export const locale = writable<LocaleType>(initialLocale);

// When the locale changes, save it in localStorage
locale.subscribe((value) => {
	userPreferredLocal.set(value);
});

export const locales = Object.keys(translations) as LocaleType[];

function translate(locale: LocaleType, key: TranslationKeysType, vars: VarsType): string {
	// Let's throw some errors if we're trying to use keys/locales that don't exist.
	// We could improve this by using Typescript and/or fallback values.
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	// Grab the translation from the translations object.
	let text = translations[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	// Replace any passed in variables in the translation string.
	Object.keys(vars).forEach((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale: LocaleType) =>
		(key: TranslationKeysType, vars: VarsType = {}) =>
			translate($locale, key, vars)
);

// This function is specifically for server-side use or in non-Svelte contexts.
export function translateServer(
	locale: LocaleType,
	key: TranslationKeysType,
	vars: VarsType = {}
): string {
	// The logic here is the same as in the `translate` function
	let text = translations[locale]?.[key] || '';
	if (!text) throw new Error(`No translation found for ${locale}.${key}`);

	Object.keys(vars).forEach((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}
