<script lang="ts">
	import { onMount } from 'svelte';
	import { currentAppLang } from '$lib/stores';
	import { t } from '$lib/i18n/translator';
	import { activeSection } from '$lib/stores';
	import DimensionTracker from '$lib/DimensionTracker.svelte';

	let sections: HTMLElement[] = [];

	let elemCarousel: HTMLDivElement;

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

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
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
			<div id="first" class="mt-12 md:mt-10 px-3 sm:px-8 xl:p-12" bind:this={sections[0]}>
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
						<div class="absolute inset-0 bg-secondary-300 opacity-30 md:w-3/4 lg:w-4/5 xl:w-full" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Product Description Section -->
<section>
	<div class="xl:grid xl:grid-cols-3 py-3 md:py-10 xl:py-0">
		<div class="max-xl:hidden xl:col-span-1"></div>

		<div class="xl:col-span-2">
			<div id="second" class="mt-12 md:mt-5 lg:mt-8 px-3 sm:px-8 xl:p-12" bind:this={sections[1]}>
				<div class="space-y-5 xl:space-y-8">
					<!-- title -->
					<div class="md:w-3/4">
						<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
							<span class="leading-snug">
								{$t('services.description.title')}
							</span>
						</p>
					</div>

					<!-- the subtitles -->
					<div>
						<p class="text-base sm:text-lg lg:text-xl font-bold">
							{$t('services.description.subTitle1')}
						</p>
						<p class="text-base sm:text-lg lg:text-xl">{$t('services.description.subTitle2')}</p>
					</div>

					<!-- images gallery -->
					<div>
						<div>
							<div class="p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-secondary-100">
								<!-- Full Images -->
								<div
									bind:this={elemCarousel}
									class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto no-scrollbar"
								>
									<img
										class="snap-center w-full rounded-container-token aspect-[1/0.55]"
										src="/pictures/services/description_01_1200x660.webp"
										srcset="/pictures/services/description_01_700x385.webp 768px,
										/pictures/services/description_01_1200x660.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
									<img
										class="snap-center w-full rounded-container-token aspect-[1/0.55]"
										src="/pictures/services/description_02_1200x660.webp"
										srcset="/pictures/services/description_02_700x385.webp 768px,
										/pictures/services/description_02_1200x660.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
									<img
										class="snap-center w-full rounded-container-token aspect-[1/0.55]"
										src="/pictures/services/description_03_1200x660.webp"
										srcset="/pictures/services/description_03_700x385.webp 768px,
										/pictures/services/description_03_1200x660.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
									<img
										class="snap-center w-full rounded-container-token aspect-[1/0.55]"
										src="/pictures/services/description_04_1200x660.webp"
										srcset="/pictures/services/description_04_700x385.webp 768px,
										/pictures/services/description_04_1200x660.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
									<img
										class="snap-center w-full rounded-container-token aspect-[1/0.55]"
										src="/pictures/services/description_05_1200x660.webp"
										srcset="/pictures/services/description_05_700x385.webp 768px,
										/pictures/services/description_05_1200x660.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
								</div>
							</div>
						</div>

						<hr class="mx-4" />

						<!-- thumbnails -->
						<div class="py-1">
							<div class="p-4 grid grid-cols-5 gap-4 bg-secondary-100">
								<button type="button" on:click={() => carouselThumbnail(0)}>
									<img
										class="rounded-container-token border-2 aspect-[1/0.55]"
										src="/pictures/services/description_01_300x165.webp"
										srcset="/pictures/services/description_01_200x110.webp 768px,
										/pictures/services/description_01_300x165.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
								</button>
								<button type="button" on:click={() => carouselThumbnail(1)}>
									<img
										class="rounded-container-token border-2 aspect-[1/0.55]"
										src="/pictures/services/description_02_300x165.webp"
										srcset="/pictures/services/description_02_200x110.webp 768px,
										/pictures/services/description_02_300x165.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
								</button>
								<button type="button" on:click={() => carouselThumbnail(2)}>
									<img
										class="rounded-container-token border-2 aspect-[1/0.55]"
										src="/pictures/services/description_03_300x165.webp"
										srcset="/pictures/services/description_03_200x110.webp 768px,
										/pictures/services/description_03_300x165.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
								</button>
								<button type="button" on:click={() => carouselThumbnail(3)}>
									<img
										class="rounded-container-token border-2 aspect-[1/0.55]"
										src="/pictures/services/description_04_300x165.webp"
										srcset="/pictures/services/description_04_200x110.webp 768px,
										/pictures/services/description_04_300x165.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
								</button>
								<button type="button" on:click={() => carouselThumbnail(4)}>
									<img
										class="rounded-container-token border-2 aspect-[1/0.55]"
										src="/pictures/services/description_05_300x165.webp"
										srcset="/pictures/services/description_05_200x110.webp 768px,
										/pictures/services/description_05_300x165.webp 2000px"
										alt="MFP part"
										loading="lazy"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Benefits & Challenges Section -->
