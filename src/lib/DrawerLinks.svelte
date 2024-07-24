<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/i18n/translator';
	import { currentAppLang, pageDirection } from '$lib/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!bg-surface-300' : '!bg-surface-200';
</script>

<div dir={$pageDirection}>
	<div class="w-fit flex flex-col justify-center mx-5">
		<!-- <Avatar src="/images/Logo.png" width="w-16" background="bg-none" rounded="rounded-sm" /> -->
		<div class="flex flex-col items-center justify-center">
			<div class="w-32 py-5">
				<img src="/pictures/logo_278x50.webp" alt="company's logo" class="w-full aspect-[278/50]" />
			</div>
		</div>
	</div>
</div>

<hr />

<nav class="list-nav {$currentAppLang === 'en' ? 'en-common text-base' : 'ar-common text-md'}">
	<ul>
		<li>
			<a
				href="/"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.home')}</span>
			</a>
		</li>

		<li>
			<a
				href="/about-us"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/about-us')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.about')}</span>
			</a>
		</li>

		<li>
			<a
				href="/services"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/services')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.services')}</span>
			</a>
		</li>

		<li>
			<a
				href="/contact-us"
				on:click={() => {
					drawerStore.close();
				}}
				style="border-radius: 0px !important;"
				class="hover:rounded-none {classesActive('/contact-us')}"
			>
				<span class="flex-auto py-3 text-black">{$t('nav.contact')}</span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.list-nav > ul > li :hover {
		background: none;
	}
</style>
