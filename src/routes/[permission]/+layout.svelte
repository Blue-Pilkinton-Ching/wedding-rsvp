<script>
	export let data;
	import NavItem from './NavItem.svelte';
	import { page } from '$app/stores';
</script>

<main class="h-dvh">
	<nav class="w-full p-6">
		<ul class="gap-6 flex flex-row list-none text-xl font-lato font-light">
			<NavItem href={`/${data.permission}/home`} label="HOME" currentPath={$page.url.pathname} />
			<NavItem href={`/${data.permission}/rsvp`} label="RSVP" currentPath={$page.url.pathname} />
			<NavItem
				href={`/${data.permission}/schedule`}
				label="SCHEDULE"
				currentPath={$page.url.pathname}
			/>
			<NavItem
				href={`/${data.permission}/contact`}
				label="CONTACT"
				currentPath={$page.url.pathname}
			/>
		</ul>
		<slot></slot>
	</nav>
</main>
