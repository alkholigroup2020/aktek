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

	$: if ($currentAppLang && textElement) {
		// Clear the text content of each element
		textElement.textContent = '';
	}

	afterUpdate(() => {
		theText = $t('about.mainTitle');

		// title animation
		gsap.to(textElement, {
			scrollTrigger: {
				trigger: textElement,
				start: 'top+=100 bottom-=100',
				toggleActions: 'play none none none',
				markers: false
			},
			text: theText,
			duration: 2
		});
	});
</script>

<section class="relative z-10">
	<div>
		<img
			alt="about page hero section background"
			src="/pictures/about/about-hero_2000x900.webp"
			srcset="
			  /pictures/about/about-hero_500x400.webp 499w,   
			  /pictures/about/about-hero_800x640.webp 640w, 	 
        /pictures/about/about-hero_1200x720.webp 1024w, 
        /pictures/about/about-hero_1600x800.webp 1536w, 
        /pictures/about/about-hero_2000x1000.webp 9000w"
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
				h-[260px] sm:h-[270px] md:h-[300px] lg:h-[280px] xl:h-[300px] 2xl:h-[380px] min-[1750px]:h-[400px] bg-primary-600 p-12 min-[450px]:p-16 2xl:p-20
				flex flex-col justify-center max-md:items-center space-y-5"
			>
				<p
					bind:this={textElement}
					class="text-white Poppins-Bold font-extrabold text-3xl md:text-4xl 2xl:text-5xl h-full
					min-[380px]:leading-10 min-[470px]:leading-9 sm:leading-9 md:leading-tight xl:leading-relaxed 2xl:leading-[60px] min-[1750px]:leading-[78px]"
				></p>
			</div>
		</div>
	</div>
</section>
