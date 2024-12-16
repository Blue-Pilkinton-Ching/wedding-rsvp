<script>
	import image from '$lib/images/tramp.jpg?enhanced';
	import { onMount } from 'svelte';
	import { cubicOut, quartOut, quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import AnimatablePage from '../AnimatablePage.svelte';
	export let data;

	let animate = false;

	onMount(() => (animate = true));
</script>

<AnimatablePage>
	<div class="flex flex-row gap-10">
		<div class="relative h-full">
			<div
				class=" top-0 left-0 h-full w-full"
				transition:fly={{
					delay: 0,
					duration: 1200,
					x: -100,
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
	</div>

	<div class="flex flex-col justify-center gap-12 font-amiora my-4 pb-6">
		<div
			class="xl:text-8xl text-7xl"
			transition:fly={{
				delay: 200,
				duration: 1200,
				x: 100,
				y: 0,
				opacity: 0,
				easing: quintOut
			}}
		>
			<h1 class="text-center mb-6 text-5xl font-amiora font-light">A message about gifts</h1>
			<div class="mb-6 text-base font-lato font-light max-w-[450px] leading-snug">
				<p class="mb-4">
					We are grateful to have so many loved ones join for our wedding - some travelling very far
					for this. We feel really privileged to be in a position to celebrate with everyone, and
					thank our families for helping to making the whole day possible. Our relationships with
					you all and your presence on the day is the greatest wedding gift we could receive. We
					have chosen against making a gift registry as we feel like we already own more things than
					we need. So, if you would like to give something, here are some suggestions:
				</p>
				<ul class="space-y-4 mb-4">
					<li class="flex items-start">
						<span class="mr-2">•</span>
						<span>Write or make something creative to gift us</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2">•</span>
						<div>
							<span>Make a donation to a cause we care about</span>
							<ul class="ml-6 mt-2 space-y-2">
								<li class="flex items-start">
									<span class="mr-2">•</span>
									<span>
										<strong class="font-semibold relative">
											<a
												href="https://giftsforgaza.nz/"
												target="_blank"
												class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
											>
												Gifts for Gaza
											</a>
										</strong>
										for safe drinking water to go to displaced families in Gaza
									</span>
								</li>
								<li class="flex items-start">
									<span class="mr-2">•</span>
									<span>
										<strong class="font-semibold relative">
											<a
												href="https://treesthatcount.co.nz/gift?offset=0&page=1&limit=6"
												target="_blank"
												class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
											>
												Trees That Count
											</a>
										</strong>
										to gift a native tree
									</span>
								</li>
								<li class="flex items-start">
									<span class="mr-2">•</span>
									<span>
										<strong class="font-semibold relative">
											<a
												href="https://givealittle.co.nz/org/thefreestore"
												target="_blank"
												class="after:absolute after:h-[1px] after:w-0 after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
											>
												The Free Store
											</a>
										</strong>
										to support this awesome food rescue community in Pōneke who we have been involved
										with over the years
									</span>
								</li>
							</ul>
						</div>
					</li>
					<li class="flex items-start">
						<span class="mr-2">•</span>
						<span>
							Contribute to our honeymoon by transferring to this account:
							<strong class="font-semibold relative">12-3254-0098873-01</strong>
						</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2">•</span>
						<span>
							Contribute to our savings for future adventure gears (such as a tent that we can take
							tramping) by transferring to this account:
							<strong class="font-semibold relative">12-3254-0098873-03</strong>
						</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2">•</span>
						<span
							>Have a good boogie at our reception, and let us know your song requests when you
							RSVP!</span
						>
					</li>
				</ul>
				<p>
					These are just some ideas for those who want to give something, but we are not expecting
					gifts so please do not feel any pressure. Your presence is more than enough! <br /><br
					/>Love,<br /> Hana and Nick
				</p>
			</div>
		</div>
	</div>
</AnimatablePage>