<section class="bg-black text-white">
	<div class="xl:grid xl:grid-cols-3 py-3 md:py-10 xl:py-0">
		<div class="max-xl:hidden xl:col-span-1"></div>

		<div class="xl:col-span-2">
			<div id="third" class="mt-12 md:mt-5 lg:mt-8 px-3 sm:px-8 xl:p-12" bind:this={sections[2]}>
				<div class="space-y-5 xl:space-y-8">
					<!-- title -->
					<div class="md:w-3/4">
						<p class="text-3xl sm:text-4xl lg:text-5xl font-bold">
							<span class="leading-snug">
								{$t('services.benefits.title')}
							</span>
						</p>
					</div>

					<!-- first paragraph -->
					<div class="py-3 md:py-5 xl:py-8 2xl:py-10">
						<!-- subtitle -->
						<div>
							<p class="text-lg sm:text-xl lg:text-2xl text-primary-500">
								{$t('services.benefits.subTitle1')}
							</p>
						</div>
						<!-- text -->
						<div class="py-3 md:py-5">
							<p class="text-base sm:text-lg lg:text-xl">{$t('services.benefits.paragraph1')}</p>
						</div>
					</div>

					<!-- second paragraph -->
					<div class="lg:grid lg:grid-cols-2 xl:grid-cols-5 xl:gap-2 2xl:gap-12">
						<!-- text -->
						<div class="xl:col-span-2">
							<!-- subtitle -->
							<div>
								<p class="text-lg sm:text-xl lg:text-2xl text-primary-500">
									{$t('services.benefits.subTitle2')}
								</p>
							</div>
							<!-- list -->
							<div class="p-5">
								<ul class="list-disc text-base sm:text-lg lg:text-xl space-y-5">
									<li>{$t('services.benefits.li1')}</li>
									<li>{$t('services.benefits.li2')}</li>
									<li>{$t('services.benefits.li3')}</li>
									<li>{$t('services.benefits.li4')}</li>
									<li>{$t('services.benefits.li5')}</li>
									<li>{$t('services.benefits.li6')}</li>
									<li>{$t('services.benefits.li7')}</li>
									<li>{$t('services.benefits.li8')}</li>
									<li>{$t('services.benefits.li9')}</li>
									<li>{$t('services.benefits.li10')}</li>
									<li>{$t('services.benefits.li11')}</li>
									<li>{$t('services.benefits.li12')}</li>
									<li>{$t('services.benefits.li13')}</li>
								</ul>
							</div>
						</div>

						<!-- image -->
						<div class="xl:col-span-3 max-lg:hidden">
							<img
								class="w-full aspect-[1/1.1]"
								src="/pictures/services/benefits_800x880.webp"
								srcset="/pictures/services/benefits_600x660.webp 1535px,
								/pictures/services/benefits_800x880.webp 2000px"
								alt="a few labors walking inside a factory"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
