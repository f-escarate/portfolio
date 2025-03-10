<script>
    export var title = 'Button';
    export var href = '';
    export var element_id = '';
    export var buttonClass = '';
    export var pClass = '';

    const handleClick = element_id?
        () => {
        let el = document.getElementById(element_id);
        window.scrollTo({
			top: el.offsetTop-el.offsetHeight,
			behavior: 'smooth'
		})}:
        () => {
            window.location.href = href;
        };
</script>


<button 
    class={`h-max py-3 rounded-lg transition-transform bg-light hover:bg-light-hover hover:scale-110 lg:px-4 bg-opacity-75 ${buttonClass}`}
    on:click={handleClick}>
    <p class={`text-3xl text-black font-semibold leading-none ${pClass}`}>
        {title}
    </p>
    
</button>    