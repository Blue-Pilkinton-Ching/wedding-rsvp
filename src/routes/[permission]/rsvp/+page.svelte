<script lang="ts">
	import { enhance } from '$app/forms';
	import image from '$lib/images/kissy.jpg?enhanced';
	import { Card, Button } from 'flowbite-svelte';
	import * as Icon from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import AnimatablePage from '../AnimatablePage.svelte';
	import Person from './Person.svelte';
	import { v4 as uuid } from 'uuid';

	export let data;

	let animate = false;

	onMount(() => (animate = true));

	let people: Array<string> = [];

	$: people;

	console.log(people);
</script>

<AnimatablePage>
	<div class="flex flex-col font-amiora w-96 gap-3 my-8 pb-6">
		<h1
			class="text-4xl"
			transition:fly={{
				delay: 200,
				duration: 850,
				x: 0,
				y: 50,
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
					delay: 300,
					duration: 850,
					x: 0,
					y: 50,
					opacity: 0,
					easing: cubicOut
				}}
				use:enhance
				class="font-lato gap-3 flex flex-col"
			>
				<Person showCeremony={data.permission === 'ceremony'} id={uuid()} />
				{#each people as person (person)}
					<Card class="mt-3"
						><Person
							optionalPerson
							id={person}
							onDelete={(id) => {
								people = [...people.filter((p) => p !== id)];
								console.log(id, people);
							}}
							showCeremony={data.permission === 'ceremony'}
						/></Card
					>
				{/each}
				<div
					class="flex flex-row gap-2 *:w-full duration-200"
					transition:fly={{
						delay: 300,
						duration: 1000,
						x: 0,
						y: 50,
						opacity: 0,
						easing: cubicOut
					}}
				>
					<Button outline size="xs" type="submit" class="text-sm duration-200"
						><Icon.MailBoxOutline class="w-6 h-6 me-2"></Icon.MailBoxOutline>RSVP!</Button
					><Button
						size="xs"
						class="text-sm "
						on:click={() => {
							people = [...people, uuid()];
						}}><Icon.PlusOutline class="w-6 h-6 me-2"></Icon.PlusOutline>Add Person</Button
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
