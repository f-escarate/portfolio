<script>
    import HrefButton from "../../../../components/HrefButton.svelte";
</script>

<footer>
    <div class='px-6 py-2 w-[95%] mx-auto h-full'>
        <div class="my-2 flex justify-between gap-2 items-center">
            <button class='h-full cursor-pointer' href="./">
                <img class='h-full w-auto object-cover' src='https://static.wixstatic.com/media/3c6c17_2a09cf727da143b5bfe24b0ebb6b2c90~mv2.png/v1/fill/w_239,h_50,al_c,lg_1,q_85,enc_avif,quality_auto/3c6c17_2a09cf727da143b5bfe24b0ebb6b2c90~mv2.png' alt='Logo'/>
            </button>
            <div class="flex gap-3 h-full items-center">
                <HrefButton pClass='text-white text-lg' title="About Us" href=''/>
                <HrefButton pClass='text-white text-lg' title="Our Tech" href='https://www.sortile.co/press'/>
                <HrefButton pClass='text-white text-lg' title="Press"    href=''/>
                <HrefButton pClass='text-white text-lg' title="Contact"  href=''/>
            </div>
        </div>
        <div class='my-4 flex justify-between items-center text-white'>
            <p>
                © Sortile Inc. 2025.
            </p>
            <div class="flex gap-6 items-center">
                <p>Follow us:</p>
                <a href="https://www.instagram.com/sortile.co/" target="_blank" rel="noopener noreferrer"> 
                    <img alt="instagram" src="https://static.wixstatic.com/media/3c6c17_a8ff442a49064c5e95ac9f2b3c01e317~mv2.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3c6c17_a8ff442a49064c5e95ac9f2b3c01e317~mv2.png"/>
                </a>
                <a href="https://www.linkedin.com/company/sortile" target="_blank" rel="noopener noreferrer">
                    <img alt="linkedin" src="https://static.wixstatic.com/media/3c6c17_434db9dc63d54b24a81c9b9678c1ed69~mv2.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3c6c17_434db9dc63d54b24a81c9b9678c1ed69~mv2.png"/>
                </a>
            </div>
    
        </div>
    </div>
</footer>