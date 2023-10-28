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

<main>
    <div class='md:h-[80vh] grid place-content-center lg:pr-[300px]'>
        <div class='h-[90%] p-2 flex flex-nowrap'>
            <div class='h-full m-4 p-2 grid place-content-center'>
                <h1 class='m-2 p-1 text-6xl'>Felipe Escárate</h1>
                <h2 class='m-2 p-1 text-l color-slate-500'>Estudiante de 5to año de Ingeniería Civil en Computación</h2>
            </div>

            <div class='h-full m-4 ml-24 p-2 flex flex-wrap flex-col'>
                <div class='bg-slate-500 rounded-full m-1 p-1 h-10 aspect-square'>
                    <a class='grid place-items-center h-full w-full'href="https://github.com/f-escarate" target="_blank" rel="noopener noreferrer">
                        <GithubSolid css_class='w-2/3 h-2/3 text-blue-100 transition duration-75 group-hover:text-gray-900' />
                    </a>
                </div>
                <div class='bg-slate-500 rounded-full m-1 p-1 h-10 aspect-square'>
                    <a class='grid place-items-center h-full w-full'href="https://www.linkedin.com/in/felipe-esc%C3%A1rate-793380152/" target="_blank" rel="noopener noreferrer">
                        <LinkedinSolid css_class='w-2/3 h-2/3 text-blue-100 transition duration-75 group-hover:text-gray-900' />
                    </a>
                </div>
                <div class='bg-slate-500 rounded-full m-1 p-1 h-10 aspect-square'>
                    <button class='grid place-items-center h-full w-full' on:click={handleClickContact}>
                        <AddressBookSolid css_class='w-2/3 h-2/3 text-blue-100 transition duration-75 group-hover:text-gray-900' />
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>