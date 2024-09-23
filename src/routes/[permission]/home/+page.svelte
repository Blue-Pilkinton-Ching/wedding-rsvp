<script>
	import image from '$lib/images/hana-and-nick.png?enhanced';
	import { onMount } from 'svelte';
	import { quartOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let data;

	let animate = false;

	onMount(() => (animate = true));
</script>

<div class="flex flex-row gap-10">
	<div class="relative h-full">
		<enhanced:img
			fetchpriority="high"
			loading="eager"
			src={image}
			alt="Hana and Nick"
			class="w-auto max-h-[80vh] opacity-0"
		/>
		{#if animate}
			<div
				class="absolute top-0 left-0 h-full w-full"
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
		{/if}
	</div>

	<div class="flex flex-col justify-center gap-12 font-amiora my-8 pb-6">
		<h1 class="xl:text-8xl text-7xl">Hana & Nick</h1>
		<div class="relative w-3/4 mx-auto">
			<div
				class="absolute top-2 right-2 w-full h-full bg-gray-300 rounded-md transition-all duration-300 group-hover:top-4 group-hover:left-4"
			></div>
			<a
				href="/{data.permission}/rsvp"
				class="font-amiora tracking-wider block text-center relative z-10 text-3xl font-bold shadow-md rounded-md w-full p-4 bg-black text-white group hover:translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300 hover:bg-gray-800 active:translate-x-0 active:translate-y-0 active:bg-gray-900"
			>
				RSVP Now!
			</a>
		</div>
	</div>
</div>
