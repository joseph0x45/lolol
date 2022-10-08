<script lang="ts" >
    import { onMount } from "svelte";
    let username = ""
    onMount(
        ()=>{
            if( window!=undefined ){
                username = localStorage.getItem("lolanderid") as string
            }
        }
    )
</script>


<div class="sticky top-0 justify-between  h-20 flex bg-green-500 ">
    <h1 class="pl-4 pr-20 text-[50px] text-green-900 hover:text-green-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-500  transition-all">LOLAND</h1>

    <!-- profile here -->
    <div class="m-2 flex items-center rounded-full text-green-900 hover:bg-green-600 hover:text-green-200  transition-all">
        <img alt="" src="/img/red-face2.png" class="ml-2 rounded-full w-[40px] h-[40px] ring-2 ring-green-800 hover:ring-2 hover:ring-green-300 hover:scale-105 hover:cursor-pointer transition-all"/>
        <p class="pl-4 pr-4 text-[25px]">{username}</p>
    </div>

</div>