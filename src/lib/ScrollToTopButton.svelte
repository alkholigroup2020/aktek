<script lang="ts">
	import { onMount } from 'svelte';

	let y: number;

	onMount(() => {
		window.addEventListener('scroll', () => {
			y = window.scrollY;
		});
	});

	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<div class="fixed bottom-6 right-0 md:right-3 z-50">
	<!-- go up -->
	<div>
		<div
			class="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 opacity-80 hover:opacity-100"
		>
			<button
				hidden={y > 800 ? false : true}
				aria-label="a move to the top of the screen button"
				class="bg-initial border-[5px] border-primary-600 rounded-full bg-primary-600"
				on:click={scrollToTop}
			>
				<div class="flex justify-center">
					<span class="justify-self-center self-center w-[37px] h-[37px] md:w-[45px] md:h-[45px]">
						<svg
							viewBox="0 -4.5 20 20"
							class="m-2 md:m-3"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<title>arrow_up [#340]</title>
							<desc>Created with Sketch.</desc>
							<defs />
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									id="Dribbble-Light-Preview"
									transform="translate(-140.000000, -6683.000000)"
									fill="#FFF"
								>
									<g id="icons" transform="translate(56.000000, 160.000000)">
										<path
											d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
											id="arrow_up-[#340]"
										/>
									</g>
								</g>
							</g>
						</svg>
					</span>
				</div>
			</button>
		</div>
	</div>
</div>
