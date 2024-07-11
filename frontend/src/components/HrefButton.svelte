<script>
    import { Button } from 'flowbite-svelte';
    var buttonStyle = 'text-3xl rounded-sm transition-transform bg-sky-200 text-black hover:bg-sky-100 hover:scale-125 my-auto px-2 bg-opacity-75'
    export var title = 'Button';
    export var element_id = '';

    function handleClick() {
        let el = document.getElementById(element_id);
        window.scrollTo({
			top: el.offsetTop+0.88*window.innerHeight-el.offsetHeight,
			behavior: 'smooth'
		})
    }
</script>


<main>
    <Button class={buttonStyle} on:click={handleClick}>
        {title}
    </Button>    
</main>