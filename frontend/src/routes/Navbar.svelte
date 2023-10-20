<script>
    import HrefButton from './HrefButton.svelte';
    export let css_class = '';

    let webDev = [
        {name: 'Django', href: 'django'},
        {name: 'Svelte', href: 'svelte'},
        {name: 'React', href: 'react'}
    ];
    let games = [
        {name: 'Frog', href: 'frog'},
        {name: 'Ship', href: 'ship'},
        {name: 'AOne', href: 'aone'}
    ];
    let iot = [
        {name: 'Arduino', href: 'arduino'},
        {name: 'Raspberry Pi', href: 'raspberry-pi'},
        {name: 'ESP32', href: 'esp32'}
    ]
    let ml = [
        {name: 'Arduino', href: 'arduino'},
        {name: 'Raspberry Pi', href: 'raspberry-pi'},
        {name: 'ESP32', href: 'esp32'}
    ]
    
</script>

<main class={css_class}>
    <div class='px-5 py-0 flex h-full bg-slate-500 bg-opacity-25'>
        <div class='w-full h-full mx-auto grid grid-flow-col auto-cols-auto items-center place-content-center gap-16'>
            <HrefButton title="WebDev" values={webDev} element_id='webdev'/>
            <HrefButton title="Videojuegos" values={games} element_id='games'/>
            <HrefButton title="Machine Learning" values={ml} element_id='ML'/>
            <HrefButton title="IoT" values={iot} element_id='IoT'/>
        </div>
    </div>
</main>