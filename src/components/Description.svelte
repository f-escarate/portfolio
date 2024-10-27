<script>
    export let description = [];
    export let links = [];
</script>
<main>
    <div class='whitespace-break-spaces my-2 mx-4 p-2 text-xl text-left'>
        {description.slice(0, 1)}{#each description.slice(1) as sentence, i}
            <a class='underline text-blue-500' href={links[i].url} target="_blank" rel="noopener noreferrer">{links[i].name}</a>{sentence}
        {/each}
    </div>
</main>