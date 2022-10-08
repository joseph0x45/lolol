<script lang="ts">
	import { browser } from '$app/environment';
	import { posts } from '../posts';
	import Post from './Post.svelte';
	import { onSnapshot, collection, query } from 'firebase/firestore';
	import { db, mediaUrlFormatter, post } from '../FirebaseClient';
	import { onMount } from 'svelte';

	
	let feed: any[] = [];
	onMount(() => {
		if (browser) {
			const postsRef = collection(db, 'posts');
			const unsubscribe = onSnapshot(postsRef, async (querySnapshot) => {
				let tempFeed: any[] = []
				querySnapshot.forEach( async (doc) => {
					let post = {
						...doc.data()
					};
					tempFeed = [post, ...tempFeed]
				});
				
				feed = tempFeed
			});
		}
	});

</script>

<!-- main background container -->
<div
	class="w-full bg-slate-100 bg-repeat bg-[length:400px_400px] overflow-y-scroll scroll-smooth h-full "
	style="background-image: url('/img/tribal-pattern.webp')"
>
	<!-- center div -->
	<!-- posts are rendered here -->
	<div class=" m-auto bg-white w-[700px] pt-2 pb-[130px] border-l-2 border-r-2 border-slate-200">
			{#each feed as post}
				<Post
					op={post.op}
					media={post.media ? post.media : undefined}
					lols={post.lols}
					text={post.text}
				/>
			{/each}
	</div>

	<style>
		/* width */
		::-webkit-scrollbar {
			width: 10px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #888;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
	</style>
</div>
