<script lang="ts">
	import { onMount } from 'svelte';
	let animate = false;
	onMount(() => (animate = true));
</script>

{#if animate}
	<div class="mt-auto w-full sm:w-auto">
		<div class="my-12 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
			<slot></slot>
		</div>
	</div>
{/if}
