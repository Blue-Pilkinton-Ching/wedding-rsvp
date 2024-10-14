<script>
	import image from '$lib/images/hana-and-nick.png?enhanced';
	import { onMount } from 'svelte';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import AnimatablePage from '../AnimatablePage.svelte';
	export let data;

	let animate = false;

	onMount(() => (animate = true));
</script>

<AnimatablePage>
	<div class="flex flex-row gap-10">
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
				class="xl:text-8xl text-7xl"
				transition:fly={{
					delay: 200,
					duration: 1200,
					x: 100,
					y: 0,
					opacity: 0,
					easing: quintOut
				}}
			>
				<h1 class="text-center mb-6 text-6xl font-amiora font-light">Contact Us</h1>
				<h2 class="mt-12 text-center mb-6 text-lg font-lato font-light max-w-[450px]">
					Please see the <strong class="font-semibold relative"
						><a
							href={`/${data.permission}/schedule`}
							class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
							>schedule</a
						></strong
					>
					for more information. <br /><br />If you need any more details or have a change in plans,
					feel free to email
					<strong class="font-semibold relative"
						><a
							href="mailto:hello@nickandhana.com"
							class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
							>hello@nickandhana.com</a
						></strong
					>. See you there!
				</h2>
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
			></div>
		</div>
	</div>
</AnimatablePage>
