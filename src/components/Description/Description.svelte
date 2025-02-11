<script>
    import Link from "./Link.svelte";
    import List from "./List.svelte";
    import TooltipText from "./TooltipText.svelte";
    
    export let data;
    const { description, components } = data;
    let content = description.slice(0, 1);
    
</script>

<div class='whitespace-break-spaces my-2 text-xl text-left'>
    {content}{#each description.slice(1) as sentence, i}
        {#if components[i].type === 'link'}
            <Link link={components[i]}/>
        {:else if components[i].type === 'list'}
            <List list={components[i]}/>
        {:else if components[i].type === 'tooltip'}
            <TooltipText tooltip={components[i]}/>
        {/if}{sentence}
    {/each}
</div>