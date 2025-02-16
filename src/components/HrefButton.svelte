<script>
    export var title = 'Button';
    export var element_id = '';

    function handleClick() {
        let el = document.getElementById(element_id);
        window.scrollTo({
			top: el.offsetTop-el.offsetHeight,
			behavior: 'smooth'
		})
    }
</script>


<button 
    class='h-max py-3 rounded-lg transition-transform bg-light hover:bg-light-hover hover:scale-110 lg:px-4 bg-opacity-75'
    on:click={handleClick}>
    <p class='text-3xl text-black font-semibold leading-none'>
        {title}
    </p>
    
</button>    