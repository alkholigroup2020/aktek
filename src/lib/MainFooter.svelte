<script lang="ts">
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	import { t } from '$lib/i18n/translator';
</script>

<!-- logo on mobile sizes -->
<div class="absolute -mt-7 md:hidden w-[130px]">
	<img
		src="/pictures/aktek-white-red-bg_140x56.webp"
		alt="company's logo"
		class="w-full aspect-[1/0.4]"
	/>
</div>

<div class="flex">
	<div class="hidden md:block md:w-1/4 bg-primary-600">
		<div class="h-full flex flex-col justify-center items-center">
			<div class="flex justify-center">
				<img
					src="/pictures/aktek-white-transparent_180x36.webp"
					alt="company logo"
					class="w-3/4 xl:w-full aspect-[1/0.2]"
				/>
			</div>
			<div class="text-white text-center mt-2 lg:mt-5">
				<p class="text-xs lg:text-sm xl:text-base">All rights reserved @AKTEK</p>
			</div>
		</div>
	</div>

	<div class="bg-black w-full md:w-3/4">
		<div class="hidden md:block w-full h-10 lg:h-16 bg-surface-50"></div>

		<div
			class="grid gap-1 min-[420px]:gap-3 min-[480px]:gap-5 min-[550px]:gap-8 md:gap-12 lg:gap-10
			max-lg:grid-flow-col max-lg:auto-cols-max lg:grid-cols-4
			max-md:p-3 max-md:pt-10 md:p-6 lg:p-12 xl:p-14 2xl:px-24"
		>
			<div class="text-white space-y-3">
				<div>
					<AppRailAnchor href="/about-us" title="about-us">
						<span class="flex items-center text-sm min-[550px]:text-base lg:text-lg font-extralight"
							>{$t('footer.about')}</span
						>
					</AppRailAnchor>
				</div>
				<div>
					<AppRailAnchor href="/contact-us" title="contact-us">
						<span class="flex items-center text-sm min-[550px]:text-base lg:text-lg font-extralight"
							>{$t('footer.careers')}</span
						>
					</AppRailAnchor>
				</div>
				<div>
					<AppRailAnchor href="/contact-us" title="contact-us">
						<span class="flex items-center text-sm min-[550px]:text-base lg:text-lg font-extralight"
							>{$t('footer.contact')}</span
						>
					</AppRailAnchor>
				</div>
			</div>

			<div class="text-white space-y-3">
				<div>
					<AppRailAnchor href="/" title="Privacy Policy">
						<span class="flex items-center text-sm min-[550px]:text-base lg:text-lg font-extralight"
							>{$t('footer.privacy')}</span
						>
					</AppRailAnchor>
				</div>
				<div>
					<AppRailAnchor href="/" title="Terms of Use">
						<span class="flex items-center text-sm min-[550px]:text-base lg:text-lg font-extralight"
							>{$t('footer.terms')}</span
						>
					</AppRailAnchor>
				</div>
			</div>

			<div class="text-white space-y-3 pl-1 min-[450px]:pl-0">
				<div>
					<a type="button" href="tel:00966114041919" aria-label="a land line number">
						<div class="flex items-center space-x-1">
							<div>
								<span>
									<svg
										class="w-4 h-4 lg:w-5 lg:h-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
											stroke="#FFF"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
							</div>
							<div>
								<div>
									<p class="text-sm min-[550px]:text-base lg:text-lg font-extralight">
										<span class="lg:text-[14px] min-[1180px]:text-lg">+966 11 404 1919</span>
									</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div>
					<a href="mailto:sales@alkholi.com" aria-label="a mail link">
						<div class="flex items-center space-x-1">
							<div>
								<span>
									<svg
										class="w-4 h-4 lg:w-5 lg:h-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
											stroke="#FFF"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<rect
											x="3"
											y="5"
											width="18"
											height="14"
											rx="2"
											stroke="#FFF"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
								</span>
							</div>
							<div>
								<div>
									<p class="text-sm min-[550px]:text-base lg:text-lg font-extralight">
										sales@alkholi.com
									</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div>
					<a href="mailto:info@alkholi.com" aria-label="a mail link">
						<div class="flex items-center space-x-1">
							<div>
								<span>
									<svg
										class="w-4 h-4 lg:w-5 lg:h-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
											stroke="#FFF"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<rect
											x="3"
											y="5"
											width="18"
											height="14"
											rx="2"
											stroke="#FFF"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
								</span>
							</div>
							<div>
								<div>
									<p class="text-sm min-[550px]:text-base lg:text-lg font-extralight">
										info@alkholi.com
									</p>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>

			<div class="text-white space-y-3 sm:space-y-5 pl-2 min-[450px]:pl-3 md:pl-0 lg:pl-12">
				<!-- linkedIn -->
				<div class="w-fit">
					<a
						type="button"
						href="https://www.linkedin.com/company/alkholi-group-of-companies"
						target="_blank"
						aria-label="linkedin link"
					>
						<div class="flex flex-col items-center space-y-2 space-x-1">
							<div>
								<span>
									<svg
										class="w-3 h-3 lg:w-4 lg:h-4"
										viewBox="0 0 20 20"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<title>linkedin [#161]</title>
										<desc>Created with Sketch.</desc>
										<defs />
										<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-180.000000, -7479.000000)"
												fill="#FFF"
											>
												<g id="icons" transform="translate(56.000000, 160.000000)">
													<path
														d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
														id="linkedin-[#161]"
													/>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</div>
						</div>
					</a>
				</div>
				<!-- twitter -->
				<div class="w-fit">
					<a type="button" href="https://x.com/home" target="_blank" aria-label="twitter link">
						<div class="flex flex-col items-center space-y-2 space-x-1">
							<div>
								<span>
									<svg
										fill="#FFF"
										version="1.1"
										id="Capa_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										class="w-3 h-3 lg:w-4 lg:h-4"
										viewBox="0 0 33.88 33.88"
										xml:space="preserve"
									>
										<g>
											<path
												d="M30.414,10.031c0.014,0.297,0.021,0.595,0.021,0.897c0,9.187-6.992,19.779-19.779,19.779c-3.928,0-7.58-1.149-10.657-3.123
												c0.546,0.063,1.099,0.095,1.658,0.095c3.26,0,6.254-1.107,8.632-2.974c-3.039-0.058-5.607-2.065-6.491-4.828
												c0.424,0.082,0.858,0.125,1.308,0.125c0.635,0,1.248-0.084,1.83-0.244c-3.177-0.639-5.576-3.448-5.576-6.815
												c0-0.029,0-0.058,0-0.087c0.939,0.521,2.01,0.833,3.15,0.869C2.646,12.48,1.419,10.35,1.419,7.938c0-1.274,0.343-2.467,0.94-3.495
												c3.427,4.206,8.552,6.973,14.327,7.263c-0.117-0.509-0.18-1.038-0.18-1.584c0-3.838,3.112-6.949,6.953-6.949
												c1.998,0,3.805,0.844,5.07,2.192c1.582-0.311,3.072-0.89,4.416-1.686c-0.521,1.624-1.621,2.986-3.057,3.844
												c1.406-0.166,2.746-0.54,3.991-1.092C32.949,7.826,31.771,9.05,30.414,10.031z"
											/>
										</g>
									</svg>
								</span>
							</div>
						</div>
					</a>
				</div>
				<!-- facebook -->
				<div class="w-fit">
					<a
						type="button"
						href="https://www.facebook.com/home"
						target="_blank"
						aria-label="twitter link"
					>
						<div class="flex flex-col items-center space-y-2 space-x-1">
							<div>
								<span>
									<svg
										class="w-4 h-4 lg:w-5 lg:h-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
											fill="#FFF"
										/>
									</svg>
								</span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="text-white text-center md:hidden">
			<div class="bg-surface-500 h-[1px]" />
			<p class="text-xs py-2 font-thin">All rights reserved @AKTEK</p>
		</div>
	</div>
</div>
