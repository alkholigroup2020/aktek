<script type="ts">
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import { currentAppLang } from '$lib/stores';
	import { t, locale, locales } from '$lib/i18n/translator';
</script>

<div>
	<div class=" px-2 py-12">
		<LocaleSwitcher />
	</div>
	<div class="px-5 py-8 text-5xl {$currentAppLang === 'en' ? 'en-common' : 'ar-common'}">
		{$t('tab.title')}
	</div>
</div>

<section>
	<div class="container mx-auto space-y-12">
		<div>
			<p class="text-7xl {$currentAppLang === 'en' ? 'en-title' : 'ar-title'}">
				{$t('tab.title')}
			</p>
		</div>
		<div>
			<p class="text-base {$currentAppLang === 'en' ? 'en-common' : 'ar-common'}">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perspiciatis odio
				accusamus ullam a labore qui vero explicabo voluptate cupiditate!
			</p>
		</div>
	</div>
</section>
