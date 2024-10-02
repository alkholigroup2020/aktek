<script lang="ts">
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores';
	import { t } from '$lib/i18n/translator';
	import { activeSection } from '$lib/stores';

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

<!-- hero section -->
<section>
	<div>
		<img
			alt="services page hero section background"
			src="/pictures/services/services-hero_2000x900.webp"
			srcset="
			  /pictures/services/services-hero_500x400.webp 499w,   
			  /pictures/services/services-hero_800x640.webp 640w, 	 
        /pictures/services/services-hero_1200x720.webp 1024w, 
        /pictures/services/services-hero_1600x800.webp 1536w, 
        /pictures/services/services-hero_2000x1000.webp 9000w"
			class="w-full aspect-[1/0.8] md:aspect-[1/0.6] lg:aspect-[1/0.5]"
		/>
	</div>
</section>

<!-- Product Overview Section -->
<section>
	<!--  -->
	<div class="xl:grid xl:grid-cols-3">
		<!-- page links -->
		<div class="mt-8 xl:mt-12 px-4 xl:px-0 max-md:hidden overflow-auto">
			<div class="max-xl:flex xl:sticky xl:top-8">
				<!-- Product Overview -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="/#first"
						on:click|preventDefault={() => scrollToSection(0)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'first' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-grow py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('services.nav.overview')}</span
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
				<!-- Product Description -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="#second"
						on:click|preventDefault={() => scrollToSection(1)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'second' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('services.nav.description')}</span
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
				<!-- Benefits & Challenges -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="#third"
						on:click|preventDefault={() => scrollToSection(2)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'third' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('services.nav.benefits')}</span
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
				<!-- Project Vision -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="#fourth"
						on:click|preventDefault={() => scrollToSection(3)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'fourth' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('services.nav.vision')}</span
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

		<!-- first section -->
		<div class="xl:col-span-2">
			<div class="mt-12 md:mt-5 lg:mt-8 px-3 sm:px-8 xl:p-12" id="first" bind:this={sections[0]}>
				<div class="space-y-5 xl:space-y-8">
					<!-- title -->
					<div>
						<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
							{$t('services.overview.title')}
						</p>
					</div>

					<!-- the list -->
					<div class="px-5">
						<ul class="list-disc text-base sm:text-lg lg:text-xl space-y-5">
							<li>{$t('services.overview.li1')}</li>
							<li>{$t('services.overview.li2')}</li>
							<li>{$t('services.overview.li3')}</li>
							<li>{$t('services.overview.li4')}</li>
							<li>{$t('services.overview.li5')}</li>
							<li>{$t('services.overview.li6')}</li>
							<li>{$t('services.overview.li7')}</li>
							<li>{$t('services.overview.li8')}</li>
							<li>{$t('services.overview.li9')}</li>
						</ul>
					</div>

					<!-- image -->
					<div class="relative">
						<div class="relative md:w-3/4 lg:w-4/5 xl:w-full">
							<img
								src="/pictures/services/services-page-1_1200x720.webp"
								srcset="/pictures/services/services-page-1_800x480.webp 768px,
								/pictures/services/services-page-1_1200x720.webp 2000px"
								alt="a factory from the inside"
								class="w-full aspect-[1/0.6]"
							/>
						</div>
						<div class="absolute inset-0 bg-secondary-300 opacity-30" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
