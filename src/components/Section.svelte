<script>
    import data from '../data/data.json'
    import Description from './Description.svelte';
    import SectionElement from './SectionElement.svelte';
    export var name = '';
    let elements = data[name].elements
</script>


<div class='w-5/6 lg:w-4/6 my-10 max-w-[900px]'>
    <h1 id={name} class='text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-7 lg:mb-10'> {data[name].title} </h1>
    {#if data[name].hasOwnProperty('description')}
        <Description description={data[name].description} links={data[name].links}/>
    {/if}
    {#each elements as element}
        <SectionElement element={element}/>
    {/each}
</div>