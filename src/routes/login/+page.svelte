<script lang="ts" >
    import { login } from "../../FirebaseClient"

    let errorMessage: String 
    $: rErrorMessage = errorMessage

    let username = ""
    async function Login(){
        const loginResult = await login(username)
        if(loginResult!=undefined){
            if(!loginResult[0]){
                rErrorMessage=loginResult[1] as string
                return
            }
            localStorage.setItem("lolanderid", loginResult[1] as string)
            window.location.href = '/'
        }
    }
</script>

<div class=" flex flex-col justify-center items-center h-screen bg-green-500 p-6 font-extrabold text-5xl title" >
    <div class=" flex flex-col text-center">
        <div>
            Welcome to LOLAND BRUH
        </div>
        <div>
            Before we let you in, we must know who you are
        </div>
    </div>
    <br>
    <div class=" flex flex-col gap-10">
        <input bind:value="{username}"
        type="text" 
        placeholder="bruh or something" 
        name="" id="" 
        class="rounded-xl text-center p-2 border-2 border-green-800 bg-green-100 caret-re 00text-green-900 focus:bg-green-200 placeholder:text-slate-300 focus:placeholder:text-slate-400 focus:outline-none" >
        <button on:click="{Login}" class=" rounded-xl bg-green-600 text-green-900 hover:bg-green-700 hover:text-green-200 border-2  border-green-700 hover:border-green-800 hover:scale-105 p-2 transition-all">
            Enter the LOLAND
        </button>
        {#if rErrorMessage!=undefined}
            <p class=" text-red-600" >{rErrorMessage}</p>
        {/if}
    </div>
</div>