<script type="ts">
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import { t, locale, locales } from '$lib/i18n/translator';
</script>

<div>
	<div class=" px-2 py-12">
		<LocaleSwitcher />
	</div>

	<div class="h1 px-5 py-8">{$t('tab.title')}</div>
</div>
