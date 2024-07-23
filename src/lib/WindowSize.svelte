<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
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
	class="fixed bottom-1 left-1 bg-opacity-80 bg-blue-800 text-white text-center p-5 rounded-full z-[999] h-fit w-fit"
>
	<p class="text-xl">W: {dimensions.width}px</p>
	<p class="text-xl">H: {dimensions.height}px</p>
	<p class="text-3xl">{currentBreakpoint}</p>
</div>
