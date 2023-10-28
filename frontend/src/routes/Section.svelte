<script>
    import data from '../data/data.json'
    import Description from './Description.svelte';
    export var name = '';
    let elements = data[name].elements
</script>


<div class='w-5/6 lg:w-4/6 mx-auto my-10'>
    <h1 id={name} class='text-5xl font-bold mb-10'> {data[name].title} </h1>
    {#if data[name].hasOwnProperty('description')}
        <Description description={data[name].description} links={data[name].links}/>
    {/if}
    {#each elements as element}
        <div class='my-4 mx-8 p-6 rounded-sm bg-sky-200'>
            <h1 class='text-2xl font-bold'>{element.title}</h1>
            <div class='m-4'>
                <p class='text-xl whitespace-pre-wrap'>{element.description}</p>
                {#if element.hasOwnProperty('url')}
                    <a class='text-blue-500 underline' href={element.url} target="_blank" rel="noopener noreferrer">Más información</a>
                {/if}
            </div>
            
        </div>
    {/each}
</div>