<script lang="ts">
	import image from '$lib/images/kissyimg.jpg?enhanced';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import AnimatablePage from '../AnimatablePage.svelte';

	export let data;
</script>

<AnimatablePage>
	<div class="relative">
		<div
			class=" top-0 left-0 w-full"
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
					class="w-auto max-h-[80vh] rounded-md shadow-md"
				/>
			{:else}
				<div class="flex flex-col font-amiora w-[450px] max-w-[100vw] gap-6 my-8 pb-6">
					<h1
						class="xl:text-5xl text-7xl"
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
								duration: 1200,
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
								duration: 1200,
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
						class="relative w-full"
						transition:fly={{
							delay: 450,
							duration: 1200,
							x: 100,
							y: 0,
							opacity: 0,
							easing: cubicOut
						}}
					>
						<iframe
							class="rounded-md shadow-md w-full aspect-square"
							title="map"
							style="border:0"
							loading="lazy"
							allowfullscreen
							referrerpolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_ENkXHl7c0-pBhOHKb1K9y0NkS90voQc
          &q=Futuna Chapel,Wellington"
						>
						</iframe>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex flex-col font-amiora w-[450px] max-w-[100vw] gap-6 my-8 pb-6">
		<h1
			class="xl:text-5xl text-7xl"
			transition:fly={{
				delay: 200,
				duration: 1200,
				x: 100,
				y: 0,
				opacity: 0,
				easing: quintOut
			}}
		>
			{data.permission === 'reception' ? 'Come join us for the reception' : 'Reception'}
		</h1>

		<div class="gap-2 flex flex-col">
			<h2
				class="font-medium text-xl"
				transition:fly={{
					delay: 300,
					duration: 1200,
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
					duration: 1200,
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
			class="relative w-full"
			transition:fly={{
				delay: 450,
				duration: 1200,
				x: 100,
				y: 0,
				opacity: 0,
				easing: cubicOut
			}}
		>
			<iframe
				class="rounded-md shadow-md w-full aspect-square"
				title="map"
				style="border:0"
				loading="lazy"
				allowfullscreen
				referrerpolicy="no-referrer-when-downgrade"
				src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_ENkXHl7c0-pBhOHKb1K9y0NkS90voQc
      &q=Prefab-ACME,Wellington"
			>
			</iframe>
		</div>
	</div>
</AnimatablePage>
