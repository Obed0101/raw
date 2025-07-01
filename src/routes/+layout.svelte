<script>
	import '../app.css';
	import Nav from '../lib/Nav.svelte';
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
	<Nav />
	
	<main class="container mx-auto p-8">
		<div class="backdrop-blur-md bg-white/5 dark:bg-gray-800/30 rounded-xl shadow-xl border border-white/10 p-6">
			<slot />
		</div>
	</main>
</div>

