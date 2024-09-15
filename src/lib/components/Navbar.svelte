<script lang="ts">
	// Removed DarkModeToggle import
</script>

<section class="my-10">
	<div
		class="bg-white pl-2 pr-2 navbar z-50 fixed top-0 w-full shadow-md transition-colors duration-300"
	>
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-800"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm text-lg dropdown-content bg- rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
				>
					<li>
						<a
							href="/"
							class="text-gray-700 hover:bg-gray-100"
							>Home</a
						>
					</li>
					<li>
						<a
							href="/game"
							class="text-gray-700 hover:bg-gray-100"
							>Simulation</a
						>
					</li>
					<li>
						<a
							href="/profile"
							class="text-gray-700 hover:bg-gray-100"
							>Profile</a
						>
					</li>
					<li>
						<a
							href="/community"
							class="text-gray-700 hover:bg-gray-100"
							>Community</a
						>
					</li>
					<li>
						<a
							href="/resources"
							class="text-gray-700 hover:bg-gray-100"
							>Resources</a
						>
					</li>

					<li>
						<a
							href="/leaderboard"
							class="text-gray-700 hover:bg-gray-100"
							>Leaderboard</a
						>
					</li>

					<li>
						<a
							href="/contact"
							class="text-gray-700 hover:bg-gray-100"
							>Contact</a
						>
					</li>
					<li>
						<a
							href="/about"
							class="text-gray-700 hover:bg-gray-100"
							>About</a
						>
					</li>
				</ul>
			</div>
			<a href="/" class="btn btn-ghost text-2xl text-gray-800">SIMplify</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="md:text-2xl font-medium menu menu-horizontal px-1">
				<li>
					<a
						href="/"
						class="text-black-700 hover:bg-purple-100"
						>Home</a
					>
				</li>
				<li>
					<a
						href="/game"
						class="text-black-700 hover:bg-purple-100"
						>Simulation</a
					>
				</li>

				<li>
					<a
						href="/profile"
						class="text-black-700 hover:bg-purple-100"
						>Profile</a
					>
				</li>
				<li>
					<a
						href="/community"
						class="text-black-700 hover:bg-purple-100"
						>Community</a
					>
				</li>
				<li>
					<a
						href="/resources"
						class="text-black-700 hover:bg-purple-100"
						>Resources</a
					>
				</li>

				<li>
					<a
						href="/leaderboard"
						class="text-black-700 hover:bg-purple-100"
						>Leaderboard</a
					>
				</li>

				<li>
					<a
						href="/contact"
						class="text-black-700 hover:bg-purple-100"
						>Contact</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="text-black-700 hover:bg-purple-100"
						>About</a
					>
				</li>
			</ul>
		</div>
		<div class="navbar-end gap-x-4">
			<!-- Removed DarkModeToggle component -->
		</div>
	</div>
</section>
