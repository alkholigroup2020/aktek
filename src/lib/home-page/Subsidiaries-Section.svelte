<script lang="ts">
	import { t, locale, locales } from '$lib/i18n/translator';
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	import { currentAppLang } from '$lib/stores';
</script>

<div class="my-16 mb-12 px-3 sm:px-5">
	<!-- title -->
	<div
		class="text-center text-3xl sm:text-4xl lg:text-5xl text-secondary-700 font-bold mb-8 md:mb-16"
	>
		<p>{$t('home.subsidiaries.title')}</p>
	</div>

	<!-- logos -->
	<div class="flex justify-center py-8">
		<div
			class="grid grid-cols-2 min-[380px]:grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-12 xl:gap-14 px-3"
		>
			<div class="flex flex-col items-center justify-center">
				<div class="w-24 min-[380px]:w-28 sm:w-32 lg:w-36 2xl:w-44 p-0 2xl:p-2">
					<img
						src="/pictures/home/subsidiaries/AKG-Trading_300x150.webp"
						alt="a company's logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center">
				<a href="https://temp.buildingtek.com" target="_blank">
					<div class="w-24 min-[380px]:w-28 sm:w-32 lg:w-36 2xl:w-44 p-0 2xl:p-2">
						<img
							src="/pictures/home/subsidiaries/sbtmc_300x150.webp"
							alt="a company's logo"
							class="w-full aspect-[1/0.5]"
						/>
					</div>
				</a>
			</div>

			<div class="flex flex-col items-center justify-center">
				<div class="w-24 min-[380px]:w-28 sm:w-32 lg:w-36 2xl:w-44 p-0 2xl:p-2">
					<img
						src="/pictures/home/subsidiaries/aktek_300x150.webp"
						alt="a company's logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center">
				<div class="w-24 min-[380px]:w-28 sm:w-32 lg:w-36 2xl:w-44 p-0 2xl:p-2">
					<img
						src="/pictures/home/subsidiaries/amos_300x150.webp"
						alt="a company's logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center sm:col-start-2 xl:col-start-auto">
				<div class="w-24 min-[380px]:w-28 sm:w-32 lg:w-36 2xl:w-44 p-0 sm:p-1 2xl:p-2">
					<img
						src="/pictures/home/subsidiaries/up_300x150.webp"
						alt="a company's logo"
						class="w-full aspect-[1/0.5]"
					/>
				</div>
			</div>

			<div class="flex flex-col items-center justify-center">
				<a href="https://www.buildingtec-elevators.com" target="_blank">
					<div class="w-24 min-[380px]:w-28 sm:w-32 lg:w-36 2xl:w-44 p-0">
						<img
							src="/pictures/home/subsidiaries/btech_300x150.webp"
							alt="a company's logo"
							class="w-full aspect-[1/0.5]"
						/>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
