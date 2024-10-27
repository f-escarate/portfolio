<script>
    import Expand from '../lib/icons/Expand.svelte';
    import Condense from '../lib/icons/Condense.svelte';

    export let element = {title: '', description: '', url: ''};
    let expanded = false;
    const getClass = (expanded) => {
        return expanded? 'p-6 mb-4 block': 'mb-4 hidden';
    }
</script>

<div class='my-4 rounded-sm bg-sky-200'> 
    <button class="p-6 flex justify-between w-full items-center h-full hover:bg-cyan-200" on:click={()=>{expanded = !expanded;}}>
        <h1 class='text-3xl font-bold text-left'>{element.title}</h1>
        <div class='h-full max-w-[40px] w-full'>
            {#if expanded}
                <Condense css_class='h-full w-full' />
            {:else}
                <Expand css_class='h-full w-full'  />
            {/if}
        </div>
    </button>
    <div class={getClass(expanded)}>
        <p class='text-xl whitespace-pre-wrap'>{element.description}</p>
        {#if element.hasOwnProperty('url')}
            <a class='text-blue-500 underline' href={element.url} target="_blank" rel="noopener noreferrer">Más información</a>
        {/if}
    </div>
</div>