<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	import { currentAppLang } from '$lib/stores';

	let activeSlide: string = '01';

	function handleDivClick(number: string) {
		activeSlide = number;
	}
</script>

<section class="pb-5 md:pb-8 xl:pb-12">
	<div class="grid xl:grid-cols-3 py-12">
		<!-- image -->
		<div class="xl:col-span-1 max-xl:order-2">
			<div class="w-4/5 md:w-4/6 lg:w-1/2 xl:w-5/6">
				<img
					src="/pictures/home/product-overview_800x640.webp"
					srcset="/pictures/home/product-overview_600x480.webp 590w, 
									/pictures/home/product-overview_800x640.webp 2000w"
					alt="a product sample"
					class="w-full aspect-[1/0.8]"
				/>
			</div>
		</div>
		<!-- text -->
		<div class="xl:col-span-2 space-y-5 xl:space-y-8 px-3 sm:px-8 xl:p-12">
			<!-- small title -->
			<p class="text-xl sm:text-2xl lg:text-3xl text-primary-700 font-bold">
				{$t('home.overview.smallTitle')}
			</p>
			<!-- title -->
			<div>
				<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
					{$t('home.overview.title')}
				</p>
			</div>
			<!-- paragraph -->
			<div>
				<p class="text-base sm:text-lg lg:text-xl text-justify">{$t('home.overview.paragraph')}</p>
			</div>
			<!-- button -->
			<div class="flex">
				<AppRailAnchor href="/services" title="about-us">
					<button type="button" class="btn border border-primary-700 rounded-sm p-3 xl:p-4">
						<div class="flex items-center text-base lg:text-lg 2xl:text-2xl font-extralight">
							<span class="text-sm sm:text-base xl:text-xl">{$t('home.services')}</span>
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
					</button>
				</AppRailAnchor>
			</div>
		</div>
	</div>

	<!-- safety & quality -->
	<div class="grid lg:grid-cols-2 mx-3 sm:mx-5 2xl:mx-0 mt-5 lg:mt-8">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex flex-col rounded-none snap-start p-5 sm:p-8 md:p-12 h-fit card shadow-none cursor-pointer text-center
			{activeSlide === '01' ? 'right-shadow z-10 bg-secondary-300' : ''}"
			on:click={() => {
				handleDivClick('01');
			}}
		>
			<div class="space-y-5 lg:space-y-12 py-5 md:py-3 xl:py-8">
				<div class="text-large font-semibold py-2 flex justify-center space-x-5 align-middle">
					<div>
						<img
							src="/pictures/home/safety_50x50.webp"
							alt="safety icon"
							class="w-9 lg:w-full aspect-[1/1]"
						/>
					</div>
					<div>
						<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
							{$t('home.safety.title')}
						</p>
					</div>
				</div>
				{#if activeSlide === '01'}
					<div>
						<p class="text-sm sm:text-base lg:text-lg font-extralight xl:px-5 2xl:px-16">
							{$t('home.safety.paragraph')}
						</p>
					</div>
				{/if}
			</div>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex flex-col rounded-none snap-start p-5 sm:p-8 md:p-12 h-fit card shadow-none cursor-pointer text-center {activeSlide ===
			'02'
				? 'left-shadow bg-secondary-300'
				: ''}"
			on:click={() => {
				handleDivClick('02');
			}}
		>
			<div class="space-y-5 lg:space-y-12 py-5 md:py-3 xl:py-8">
				<div class="font-semibold py-2 flex justify-center space-x-5 align-middle">
					<div>
						<img
							src="/pictures/home/quality_50x50.webp"
							alt="quality icon"
							class="w-9 lg:w-full aspect-[1/1]"
						/>
					</div>
					<div>
						<p class="text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold">
							{$t('home.quality.title')}
						</p>
					</div>
				</div>
				{#if activeSlide === '02'}
					<div class="space-y-3 lg:space-y-4">
						<p class="text-sm sm:text-base lg:text-lg font-extralight xl:px-5 2xl:px-16">
							{$t('home.quality.paragraph1')}
						</p>
						<p class="text-sm sm:text-base lg:text-lg font-extralight xl:px-5 2xl:px-16">
							{$t('home.quality.paragraph2')}
						</p>
						<ul class="text-sm sm:text-base lg:text-lg font-extralight xl:px-5 2xl:px-16">
							<li>{$t('home.quality.li1')}</li>
							<li>{$t('home.quality.li2')}</li>
							<li>{$t('home.quality.li3')}</li>
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	@media screen and (min-width: 1024px) {
		.right-shadow {
			box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.2); /* Customize the shadow as needed */
		}
		.left-shadow {
			box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.2); /* Customize the shadow as needed */
		}
	}
</style>
