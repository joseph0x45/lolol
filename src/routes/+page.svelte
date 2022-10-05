<script>
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { db, app } from '../FirebaseClient';

	let loggedIn;

	onMount(() => {
		if (window != undefined) {
			window.location.href = '/login'
		}
	});
</script>

<div class=" flex justify-center bg-green-500 p-6 font-extrabold text-7xl title">
	<h1>Welcome to LOLAND</h1>
</div>
