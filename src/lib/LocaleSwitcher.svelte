<script lang="ts">
	import { locale } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
</script>

<!-- language switcher -->
<button
	class="btn !bg-transparent p-0"
	on:click={() => {
		if ($locale === 'en') {
			$locale = 'ar';
			return;
		}
		$locale = 'en';
	}}
>
	<span
		class={$currentAppLang === 'en'
			? 'ar-common text-lg lg:text-xl 2xl:text-3xl'
			: 'en-common text-base lg:text-lg 2xl:text-2xl'}
		>{$locale === 'en' ? 'العــربية' : 'English'}</span
	>
</button>
