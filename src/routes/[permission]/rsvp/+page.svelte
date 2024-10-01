<script lang="ts">
	import { enhance } from '$app/forms';
	import image from '$lib/images/black-and-white.png?enhanced';
	import { Input, Label, Card, Button } from 'flowbite-svelte';
	import * as Icon from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import type { Person } from '$lib/schema';
	import AnimatablePage from '../AnimatablePage.svelte';

	export let data;

	let animate = false;

	onMount(() => (animate = true));

	let people: Array<Person> = [];

	$: people;
</script>

<AnimatablePage>
	<div class="flex flex-col font-amiora w-96 gap-3 my-8 pb-6">
		<h1
			class="xl:text-4xl text-7xl"
			transition:fly={{
				delay: 200,
				duration: 1000,
				x: 0,
				y: 100,
				opacity: 0,
				easing: quintOut
			}}
		>
			Please RSVP Below
		</h1>
		<div class="relative w-full">
			<form
				method="POST"
				transition:fly={{
					delay: 200,
					duration: 1100,
					x: 0,
					y: 100,
					opacity: 0,
					easing: cubicOut
				}}
				use:enhance
				class="font-lato gap-3 flex flex-col"
			>
				<div>
					<Label class="block mb-2">Your email</Label>
					<Input id="email" name="email" required placeholder="name@gmail.com" />
				</div>
				{#each people as person}
					<Card class="flex flex-col gap-3">
						<div>
							<Label class="block mb-2">First Name</Label>
							<Input id="firstName" name="firstName" required placeholder="Mary" />
						</div>
						<div>
							<Label class="block mb-2">Last Name</Label>
							<Input id="lastName" name="lastName" required placeholder="Jane" />
						</div>
						<div>
							<Label class="block mb-2">Diet Requirements</Label>
							<Input
								id="dietRequirements"
								name="dietRequirements"
								placeholder="Vegan, Gluten-free"
							/>
						</div>
					</Card>
				{/each}
				<div
					transition:fly={{
						delay: 200,
						duration: 1300,
						x: 0,
						y: 100,
						opacity: 0,
						easing: cubicOut
					}}
				>
					<Button
						size="xs"
						class="text-sm"
						on:click={() =>
							(people = [
								...people,
								{
									firstName: '',
									lastName: '',
									dietRequirements: ''
								}
							])}><Icon.PlusOutline class="w-6 h-6 me-2"></Icon.PlusOutline>Add Person</Button
					>
				</div>
			</form>
		</div>
	</div>
	<div class="relative">
		<div
			class=" top-0 left-0 w-full"
			transition:fly={{
				delay: 0,
				duration: 1200,
				x: 100,
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
</AnimatablePage>
