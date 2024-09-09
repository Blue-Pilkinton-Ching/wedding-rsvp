<script>
	export let href;
	export let label;
</script>

<li class="relative">
	<a
		{href}
		class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
	>
		{label}
	</a>
</li>
