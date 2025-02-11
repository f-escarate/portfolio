<script>
    import HrefButton from './HrefButton.svelte';   
</script>

<div class='sticky top-0 z-10'>
    <div class='h-[10vh] px-5 py-1 bg-primary hidden md:block'>
        <div class='w-5/6 lg:w-4/6 mx-auto max-w-[900px] h-full flex justify-between items-center'>
            <HrefButton title="Proyectos" element_id='projects'/>
            <HrefButton title="Videojuegos" element_id='games'/>
            <!-- <HrefButton title="Machine Learning" element_id='ML'/> -->
        </div>
    </div>
</div>