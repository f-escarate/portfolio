<script>
    export let data;
    export let reverse = false;
    let direction = reverse? 'flex-row-reverse':'flex-row';
    let mediaType = data.mediaType;
</script>
<div class={`py-6 mb-2 flex flex-col md:flex-row gap-4 ${direction}`}>
    {#if mediaType === 'image'}
        <img src={data.src} alt={data.alt} class='md:w-1/2'/>
    {/if}
    <div>
        <p class="whitespace-break-spaces my-2 text-xl text-left">
            {data.description}
        </p>
    </div>
</div>