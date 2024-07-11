<script>
    import HrefButton from './HrefButton.svelte';   
</script>

<div class='sticky top-0 z-10'>
    <div class='h-[10vh] px-5 py-1 flex bg-blue-500 invisible md:visible'>
        <div class='w-full h-full mx-auto grid grid-flow-col auto-cols-auto items-center place-content-center gap-16'>
            <HrefButton title="Desarrollo web" element_id='webdev'/>
            <HrefButton title="Videojuegos" element_id='games'/>
            <HrefButton title="Machine Learning" element_id='ML'/>
            <HrefButton title="IoT" element_id='IoT'/>
        </div>
    </div>
</div>