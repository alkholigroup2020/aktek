<script lang="ts">
	import { t, locale, locales } from '$lib/i18n/translator';
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	import { currentAppLang } from '$lib/stores';
</script>

<div class="grid xl:grid-cols-3 py-10 xl:py-16 px-3 sm:px-5">
	<!-- image -->
	<div class="xl:col-span-1 max-xl:order-2 mt-5 lg:mt-8 xl:mt-0">
		<div class="w-full md:w-2/3 lg:w-3/5 xl:w-[95%]">
			<img
				src="/pictures/home/vision_600x420.webp"
				srcset="/pictures/home/vision_800x480.webp 1280w, 
                /pictures/home/vision_600x420.webp 2000w"
				alt="a product sample"
				class="w-full aspect-[1/0.6] xl:aspect-[1/0.7]"
			/>
		</div>
	</div>
	<!-- text -->
	<div class="xl:col-span-2 space-y-5 lg:space-y-8 xl:px-8 2xl:px-12">
		<!-- title -->
		<div>
			<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold mb-8">
				{$t('home.vision.title')}
			</p>
		</div>
		<!-- paragraph -->
		<div>
			<p class="text-base sm:text-lg lg:text-xl text-justify">{$t('home.vision.paragraph1')}</p>
		</div>
		<div>
			<p class="text-base sm:text-lg lg:text-xl text-justify mb-2">
				{$t('home.vision.paragraph2')}
			</p>
			<p class="text-base sm:text-lg lg:text-xl text-justify">{$t('home.vision.paragraph3')}</p>
		</div>
		<!-- button -->
		<div>
			<button type="button" class="btn border border-primary-700 rounded-sm p-3 xl:p-4">
				<AppRailAnchor href="/services" title="about-us">
					<div class="flex items-center text-base lg:text-lg 2xl:text-2xl font-extralight">
						<span class="text-sm sm:text-base xl:text-xl">{$t('home.vision.details')}</span>
						<!-- arrow icon -->
						<span class="mx-1 sm:mx-2">
							<svg
								class="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 mx-1 xl:mx-3 {$currentAppLang === 'ar'
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
										fill="#bf1910"
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
					</div>
				</AppRailAnchor>
			</button>
		</div>
	</div>
</div>
