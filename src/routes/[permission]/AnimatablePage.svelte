<script lang="ts">
	import { onMount } from 'svelte';
	let animate = false;
	onMount(() => (animate = true));
</script>

{#if animate}
	<div class="mt-auto w-full sm:w-auto">
		<div class="my-12 flex flex-col sm:flex-row gap-10"><slot></slot></div>
	</div>
{/if}
