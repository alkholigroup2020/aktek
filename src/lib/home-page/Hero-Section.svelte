<script lang="ts">
	import { t } from '$lib/i18n/translator';
	import { currentAppLang } from '$lib/stores';
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	import { afterUpdate } from 'svelte';

	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	let textElement: any;
	let buttonElement: any;
	let theText: string;
	let isAnimating = true; // Start by assuming the animation is playing

	$: if ($currentAppLang && textElement) {
		// Clear the text content of each element
		isAnimating = true;
		textElement.textContent = '';
	}

	afterUpdate(() => {
		theText = $t('home.mainTitle');

		// title animation
		gsap.to(textElement, {
			scrollTrigger: {
				trigger: textElement,
				start: 'top+=100 bottom-=100',
				toggleActions: 'play none none none',
				markers: false
			},
			text: theText,
			duration: 2,
			onComplete: () => {
				isAnimating = false;
			}
		});

		// Button animation when isAnimating is false
		if (!isAnimating && buttonElement) {
			gsap.from(buttonElement, {
				opacity: 0,
				y: 50,
				duration: 1,
				delay: 0.5,
				ease: 'power3.out'
			});
		}
	});
</script>

<section class="relative z-10">
	<div>
		<img
			alt="main hero section background"
			src="/pictures/home/hero_2000x900.webp"
			srcset="
			  /pictures/home/hero_500x400.webp 499w,   
			  /pictures/home/hero_800x640.webp 640w, 	 
        /pictures/home/hero_1200x720.webp 1024w, 
        /pictures/home/hero_1600x800.webp 1536w, 
        /pictures/home/hero_2000x1000.webp 9000w"
			class="w-full aspect-[1/0.8] md:aspect-[1/0.6] lg:aspect-[1/0.5]"
		/>
	</div>

	<div class="flex max-md:justify-center">
		<div
			class="absolute max-md:-bottom-32 md:-bottom-20 {$currentAppLang === 'en'
				? 'md:right-0'
				: 'md:left-0'}"
		>
			<div
				class="w-[300px] min-[450px]:w-[320px] min-[550px]:w-[350px] sm:w-[400px] md:w-[450px] xl:w-[500px] 2xl:w-[550px] min-[1750px]:w-[650px]
				h-[250px] md:h-[250px] lg:h-[280px] xl:h-[300px] 2xl:h-[380px] min-[1750px]:h-[400px] bg-primary-600 p-12 min-[450px]:p-16 2xl:p-20
				flex flex-col justify-center max-md:items-center space-y-5"
			>
				<p
					bind:this={textElement}
					class="text-white Poppins-Bold font-extrabold text-3xl md:text-4xl 2xl:text-5xl h-full
					min-[550px]:leading-10 sm:leading-normal md:leading-tight xl:leading-relaxed 2xl:leading-relaxed max-md:text-center"
				></p>

				{#if !isAnimating}
					<div class="xl:mt-[1.625rem] flex" bind:this={buttonElement}>
						<AppRailAnchor href="/services" title="about-us">
							<button type="button" class="btn text-white border rounded-sm p-3 xl:p-4">
								<div class="flex items-center text-base lg:text-lg 2xl:text-2xl font-extralight">
									<span class="text-sm sm:text-base xl:text-xl">{$t('home.services')}</span>
									<!-- arrow icon -->
									<span class="mx-1 sm:mx-2">
										<svg
											class="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 mx-1 xl:mx-3 {$currentAppLang ===
											'ar'
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
								</div>
							</button>
						</AppRailAnchor>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
