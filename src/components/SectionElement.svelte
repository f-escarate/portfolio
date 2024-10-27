<script>
    import Expand from '../lib/icons/Expand.svelte';
    import Condense from '../lib/icons/Condense.svelte';

    export let element = {title: '', description: '', url: ''};
    let expanded = false;
    const getClass = (expanded) => {
        return 'bg-sky-200 px-6 overflow-hidden ' + (expanded? 'py-6 mb-4 animate-expand-down': 'animate-condense-up');
    }
</script>

<div class='my-4 rounded-sm'> 
    <button class="px-6 py-3 md:py-4 lg:py-6 flex justify-between w-full items-center h-full bg-sky-200 hover:bg-cyan-200" on:click={()=>{expanded = !expanded;}}>
        <h1 class='text-xl md:text-2xl lg:text-3xl font-bold text-left'>{element.title}</h1>
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