<script>
    import { modalData } from '../../stores.js'
    export let data;

    const handleOpenModal = () => {
        modalData.set({
            open: true,
            content: data
        });
    }

</script>

<button class="min-w-max md:max-w-[33%] hover:opacity-90 hover:scale-95 duration-300" on:click={handleOpenModal}>
    <img src={data.src} alt={data.alt} class='rounded-3xl object-contain float-left mx-6'/>
</button>


