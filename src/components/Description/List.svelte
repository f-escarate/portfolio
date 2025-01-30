<script>
    export let list;
    const { elements } = list;
</script>

<ul class='list-disc list-inside my-2 text-xl text-left'>
    <h2>{list.title}</h2>
    {#each elements as element}
        <li class='mb-4'>
            <b>{element.title}</b> {element.text}
        </li>
    {/each}
</ul>