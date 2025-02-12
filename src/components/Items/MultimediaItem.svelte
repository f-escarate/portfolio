<script>
    import Description from "../Description/Description.svelte";
    import Image from "./Image.svelte";
    export let data;
    export let reverse = false;
    let direction = reverse? 'flex-row-reverse':'flex-row';
    let mediaType = data.mediaType;
</script>
<div class={`py-6 mb-2 flex flex-col md:flex-row gap-2 items-center ${direction}`}>
    {#if mediaType === 'image'}
        <Image data={data} />
    {/if}
    <Description data={data.descriptionData} />
</div>