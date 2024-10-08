<script lang="ts">
	import { onMount } from 'svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	// Define the breakpoints as specified in your Tailwind CSS configuration
	const breakpoints: any = {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		'2xl': 1536
	};
	let dimensions = { width: 0, height: 0 };
	let currentBreakpoint = '';
	let updateDimensions = () => {
		dimensions.width = window.innerWidth;
		dimensions.height = window.innerHeight;
		for (let breakpoint in breakpoints) {
			if (window.innerWidth >= breakpoints[breakpoint]) {
				currentBreakpoint = breakpoint;
			}
		}
	};
	onMount(() => {
		window.addEventListener('resize', updateDimensions);
		updateDimensions();
	});
</script>

<div
	class="fixed top-3 left-3 bg-opacity-80 bg-blue-800 text-white text-center p-5 rounded-3xl z-[999] h-fit w-fit"
>
	<p class="text-xl">W: {dimensions.width}px</p>
	<p class="text-xl">H: {dimensions.height}px</p>
	<p class="text-3xl">{currentBreakpoint}</p>
	<hr />
	<div class="py-2">
		<LocaleSwitcher />
	</div>
</div>
