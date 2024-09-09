<script>
	export let href;
	export let label;
	export let currentPath;

	$: isActive = currentPath === href;
</script>

<li class="relative">
	<a
		{href}
		class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
		class:active={isActive}
	>
		<span class="relative">
			<span class="absolute left-0">{label}</span>
			<span class="left-0 invisible font-normal" aria-hidden="true">{label}}</span>
		</span>
	</a>
</li>

<style>
	.active span {
		font-weight: normal;
	}
</style>
