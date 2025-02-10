<script>
    import data from '../data/data.json'
    import Description from './Description/Description.svelte';
    import SectionElement from './SectionItem.svelte';
    export var name = '';
    let elements = data[name].elements
</script>


<div class='w-5/6 lg:w-4/6 mt-10 md:mb-10 max-w-[900px]'>
    <h1 id={name} class='mb-4 md:mb-7 lg:mb-10'> {data[name].title} </h1>
    {#if data[name].type === 'DescriptionSection'}
        <Description data={data[name]}/>
    {:else if  data[name].type === 'GroupsSection'}
        {#each elements as element}
            <SectionElement element={element}/>
        {/each}
    {/if}
</div>