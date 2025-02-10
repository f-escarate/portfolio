<script>
    export let element = {title: '', description: '', url: ''};
</script>

<div class="py-6 mb-2">
    <p class='text-xl whitespace-pre-wrap'>{element.description}</p>
    {#if element.hasOwnProperty('url')}
        <a class='text-light underline' href={element.url} target="_blank" rel="noopener noreferrer">Más información</a>
    {/if}
</div>