<script>
	export let data;
	import NavItem from './NavItem.svelte';
</script>

<main class="h-dvh">
	<nav class="w-full p-6">
		<ul class="gap-6 flex flex-row list-none text-xl font-lato font-light">
			<NavItem href={`/${data.permission}/home`} label="HOME" />
			<NavItem href={`/${data.permission}/rsvp`} label="RSVP" />
			<NavItem href={`/${data.permission}/schedule`} label="SCHEDULE" />
			<NavItem href={`/${data.permission}/contact`} label="CONTACT" />
		</ul>
	</nav>
</main>
