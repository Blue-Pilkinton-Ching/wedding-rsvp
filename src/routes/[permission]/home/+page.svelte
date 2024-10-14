<script>
	import image from '$lib/images/hana-and-nick.png?enhanced';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import AnimatablePage from '../AnimatablePage.svelte';
	export let data;
</script>

<AnimatablePage>
	<div class="flex flex-col sm:flex-row gap-10">
		<div class="relative h-full">
			<div
				class=" top-0 left-0 h-full w-full"
				transition:fly={{
					delay: 0,
					duration: 1200,
					x: -100,
					y: 0,
					opacity: 0,
					easing: quartOut
				}}
			>
				<enhanced:img
					fetchpriority="high"
					loading="eager"
					src={image}
					alt="Hana and Nick"
					class="w-auto max-h-[80vh] rounded-md shadow-md"
				/>
			</div>
		</div>

		<div class="flex flex-col justify-center gap-12 font-amiora my-8 pb-6">
			<h1
				class="xl:text-8xl text-7xl text-center sm:text-start"
				transition:fly={{
					delay: 200,
					duration: 1200,
					x: 100,
					y: 0,
					opacity: 0,
					easing: quintOut
				}}
			>
				Hana & Nick
			</h1>
			<div
				class="relative mx-auto"
				transition:fly={{
					delay: 300,
					duration: 1200,
					x: 100,
					y: 0,
					opacity: 0,
					easing: cubicOut
				}}
			>
				<a
					href="/{data.permission}/rsvp"
					class="font-amiora block text-center active:duration-300 active:scale-95 bg-black relative z-10 text-4xl font-bold shadow-md rounded-2xl p-1 border-black text-black group hover:text-white *:duration-300 *:hover:bg-black"
				>
					<div
						class="bg-white rounded-xl h-16 w-64 font-semibold tracking-wide text-center flex items-center justify-center pt-0.5"
					>
						RSVP
					</div>
				</a>
			</div>
		</div>
	</div>
</AnimatablePage>
