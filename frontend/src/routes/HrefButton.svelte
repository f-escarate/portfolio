<script>
    import { Button } from 'flowbite-svelte';
    var buttonStyle = 'text-3xl transition-transform hover:scale-125 my-auto px-2 bg-opacity-75'
    export var title = 'Button';
    export var element_id = '';

    function handleClick() {
        let el = document.getElementById(element_id);
        window.scrollTo({
			top: el.offsetTop,
			behavior: 'smooth'
		})
    }
</script>


<main>
    <Button color='dark' class={buttonStyle} on:click={handleClick}>
        {title}
    </Button>    
</main>