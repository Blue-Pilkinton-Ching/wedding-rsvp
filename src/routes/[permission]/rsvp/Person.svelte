<script lang="ts">
	import { Input, Label, Checkbox, Button } from 'flowbite-svelte';
	import * as Icon from 'flowbite-svelte-icons';
	export let optionalPerson = false;
	export let showCeremony = false;
	export let id: string;
	export let onDelete: ((id: string) => void) | undefined = undefined;
</script>

<fieldset class="flex flex-col gap-3" name="person-{id}">
	<div>
		<Label class="block mb-2" for="{id}.firstName">First Name</Label>
		<Input id="{id}.firstName" name="{id}.firstName" required />
	</div>
	<div>
		<Label class="block mb-2" for="{id}.lastName">Last Name</Label>
		<Input id="{id}.lastName" name="{id}.lastName" required />
	</div>
	{#if !optionalPerson}
		<div>
			<Label class="block mb-2" for="{id}.email">Your email</Label>
			<Input id="{id}.email" type="email" name="{id}.email" required />
		</div>
	{/if}
	<div>
		<Label class="block mb-2" for="{id}.diet_requirements">Any dietary requirements?</Label>
		<Input id="{id}.diet_requirements" name="{id}.diet_requirements" />
	</div>
	<div>
		<Label class="block mb-2" for="{id}.accessibility_requirements"
			>Any accessibility requirements?</Label
		>
		<Input id="{id}.accessibility_requirements" name="{id}.accessibility_requirements" />
	</div>
	<div>
		<Label class="block mb-2" for="{id}.happy_marriage">What is the key to a happy marriage?</Label>
		<Input id="{id}.happy_marriage" name="{id}.happy_marriage" />
	</div>
	<div>
		<Label class="block mb-2" for="{id}.song_requests">Any song requests?</Label>
		<Input id="{id}.song_requests" name="{id}.song_requests" />
	</div>
	{#if showCeremony}
		<div class="flex flex-row">
			<Checkbox id="{id}.attend_ceremony" checked name="{id}.attend_ceremony">
				Tick this box to confirm you will be at the ceremony
			</Checkbox>
		</div>
	{/if}
	<div>
		<Checkbox id="{id}.attend_reception" checked name="{id}.attend_reception">
			Tick this box to confirm you will be at the reception
		</Checkbox>
	</div>
	<div>
		<Checkbox id="{id}.will_not_attend" name="{id}.will_not_attend">
			Tick this box if you will not be attending
		</Checkbox>
	</div>
	{#if optionalPerson && onDelete}
		<Button size="xs" class="text-sm" on:click={() => onDelete(id)}>
			<Icon.TrashBinOutline class="w-6 h-6 me-2" />Remove Person
		</Button>
	{/if}
</fieldset>
