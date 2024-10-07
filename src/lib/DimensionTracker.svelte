<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	// Props to accept an ID or class for the target element to observe
	export let targetSelector: string = '';

	// Stores to hold width and height values
	const width = writable<number | null>(null);
	const height = writable<number | null>(null);

	let observer: ResizeObserver;

	// This function initializes the observer and updates the width/height
	const initObserver = () => {
		const target = document.querySelector(targetSelector);

		// Ensure the target element exists
		if (target) {
			observer = new ResizeObserver((entries) => {
				for (let entry of entries) {
					const { width: newWidth, height: newHeight } = entry.contentRect;
					width.set(Math.round(newWidth)); // Round to remove decimals
					height.set(Math.round(newHeight));
				}
			});
			observer.observe(target); // Start observing the target element
		} else {
			console.warn(`Target element with selector "${targetSelector}" not found.`);
		}
	};

	// Clean up the observer when the component is destroyed
	onDestroy(() => {
		if (observer) observer.disconnect();
	});

	// Initialize the observer when the component mounts
	onMount(initObserver);
</script>

<!-- Display the width and height for easy reference -->
<div class="fixed bottom-0 left-0 bg-gray-800 text-white p-4 rounded-lg text-sm m-5">
	<p>Width: {$width}px</p>
	<p>Height: {$height}px</p>
</div>

<style>
	/* basic styling for the display box */
	.dimension-box {
		font-family: Arial, sans-serif;
		font-size: 14px;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 10px;
		border-radius: 8px;
	}
</style>
