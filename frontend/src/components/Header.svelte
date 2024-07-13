<script>
    import GithubSolid from '../lib/icons/GithubSolid.svelte';
    import LinkedinSolid from '../lib/icons/LinkedinSolid.svelte';
    import AddressBookSolid from '../lib/icons/AddressBookSolid.svelte';
    function handleClickContact() {
        let el = document.getElementById('contact');
        window.scrollTo({
			top: el.offsetTop+0.88*window.innerHeight-el.offsetHeight,
			behavior: 'smooth'
		})
    }
</script>

    <div class='md:h-[90vh] max-w-[900px] mx-auto flex justify-between items-center'>
        <div class='m-4 p-2 flex flex-col'>
            <h1 class='m-2 p-1 text-6xl'>Felipe Escárate F.</h1>
            <h2 class='m-2 p-1 text-lg color-slate-500'>Estudiante de 5to año de Ingeniería Civil en Computación</h2>
        </div>

        <div class='m-4 ml-8 p-2 flex flex-wrap flex-col'>
            <div class='bg-blue-500 rounded-full m-1 p-1 h-10 aspect-square'>
                <a class='grid place-items-center h-full w-full'href="https://github.com/f-escarate" target="_blank" rel="noopener noreferrer">
                    <GithubSolid css_class='w-2/3 h-2/3 text-blue-100 transition duration-75 group-hover:text-gray-900' />
                </a>
            </div>
            <div class='bg-blue-500 rounded-full m-1 p-1 h-10 aspect-square'>
                <a class='grid place-items-center h-full w-full'href="https://www.linkedin.com/in/felipe-esc%C3%A1rate-793380152/" target="_blank" rel="noopener noreferrer">
                    <LinkedinSolid css_class='w-2/3 h-2/3 text-blue-100 transition duration-75 group-hover:text-gray-900' />
                </a>
            </div>
            <div class='bg-blue-500 rounded-full m-1 p-1 h-10 aspect-square'>
                <button class='grid place-items-center h-full w-full' on:click={handleClickContact}>
                    <AddressBookSolid css_class='w-2/3 h-2/3 text-blue-100 transition duration-75 group-hover:text-gray-900' />
                </button>
            </div>
        </div>
    </div>