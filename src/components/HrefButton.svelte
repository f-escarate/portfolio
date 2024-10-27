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
    class='h-[90%] rounded-sm transition-transform bg-sky-200 hover:bg-sky-100 hover:scale-110 lg:px-2 bg-opacity-75'
    on:click={handleClick}>
    <p class='text-3xl text-black leading-none'>
        {title}
    </p>
    
</button>    