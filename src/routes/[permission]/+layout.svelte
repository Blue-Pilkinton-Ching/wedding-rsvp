<script>
	export let data;
	import NavItem from './NavItem.svelte';
	import { page } from '$app/stores';

	let isOpen = false;

	function toggleMenu() {
		setTimeout(() => {
			isOpen = !isOpen;
		}, 200);
	}
</script>

<main class="h-dvh">
	<nav class="w-full p-6">
		{#if isOpen}
			<div class="fixed top-0 left-0 h-screen w-screen bg-white z-50 p-6">
				<div
					class="h-[53px] list-none text-xl font-lato font-light border-gray-300 border-b pb-6"
				></div>
				<ul
					class="flex h-[calc(100vh-48px-53px)] flex-col-reverse items-center justify-center text-xl"
				>
					<NavItem
						href={`/${data.permission}/contact`}
						label="CONTACT"
						currentPath={$page.url.pathname}
						on:click={toggleMenu}
					/>
					<NavItem
						href={`/${data.permission}/gifts`}
						label="GIFTS"
						currentPath={$page.url.pathname}
						on:click={toggleMenu}
					/>
					<NavItem
						href={`/${data.permission}/schedule`}
						label="SCHEDULE"
						currentPath={$page.url.pathname}
						on:click={toggleMenu}
					/>
					<NavItem
						href={`/${data.permission}/rsvp`}
						label="RSVP"
						on:click={toggleMenu}
						currentPath={$page.url.pathname}
					/>
					<NavItem
						href={`/${data.permission}/home`}
						on:click={toggleMenu}
						label="HOME"
						currentPath={$page.url.pathname}
					/>
				</ul>
			</div>
		{/if}
		<ul class="h-[53px] list-none text-xl font-lato font-light border-gray-300 border-b pb-6">
			<button
				class={`${isOpen ? 'fixed' : 'relative'} z-50 flex h-10 w-10 flex-col items-center justify-center sm:hidden`}
				on:click={toggleMenu}
				aria-label="Toggle menu"
			>
				<span
					class={`absolute block h-0.5 w-8 transform bg-black transition duration-300 ease-in-out ${
						isOpen ? 'rotate-45' : '-translate-y-2'
					}`}
				></span>
				<span
					class={`absolute block h-0.5 w-8 transform bg-black transition duration-300 ease-in-out ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					class={`absolute block h-0.5 w-8 transform bg-black transition duration-300 ease-in-out ${
						isOpen ? '-rotate-45' : 'translate-y-2'
					}`}
				></span>
			</button>
			<div class="flex-row-reverse gap-6 hidden sm:flex">
				<NavItem
					href={`/${data.permission}/contact`}
					label="CONTACT"
					currentPath={$page.url.pathname}
				/>
				<NavItem
					href={`/${data.permission}/gifts`}
					label="GIFTS"
					currentPath={$page.url.pathname}
				/>
				<NavItem
					href={`/${data.permission}/schedule`}
					label="SCHEDULE"
					currentPath={$page.url.pathname}
				/>
				<NavItem href={`/${data.permission}/rsvp`} label="RSVP" currentPath={$page.url.pathname} />
				<NavItem href={`/${data.permission}/home`} label="HOME" currentPath={$page.url.pathname} />
			</div>
		</ul>
		<section class="h-[calc(100vh-48px-28px-28px)] flex flex-col items-center">
			<slot></slot>
		</section>
	</nav>
</main>
