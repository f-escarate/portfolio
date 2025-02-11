<script>
    import Description from "../Description/Description.svelte";
    export let data;
    export let reverse = false;
    let direction = reverse? 'flex-row-reverse':'flex-row';
    let mediaType = data.mediaType;
</script>
<div class={`py-6 mb-2 flex flex-col md:flex-row gap-4 ${direction}`}>
    {#if mediaType === 'image'}
        <img src={data.src} alt={data.alt} class='md:w-1/2'/>
    {/if}
    <div class="md:w-1/2">
        <Description data={data.descriptionData} />
    </div>
</div>