<script type="ts">
	import { currentAppLang } from '$lib/stores';
	import { t, locale, locales } from '$lib/i18n/translator';
	import HeroSection from '$lib/home-page/Hero-Section.svelte';
</script>

<HeroSection />

<!-- <div>
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
				Lorem ipsum dolor sit amet!
			</p>
		</div>
	</div>
</section> -->
