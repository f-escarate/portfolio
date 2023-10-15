<script>
    import { HomeSolid } from 'flowbite-svelte-icons';
    import DropdownButton from './DropdownButton.svelte';

    let webDeb = [
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
    
</script>

<main>
    <div class='px-5 py-0 flex h-[12vh] bg-blue-200'>
        <a class="m-2 w-10 h-10 text-primary-800 dark:text-white inline self-center" href="/">
            <HomeSolid class='w-full h-full'/>
        </a>
        <div class='w-1/2 mx-auto grid grid-cols-3 items-center justify-items-center space-x-4'>
            <DropdownButton title="WebDeb" values={webDeb}/>
            <DropdownButton title="Videogames" values={games}/>
            <DropdownButton title="IoT" values={iot}/>
        </div>
    </div>
</main>