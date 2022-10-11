<script lang="ts">
	import { browser } from '$app/environment';
	import { SubtractAlt } from 'carbon-icons-svelte';
	import Attachment from 'carbon-icons-svelte/lib/Attachment.svelte';
	import SendAlt from 'carbon-icons-svelte/lib/SendAlt.svelte';
	import { post } from "../FirebaseClient"
	let mediaArray: HTMLInputElement | null
	let preview : HTMLElement
	let blob: Blob
	let text: string

	function previewMedia(e:Event){
		if(browser){
			mediaArray = document.getElementById('media') as HTMLInputElement
			let file = mediaArray.files? mediaArray.files[0] : null
			var img = document.createElement("img");
			img.className = "media_preview";			
			img.src = window.URL.createObjectURL(file as Blob);
			blob = file as Blob
			preview.replaceChildren(img)
		}
	}

	async function upload(){
		console.log("sup");
		const postResult = await post(localStorage.getItem("lolanderid") as string, text, blob)
		console.log(postResult);
		text = "";
		onPreviewDelete()
	}

	function onPreviewDelete(){
		preview.replaceChildren();
	}


</script>

<div class="fixed bottom-0 w-full min-h-12 bg-slate-200">
	<div bind:this="{preview}" class="w-full relative hover:cursor-pointer" on:click="{onPreviewDelete}" >
		<!-- <img alt="" src="/img/red-face2.png" class="px-2 pt-2 h-[300px] rounded" /> -->
		<!-- <span class="absolute top-0 right-0 p-auto rounded-xl opacity-25 hover:opacity-75 text-[25px] text-white bg-black transition-all">
			<SubtractAlt class="hover:cursor-pointer hover:scale-105 absolute top-0 right-0 p-auto rounded-xl opacity-25 hover:opacity-75 text-[25px] text-white bg-black transition-all" />
		</span> -->
		<!-- <SubtractAlt 
		class={` 
			${ preview ? 
				"hover:cursor-pointer hover:scale-105 absolute top-0 right-0 p-16 rounded-xl opacity-25 hover:opacity-75 text-[25px] text-white bg-black transition-all" : 
				"hidden" 
			} 
		`}
		/> -->
	</div>
	<div class="flex items-center px-1">
		<!-- text field -->
		<input
			bind:value="{text}"
			type="text"
			placeholder="type something"
			class="focus:outline-none rounded h-[36px] mb-1 mt-1 pl-2 w-full focus:border focus:border-slate-300"
		/>

		<!-- attachment icon -->
		<label
			type="file"
			class="rounded-full h-8 w-8 ml-2 my-2 bg-slate-200 text-slate-400 hover:bg-slate-200 hover:text-green-700 hover:rotate-45 hover:scale-110 cursor-pointer transition-all"
		>
			<Attachment size={24} class="pl-1" />
			<input
				accept="image/png, image/gif, image/jpeg"
				type="file"
				id="media"
				name="file"
				class="hidden"
				on:change="{(e)=>{
					e.preventDefault()
					previewMedia(e)
				}}"
			/>
		</label>

		<!-- send icon (paper plane) -->
		<button
			on:click="{upload}"
			type="submit"
			class="rounded-xl h-[36px] ml-2 pl-[10px]  w-[48px] bg-green-700 text-green-100 border border-green-700 hover:bg-green-100 hover:text-green-600 transition-all"
		>
			<!-- <SendAlt size={24} /> -->
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
	
	
	
</div>

<style>
	
</style>
