<script>
    import HrefButton from './HrefButton.svelte';
    export let css_class = '';
    
</script>

<main class={css_class}>
    <div class='px-5 py-0 flex h-full bg-sky-200 invisible md:visible'>
        <div class='w-full h-full mx-auto grid grid-flow-col auto-cols-auto items-center place-content-center gap-16'>
            <HrefButton title="Desarrollo web" element_id='webdev'/>
            <HrefButton title="Videojuegos" element_id='games'/>
            <HrefButton title="Machine Learning" element_id='ML'/>
            <HrefButton title="IoT" element_id='IoT'/>
        </div>
    </div>
</main>