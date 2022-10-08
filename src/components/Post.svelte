<script lang="ts">
	export let text: string;
	export let op: string;
	export let media: string | undefined;
</script>

<div class="w-[680px] relative bg-white mb-2 rounded-xl m-auto border border-slate-300">
	<!-- user id and pic -->
	<div class="pl-[10px] pt-[10px] flex items-center transition-all">
		<img
			alt=""
			src="/img/red-face2.png"
			class=" rounded-full w-[40px] h-[40px] ring-2 ring-slate-500 hover:ring-2 hover:ring-slate-700 transition-all"
		/>
		<p class="pl-4 pr-4 text-[25px] text-slate-900">{op}</p>
	</div>

	<!-- post content -->
	<h1 class="p-[10px] text-slate-700">{text}</h1>

	<!-- post pic -->
	{#if media}
		<img
			alt=""
			src={media}
			class="rounded-b-xl border-t border-slate-300 w-[680px]  transition-all"
		/>
	{/if}

	<!-- LOL btn -->
	<div
		class="hover:cursor-pointer absolute bottom-0 right-0 p-2 opacity-25 hover:opacity-100 text-[35px] text-slate-500 hover:text-green-100 hover:scale-105"
	>
		LOL
	</div>
</div>
