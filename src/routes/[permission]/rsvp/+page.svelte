<script lang="ts">
	import { enhance } from '$app/forms';
	import image from '$lib/images/kissy.jpg?enhanced';
	import { Card, Button } from 'flowbite-svelte';
	import * as Icon from 'flowbite-svelte-icons';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import AnimatablePage from '../AnimatablePage.svelte';
	import Person from './Person.svelte';
	import { v4 as uuid } from 'uuid';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let data;

	let hasRSVP = false;

	let people: Array<string> = [];

	$: people, hasRSVP;

	function handleSubmit() {
		hasRSVP = true;
	}
</script>

{#if hasRSVP}
	<h1 class="my-12 text-center mb-6 text-3xl font-lato font-light">
		Your response has been recorded.
	</h1>
	<h2 class="mt-12 text-center mb-6 text-lg font-lato font-light max-w-[500px]">
		Thanks for responding. Please see the <strong class="font-semibold relative"
			><a
				href={`/${data.permission}/schedule`}
				class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
				>schedule</a
			></strong
		>
		for more information. <br /><br />If you need any more details or have a change in plans, feel
		free to email
		<strong class="font-semibold relative"
			><a
				href="mailto:hello@nickandhana.com"
				class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
				>hello@nickandhana.com</a
			></strong
		>. See you there!
	</h2>
{:else}
	<AnimatablePage>
		<div class="flex flex-col font-amiora w-full sm:w-96 gap-3 sm:mb-8 pb-6">
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
					use:enhance={handleSubmit}
					class="font-lato gap-3 flex flex-col"
				>
					<Person showCeremony={data.permission === 'wedding'} id={uuid()} />
					{#each people as person (person)}
						<Card class="mt-3"
							><Person
								optionalPerson
								id={person}
								onDelete={(id) => {
									people = [...people.filter((p) => p !== id)];
									console.log(id, people);
								}}
								showCeremony={data.permission === 'wedding'}
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
				class="top-0 left-0 w-full"
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
{/if}
