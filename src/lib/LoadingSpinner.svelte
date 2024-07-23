<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
</script>

<div class="h-[100vh] w-[100vw] flex items-center justify-center bg-surface-50-900-token">
	<!-- <div class="animate-spin rounded-full h-32 w-32 border-b-8 border-surface-900-50-token" /> -->
	<!-- <ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" /> -->
	<ProgressRadial meter="stroke-primary-500" track="stroke-primary-500/30" value={undefined} />

	<!-- <svg
		version="1.1"
		id="L9"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		width="250px"
		height="250px"
		viewBox="0 0 100 100"
		enable-background="new 0 0 0 0"
		xml:space="preserve"
	>
		<path fill="#000" d="M50 20A30 30 0 1 0 80.587 75.423">
			<animateTransform
				attributeName="transform"
				attributeType="XML"
				type="rotate"
				dur="1s"
				from="0 50 50"
				to="360 50 50"
				repeatCount="indefinite"
			/>
		</path>
	</svg> -->
</div>
