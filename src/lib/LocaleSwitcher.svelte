<script lang="ts">
	import { t, locale, locales } from '$lib/i18n/translator';
</script>

<!-- language switcher -->
<button
	class="btn !bg-transparent px-3 min-[400px]:px-5"
	on:click={() => {
		if ($locale === 'en') {
			$locale = 'ar';
			return;
		}
		$locale = 'en';
	}}
>
	<span class="text-xs lg:text-sm 2xl:text-base max-lg:hidden"
		>{$locale === 'en' ? 'العــربية' : 'English'}</span
	>
</button>
