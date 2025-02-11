<script>
    import GithubSolid from '../lib/icons/GithubSolid.svelte';
    import LinkedinSolid from '../lib/icons/LinkedinSolid.svelte';
    import AddressBookSolid from '../lib/icons/AddressBookSolid.svelte';
    import { Tooltip, Button } from 'flowbite-svelte';

</script>

<div class='md:h-[90vh] max-w-[900px] m-auto flex justify-center items-center'>
    <div class='flex w-full justify-between items-stretch'>
        <div class='m-4 p-2 flex flex-col justify-center gap-2 min-h-full'>
            <h1 class='text-4xl md:text-5xl lg:text-6xl'>Felipe Escárate Fernández</h1>
            <h2 class='text-2xl md:text-3xl lg:text-4xl'>Ingeniero Civil en Computación</h2>
            <p class="text-xl text-dark">
                Soy Ingeniero Civil en Computación de la Universidad de Chile. Me gusta mucho programar, y por eso he hecho desarrollado proyectos en distintos ámbitos.
            </p>
        </div>

        <div class='m-2 p-1 flex flex-wrap flex-col h-max'>
            <div class='bg-primary hover:bg-secondary rounded-full m-1 h-10 aspect-square'>
                <a class='grid place-items-center h-full w-full p-1'href="https://github.com/f-escarate" target="_blank" rel="noopener noreferrer">
                    <GithubSolid css_class='w-2/3 h-2/3 text-pale transition duration-75 group-hover:text-gray-900' />
                </a>
            </div>
            <div class='bg-primary hover:bg-secondary rounded-full m-1 h-10 aspect-square'>
                <a class='grid place-items-center h-full w-full p-1' href="https://www.linkedin.com/in/f-escarate/" target="_blank" rel="noopener noreferrer">
                    <LinkedinSolid css_class='w-2/3 h-2/3 text-pale transition duration-75 group-hover:text-gray-900' />
                </a>
            </div>
            <div class='bg-primary hover:bg-secondary rounded-full m-1 h-10 aspect-square'>
                <Button id="contact-button" class='h-full w-full p-1'>
                    <AddressBookSolid css_class='w-2/3 h-2/3 text-pale transition duration-75 group-hover:text-gray-900' />
                </Button>
                <Tooltip trigger="click" class='flex flex-col gap-1 p-2 text-lg bg-primary' triggeredBy="#contact-button" placement="bottom">
                    <p class="font-bold">Correos:</p>
                    <p>felipeescaratefernandez@gmail.com</p>
                    <p>felipe.escarate@ug.uchile.cl</p>
                </Tooltip>
            </div>
        </div>
    </div>
</div>