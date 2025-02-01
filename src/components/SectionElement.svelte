<script>
    import Expand from '../lib/icons/Expand.svelte';
    import Condense from '../lib/icons/Condense.svelte';

    export let element = {title: '', description: '', url: ''};
    let expanded = false;
    const getClass = (expanded) => {
        return 'bg-secondary text-white shadow-md rounded-b-[5px] px-6 overflow-hidden h-fit ' + (expanded? 'animate-expand-down': 'animate-condense-up');
    }
</script>

<div class='my-4 rounded-sm h-fit'> 
    <button class={"px-6 py-3 md:py-4 lg:py-6 flex justify-between w-full items-center h-full bg-white hover:bg-hover hoverable" + (expanded? ' active': '')}
        on:click={()=>{expanded = !expanded;}}>
        <h2 class='text-xl md:text-2xl lg:text-3xl font-bold text-left'>{element.title}</h2>
        <div class='h-full max-w-[40px] w-full'>
            {#if expanded}
                <Condense css_class='h-full w-full' />
            {:else}
                <Expand css_class='h-full w-full'  />
            {/if}
        </div>
    </button>
    <div class={getClass(expanded)}>
        <div class="py-6 mb-2">
            <p class='text-xl whitespace-pre-wrap'>{element.description}</p>
            {#if element.hasOwnProperty('url')}
                <a class='text-light underline' href={element.url} target="_blank" rel="noopener noreferrer">Más información</a>
            {/if}
        </div>
    </div>
</div>