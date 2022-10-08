<script lang="ts">

	import Attachment from 'carbon-icons-svelte/lib/Attachment.svelte';

	let avatar, fileinput: HTMLInputElement;
	


</script>

<div class="fixed bottom-0 w-full flex items-center px-1 h-12 bg-slate-200">
	<!-- text field -->
	<input
		type="text"
		placeholder="type something"
		class="focus:outline-none rounded h-[36px] pl-2 w-full focus:border focus:border-slate-300"
	/>

	<!-- attachment icon -->
	<label
		type="file"
		class="rounded-full h-8 w-8 ml-2 my-2 bg-slate-200 text-slate-400 hover:bg-slate-200 hover:text-green-700 hover:rotate-45 hover:scale-110 cursor-pointer transition-all"
	>
		<Attachment size={24} class="pl-1" />
		<input
			type="file"
			id="file"
			name="file"
			class="hidden"
			bind:this={fileinput}
		/>
	</label>

	<!-- send icon (paper plane) -->
	<button
	    on:click="{()=>{console.log(fileinput.value)}}"
		type="submit"
		class="rounded-xl h-[36px] ml-2 pl-[10px]  w-[48px] bg-green-700 text-green-100 border border-green-700 hover:bg-green-100 hover:text-green-600 transition-all"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
			/>
		</svg>
	</button>
</div>
