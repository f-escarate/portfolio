<script>
    import { Tooltip, Button } from 'flowbite-svelte';
    export let technologies = [
        {
            "name": "HTML",
            "icon": "html.svg",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
        }
    ];
</script>

<div class="mt-1 mb-4">
    <h3>Herramientas, librerías y frameworks:</h3>
    <div class="flex gap-6 m-2">
        {#each technologies as technology}
            <div>
                <Button href={technology.url} target="_blank" class="hover:opacity-80 hover:scale-90 duration-300 p-0">
                    <img src={`./technologies/${technology.icon}`} alt={technology.name} class="w-auto h-11"/>
                </Button>
                <Tooltip text={technology.name} position="top" class="p-2 text-lg bg-primary">
                    {technology.name}
                </Tooltip>
            </div>
        {/each}
    </div>
</div>
