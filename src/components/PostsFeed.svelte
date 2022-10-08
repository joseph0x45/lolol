<script>
import { posts } from '../posts';
	import Post from './Post.svelte';
</script>

<!-- main background container -->
<div
	class="w-full bg-slate-100 bg-repeat bg-[length:400px_400px] overflow-y-scroll h-full "
	style="background-image: url('/img/tribal-pattern.webp')"
>
	<!-- center div -->
	<!-- posts are rendered here -->
	<div class=" m-auto bg-white w-[700px] pt-2 pb-[130px] border-l-2 border-r-2 border-slate-200" >
		{#each posts as post}
			<Post op={post.op} media={ post.media? post.media: undefined } text={post.text} />
		{/each}
	</div>
</div>
