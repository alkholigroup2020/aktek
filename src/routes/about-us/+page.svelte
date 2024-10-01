<script lang="ts">
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores';
	import { t } from '$lib/i18n/translator';
	import { activeSection } from '$lib/stores';
	import HeroSection from '$lib/about-page/Hero-Section.svelte';

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

<section>
	<HeroSection />

	<div class="xl:grid xl:grid-cols-3">
		<!-- page links -->
		<div class="mt-32 md:mt-24 xl:mt-12 px-4 xl:px-0 max-md:hidden overflow-auto">
			<div class="max-xl:flex xl:sticky xl:top-8">
				<!-- About Us -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="/#first"
						on:click|preventDefault={() => scrollToSection(0)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'first' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-grow py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('about.nav.about')}</span
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
				<!-- Brand values -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="#second"
						on:click|preventDefault={() => scrollToSection(1)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'second' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('about.nav.brand')}</span
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
				<!-- Management -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="#third"
						on:click|preventDefault={() => scrollToSection(2)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'third' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('about.nav.management')}</span
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
				<!-- ISO Certificates -->
				<div class="mx-1 xl:mx-0 my-8 w-fit xl:w-full 2xl:w-[90%]">
					<a
						href="#fourth"
						on:click|preventDefault={() => scrollToSection(3)}
						class="btn w-full shadow-xl rounded-none {$currentAppLang === 'en'
							? 'text-left'
							: 'text-right'} {$activeSection === 'fourth' ? 'bg-primary-600' : 'bg-secondary-500'}"
					>
						<span class="flex-auto py-3 text-white text-base sm:text-xl xl:text-2xl"
							>{$t('about.nav.isoCertificates')}</span
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
					<!-- title -->
					<div>
						<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
							{$t('about.about.title')}
						</p>
					</div>

					<!-- paragraph -->
					<div>
						<p class="text-base sm:text-lg lg:text-xl text-justify">
							{$t('about.about.paragraph')}
						</p>
					</div>

					<!-- image -->
					<div class="md:w-3/4 lg:w-4/5 xl:w-full">
						<img
							src="/pictures/about/about-inside-factory_1200x600.webp"
							srcset="/pictures/about/about-inside-factory_800x400.webp 768w, 
											/pictures/about/about-inside-factory_1200x600.webp 2000w"
							alt="a factory from the inside"
							class="w-full aspect-[1/0.5]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="second" class="mt-12 mb-10 lg:mb-8" bind:this={sections[1]}>
		<div class="xl:grid xl:grid-cols-3 bg-black text-white py-12 xl:py-16">
			<div class="max-xl:hidden xl:col-span-1"></div>
			<div class="xl:col-span-2 px-3 sm:px-8 xl:px-16 2xl:px-24">
				<!-- vision -->
				<div
					class="flex flex-col items-center xl:flex-row xl:justify-around
					space-y-3 md:space-y-5 2xl:space-y-8 mb-12"
				>
					<!-- image -->
					<div class="w-28 md:w-36 2xl:w-56 2xl:mx-24">
						<img
							src="/pictures/about/vision_200x200.webp"
							srcset="/pictures/about/vision_150x150.webp 768w, 
											/pictures/about/vision_200x200.webp 2000w"
							alt="a vision icon"
							class="w-full aspect-square"
						/>
					</div>
					<!-- text -->
					<div class="text-center">
						<!-- title -->
						<p class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
							{$t('about.vAndV.visionTitle')}
						</p>
						<!-- message -->
						<p class="text-base sm:text-lg lg:text-xl line-clamp-2">
							{$t('about.vAndV.visionText1')} <br class="max-md:hidden" />
							{$t('about.vAndV.visionText2')}
						</p>
					</div>
				</div>

				<!-- values -->
				<div
					class="flex flex-col items-center xl:flex-row-reverse xl:justify-around
					space-y-3 md:space-y-5 2xl:space-y-8"
				>
					<!-- image -->
					<div class="w-28 md:w-36 2xl:w-48">
						<img
							src="/pictures/about/values_200x200.webp"
							srcset="/pictures/about/values_150x150.webp 768w, 
										/pictures/about/values_200x200.webp 2000w"
							alt="a values icon"
							class="w-full aspect-square"
						/>
					</div>
					<!-- text -->
					<div class="max-xl:text-center">
						<!-- title -->
						<p class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
							{$t('about.vAndV.valuesTitle')}
						</p>
						<!-- message -->
						<ul class="text-base sm:text-lg lg:text-xl space-y-2">
							<li>{$t('about.vAndV.valuesLi1')}</li>
							<li>{$t('about.vAndV.valuesLi2')}</li>
							<li>{$t('about.vAndV.valuesLi3')}</li>
							<li>{$t('about.vAndV.valuesLi4')}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="third" bind:this={sections[2]}>
		<div class="xl:grid xl:grid-cols-3 pb-12">
			<div class="max-xl:hidden xl:col-span-1"></div>
			<div class="xl:col-span-2 px-3 sm:px-8 xl:px-0">
				<!-- section title -->
				<div class="pb-5 lg:py-10 xl:py-12">
					<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
						{$t('about.management.title')}
					</p>
				</div>
				<!-- chairman section -->
				<div class="md:flex">
					<!-- image -->
					<div>
						<div class="w-44 sm:w-56 xl:w-60">
							<img
								src="/pictures/about/hamza_250x250.webp"
								srcset="/pictures/about/hamza_200x200.webp 768px,
								/pictures/about/hamza_250x250.webp 2000px"
								alt="the chairman"
								class="w-full aspect-square"
							/>
						</div>
					</div>
					<!-- text -->
					<div
						class="col-span-2 {$currentAppLang === 'en' ? 'md:pl-5 xl:px-12' : 'md:pr-5 xl:px-12'}"
					>
						<!-- name -->
						<div class="pt-3 md:pt-0">
							<p class="text-xl sm:text-2xl lg:text-3xl text-primary-700 font-bold">
								{$t('about.management.chairmanName')}
							</p>
						</div>
						<!-- title -->
						<div class="md:mt-2 xl:py-3">
							<p class="text-lg sm:text-xl lg:text-2xl font-bold">
								{$t('about.management.chairmanTitle')}
							</p>
						</div>
						<!-- paragraph -->
						<div class="space-y-3 pt-3 text-base sm:text-lg lg:text-xl text-justify">
							<p>
								{$t('about.management.chairmanP1')}
							</p>
							<p>
								{$t('about.management.chairmanP2')}
							</p>
							<p>
								{$t('about.management.chairmanP3')}
							</p>
						</div>
					</div>
				</div>

				<!-- GM section -->
				<div class="md:flex py-8 md:py-12">
					<!-- image -->
					<div>
						<div class="w-44 sm:w-56 xl:w-60">
							<img
								src="/pictures/about/ayman_250x250.webp"
								srcset="/pictures/about/ayman_200x200.webp 768px,
								/pictures/about/ayman_250x250.webp 2000px"
								alt="the chairman"
								class="w-full aspect-square"
							/>
						</div>
					</div>
					<!-- text -->
					<div
						class="col-span-2 {$currentAppLang === 'en' ? 'md:pl-5 xl:px-12' : 'md:pr-5 xl:px-12'}"
					>
						<!-- name -->
						<div class="pt-3 md:pt-0">
							<p class="text-xl sm:text-2xl lg:text-3xl text-primary-700 font-bold">
								{$t('about.management.GMName')}
							</p>
						</div>
						<!-- title -->
						<div class="md:mt-2 xl:py-3">
							<p class="text-lg sm:text-xl lg:text-2xl font-bold">
								{$t('about.management.GMTitle')}
							</p>
						</div>
						<!-- paragraph -->
						<div class="space-y-3 pt-3 text-base sm:text-lg lg:text-xl text-justify">
							<p>
								{$t('about.management.GMP1')}
							</p>
							<p>
								{$t('about.management.GMP2')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="fourth" bind:this={sections[3]}>
		<div class="xl:grid xl:grid-cols-3 pb-12">
			<div class="max-xl:hidden xl:col-span-1"></div>
			<div class="xl:col-span-2 px-3 sm:px-8 xl:px-0">
				<!-- section title -->
				<div class="pb-5 lg:py-10 xl:py-12">
					<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
						{$t('about.iso.title')}
					</p>
				</div>

				<!-- certifications -->
				<div
					class="grid grid-cols-1 sm:grid-cols-2 gap-8 2xl:gap-x-32 2xl:gap-y-16 {$currentAppLang ===
					'en'
						? 'xl:pr-10'
						: 'xl:pl-10'}"
				>
					<div class="w-4/5 min-[380px]:w-2/3 sm:w-full">
						<img
							src="/pictures/about/iso1_700x280.webp"
							srcset="/pictures/about/iso1_400x160.webp 768px,
							/pictures/about/iso1_700x280.webp 2000px"
							alt="iso certificate logo"
							class="w-full aspect-[1/0.4]"
						/>
					</div>
					<div class="w-4/5 min-[380px]:w-2/3 sm:w-full">
						<img
							src="/pictures/about/iso2_700x280.webp"
							srcset="/pictures/about/iso2_400x160.webp 768px,
							/pictures/about/iso2_700x280.webp 2000px"
							alt="iso certificate logo"
							class="w-full aspect-[1/0.4]"
						/>
					</div>
					<div class="w-4/5 min-[380px]:w-2/3 sm:w-full">
						<img
							src="/pictures/about/iso3_700x280.webp"
							srcset="/pictures/about/iso3_400x160.webp 768px,
							/pictures/about/iso3_700x280.webp 2000px"
							alt="iso certificate logo"
							class="w-full aspect-[1/0.4]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
