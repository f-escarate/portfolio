<script>
    import Description from './Description/Description.svelte';
    import SectionElement from './SectionItem.svelte';
    import Timeline from './Timeline/Timeline.svelte';
    export var id = '';
    export var data;
</script>


<div class='w-5/6 lg:w-4/6 mt-10 md:mb-10 max-w-[900px]'>
    <h1 id={id} class='mb-4 md:mb-7 lg:mb-10'> {data.title} </h1>
    {#if data.type === 'DescriptionSection'}
        <Description data={data}/>
    {:else if  data.type === 'GroupsSection'}
        {#each data.elements as element}
            <SectionElement element={element}/>
        {/each}
    {:else if data.type === 'TimelineSection'}
        <Timeline elements={data.elements}/>
    {/if}
</div>