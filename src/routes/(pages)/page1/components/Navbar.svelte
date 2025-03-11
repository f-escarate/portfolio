<script>
    import HrefButton from '../../../../components/HrefButton.svelte';
    function toStart() {
        window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
    }
</script>

<nav class='sticky top-0 z-10 shadow-lg text-white'>
    <div class='h-[10vh] max-h-[50px] px-5 py-1 invisible md:visible'>
        <div class='w-[95%] mx-auto h-full flex justify-between gap-4 items-center'>
            <button class='h-full cursor-pointer' href='./page1'>
                <img class='h-full w-auto object-cover' src='https://static.wixstatic.com/media/3c6c17_2a09cf727da143b5bfe24b0ebb6b2c90~mv2.png/v1/fill/w_239,h_50,al_c,lg_1,q_85,enc_avif,quality_auto/3c6c17_2a09cf727da143b5bfe24b0ebb6b2c90~mv2.png' alt='Logo'/>
            </button>
            <div class="flex gap-3 h-full items-center">
                <HrefButton pClass='text-white text-xl' title="About Us" href='./page1'/>
                <HrefButton pClass='text-white text-xl' title="Our Tech" href='./page1'/>
                <HrefButton pClass='text-white text-xl' title="Press"    href='https://www.sortile.co/press'/>
                <HrefButton pClass='text-white text-xl' title="Contact"  href='./page1'/>
            </div>
        </div>
    </div>
</nav>