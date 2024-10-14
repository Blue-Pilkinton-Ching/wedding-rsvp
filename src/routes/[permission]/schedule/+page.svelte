<script lang="ts">
	import image from '$lib/images/black-and-white.png?enhanced';
	import prefabhall from '$lib/images/prefabhall.png?enhanced';
	import chapel from '$lib/images/chapel.png';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import AnimatablePage from '../AnimatablePage.svelte';

	export let data;
</script>

<AnimatablePage>
	<div class="relative">
		<div
			class=" top-0 left-0"
			transition:fly={{
				delay: 0,
				duration: 1200,
				x: -100,
				y: 0,
				opacity: 0,
				easing: quartOut
			}}
		>
			{#if data.permission === 'reception'}
				<enhanced:img
					fetchpriority="high"
					loading="eager"
					src={image}
					alt="Hana and Nick"
					class="lg:w-auto w-full max-w-[504px] max-h-[80vh] rounded-md shadow-md"
				/>
			{:else}
				<div class="flex flex-col font-amiora sm:w-[504px] lg:w-[450px] gap-6 my-8 sm:my-0 pb-6">
					<h1
						class="text-5xl"
						transition:fly={{
							delay: 200,
							duration: 1200,
							x: 100,
							y: 0,
							opacity: 0,
							easing: quintOut
						}}
					>
						Ceremony
					</h1>

					<div class="gap-2 flex flex-col">
						<h2
							class="font-medium text-xl"
							transition:fly={{
								delay: 300,
								duration: 1000,
								x: 100,
								y: 0,
								opacity: 0,
								easing: cubicOut
							}}
						>
							2pm, Saturday 25 January 2025
						</h2>
						<h2
							class="font-medium text-xl"
							transition:fly={{
								delay: 300,
								duration: 1000,
								x: 100,
								y: 0,
								opacity: 0,
								easing: cubicOut
							}}
						>
							Futuna Chapel, 67 Futuna Close, Karori, Wellington
						</h2>
					</div>
					<div
						class="relative lg:w-full w-[504px] max-w-[100vw-48px]"
						transition:fly={{
							delay: 300,
							duration: 1000,
							x: 100,
							y: 0,
							opacity: 0,
							easing: cubicOut
						}}
					>
						<img
							class="rounded-md shadow-md w-full aspect-square"
							src={chapel}
							alt="Map of Futuna Chapel"
						/>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex flex-col font-amiora sm:w-[504px] lg:w-[450px] gap-6 my-8 sm:my-0 pb-6">
		<h1
			class={data.permission === 'reception' ? 'sm:text-5xl text-4xl' : 'text-5xl'}
			transition:fly={{
				delay: 200,
				duration: 1200,
				x: 100,
				y: 0,
				opacity: 0,
				easing: quintOut
			}}
		>
			{data.permission === 'reception' ? 'Join us for our wedding reception!' : 'Reception'}
		</h1>

		<div class="gap-2 flex flex-col">
			<h2
				class="font-medium text-xl"
				transition:fly={{
					delay: 300,
					duration: 1000,
					x: 100,
					y: 0,
					opacity: 0,
					easing: cubicOut
				}}
			>
				6pm, Saturday 25 January 2025
			</h2>
			<h2
				class="font-medium text-xl"
				transition:fly={{
					delay: 300,
					duration: 1000,
					x: 100,
					y: 0,
					opacity: 0,
					easing: cubicOut
				}}
			>
				Prefab Hall, 14 Jessie Street, Te Aro, Wellington
			</h2>
		</div>
		<div
			class="relative lg:w-full w-[504px] max-w-[calc(100vw-48px)]"
			transition:fly={{
				delay: 450,
				duration: 1000,
				x: 100,
				y: 0,
				opacity: 0,
				easing: cubicOut
			}}
		>
			<enhanced:img class="rounded-md shadow-md w-full aspect-square" src={prefabhall} />
		</div>
	</div>
</AnimatablePage>
