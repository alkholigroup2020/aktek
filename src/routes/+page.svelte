<script lang="ts">
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores';
	import { t, locale, locales } from '$lib/i18n/translator';
	import HeroSection from '$lib/home-page/Hero-Section.svelte';
	import { activeSection } from '$lib/stores';
	import FeaturesSection from '$lib/home-page/Features-Section.svelte';
	import ProjectVision from '$lib/home-page/Project-Vision.svelte';
	import SubsidiariesSection from '$lib/home-page/Subsidiaries-Section.svelte';

	let sections: HTMLElement[] = [];

	// Function to set up the Intersection Observer
	function setupObserver() {
		const options = {
			root: null, // Use the viewport as the container
			rootMargin: '0px',
			threshold: 0.4 // Trigger when 40% of the section is in the viewport
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection.set(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});
	}

	// Function to handle smooth scrolling
	function scrollToSection(sectionId: any) {
		sections[sectionId].scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	onMount(() => {
		setupObserver();
	});
</script>

<HeroSection />

<div class="xl:grid xl:grid-cols-3">
	<!-- page links -->
	<div class="mt-32 md:mt-24 xl:mt-12 px-4 xl:px-0 max-md:hidden overflow-auto">
		<div class="max-xl:flex xl:sticky xl:top-8">
			<!-- About Us link -->
			<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
				<a
					href="/#first"
					on:click|preventDefault={() => scrollToSection(0)}
					class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
						? 'text-left'
						: 'text-right'} {$activeSection === 'first' ? 'bg-primary-600' : 'bg-secondary-500'}"
				>
					<span class="flex-grow py-3 text-white text-base sm:text-xl xl:text-2xl"
						>{$t('home.nav.about')}</span
					>
					<!-- icon -->
					<span class="max-lg:hidden {$currentAppLang === 'en' ? '' : 'pr-3'}">
						<svg
							class="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 mx-1 xl:mx-3 {$currentAppLang === 'ar'
								? 'rotate-180'
								: ''}"
							viewBox="0 -6.5 36 36"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<title>right-arrow</title>
							<desc>Created with Sketch.</desc>
							<g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									id="ui-gambling-website-lined-icnos-casinoshunter"
									transform="translate(-212.000000, -159.000000)"
									fill="#FFFFFF"
									fill-rule="nonzero"
								>
									<g id="square-filled" transform="translate(50.000000, 120.000000)">
										<path
											d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
											id="right-arrow"
										>
										</path>
									</g>
								</g>
							</g>
						</svg>
					</span>
				</a>
			</div>
			<!-- Product Overview link -->
			<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
				<a
					href="#second"
					on:click|preventDefault={() => scrollToSection(1)}
					class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
						? 'text-left'
						: 'text-right'} {$activeSection === 'second' ? 'bg-primary-600' : 'bg-secondary-500'}"
				>
					<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
						>{$t('home.nav.product')}</span
					>
					<!-- icon -->
					<span class="max-lg:hidden {$currentAppLang === 'en' ? '' : 'pr-3'}">
						<svg
							class="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 mx-1 xl:mx-3 {$currentAppLang === 'ar'
								? 'rotate-180'
								: ''}"
							viewBox="0 -6.5 36 36"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<title>right-arrow</title>
							<desc>Created with Sketch.</desc>
							<g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									id="ui-gambling-website-lined-icnos-casinoshunter"
									transform="translate(-212.000000, -159.000000)"
									fill="#FFFFFF"
									fill-rule="nonzero"
								>
									<g id="square-filled" transform="translate(50.000000, 120.000000)">
										<path
											d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
											id="right-arrow"
										>
										</path>
									</g>
								</g>
							</g>
						</svg>
					</span>
				</a>
			</div>
			<!-- Management link -->
			<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
				<a
					href="#third"
					on:click|preventDefault={() => scrollToSection(2)}
					class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
						? 'text-left'
						: 'text-right'} {$activeSection === 'third' ? 'bg-primary-600' : 'bg-secondary-500'}"
				>
					<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
						>{$t('home.nav.management')}</span
					>
					<!-- icon -->
					<span class="max-lg:hidden {$currentAppLang === 'en' ? '' : 'pr-3'}">
						<svg
							class="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 mx-1 xl:mx-3 {$currentAppLang === 'ar'
								? 'rotate-180'
								: ''}"
							viewBox="0 -6.5 36 36"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<title>right-arrow</title>
							<desc>Created with Sketch.</desc>
							<g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									id="ui-gambling-website-lined-icnos-casinoshunter"
									transform="translate(-212.000000, -159.000000)"
									fill="#FFFFFF"
									fill-rule="nonzero"
								>
									<g id="square-filled" transform="translate(50.000000, 120.000000)">
										<path
											d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
											id="right-arrow"
										>
										</path>
									</g>
								</g>
							</g>
						</svg>
					</span>
				</a>
			</div>
			<!-- Group Subsidiaries link -->
			<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
				<a
					href="#fourth"
					on:click|preventDefault={() => scrollToSection(3)}
					class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
						? 'text-left'
						: 'text-right'} {$activeSection === 'fourth' ? 'bg-primary-600' : 'bg-secondary-500'}"
				>
					<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
						>{$t('home.nav.subsidiaries')}</span
					>
					<!-- icon -->
					<span class="max-lg:hidden {$currentAppLang === 'en' ? '' : 'pr-3'}">
						<svg
							class="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 mx-1 xl:mx-3 {$currentAppLang === 'ar'
								? 'rotate-180'
								: ''}"
							viewBox="0 -6.5 36 36"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<title>right-arrow</title>
							<desc>Created with Sketch.</desc>
							<g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									id="ui-gambling-website-lined-icnos-casinoshunter"
									transform="translate(-212.000000, -159.000000)"
									fill="#FFFFFF"
									fill-rule="nonzero"
								>
									<g id="square-filled" transform="translate(50.000000, 120.000000)">
										<path
											d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
											id="right-arrow"
										>
										</path>
									</g>
								</g>
							</g>
						</svg>
					</span>
				</a>
			</div>
		</div>
	</div>

	<!-- page content -->
	<div class="xl:col-span-2">
		<div
			class="mt-44 md:mt-5 lg:mt-8 xl:mt-24 px-3 sm:px-8 xl:p-12"
			id="first"
			bind:this={sections[0]}
		>
			<div class="space-y-5 xl:space-y-8">
				<!-- question -->
				<div>
					<p class="text-xl sm:text-2xl lg:text-3xl text-primary-700 font-bold">
						{$t('home.about.question')}
					</p>
				</div>
				<!-- title -->
				<div>
					<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
						{$t('home.about.title')}
					</p>
				</div>
				<!-- paragraph -->
				<div>
					<p class="text-base sm:text-lg lg:text-xl text-justify">
						{$t('home.about.paragraph')}
					</p>
				</div>

				<!-- image -->
				<div class="md:w-2/3 lg:w-3/5 xl:w-full 2xl:w-3/5">
					<img
						src="/pictures/home/who-we-are_800x480.webp"
						srcset="/pictures/home/who-we-are_600x360.webp 590w, 
										/pictures/home/who-we-are_800x480.webp 2000w"
						alt="a factory from inside"
						class="w-full aspect-[1/0.6]"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="second" class="mb-5 lg:mb-8" bind:this={sections[1]}>
	<FeaturesSection />
</div>

<div id="third" bind:this={sections[2]}>
	<ProjectVision />
</div>

<div id="fourth" bind:this={sections[3]}>
	<SubsidiariesSection />
</div>
