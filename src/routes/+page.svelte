<script>
    import { Modal } from "flowbite-svelte";
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from '../components/Header.svelte';
    import Navbar from '../components/Navbar.svelte';
    import { modalData } from "../stores.js";
    import Character from "../components/Character.svelte";
    import Section from '../components/Section.svelte';
    import data from '../data/data.json'
    import experience from '../data/experience.json'
    import education from '../data/education.json'
    
    let modalContent = null;
    let modalVisible = false;
    modalData.subscribe(({open, content}) => {modalVisible = open; modalContent = content;});
    $: modalVisible, modalData.set({
        open: modalVisible,
        content: modalContent
    });

</script>
<svelte:head>
    <title>Portafolio Felipe Escárate F.</title>
</svelte:head>
<div class='relative mb-0 bg-pale font-roboto scroll-smooth w-full'>
    <Header/>
    <Navbar/>
    <div class='flex flex-col px-4 lg:p-0 items-start lg:items-center w-[100%]'>
        <Section id='experience' data={experience}/>
        <Section id='education'  data={education}/>
        <Section id='projects'   data={data['projects']}/>
        <Section id='games'      data={data['games']}/>
        <!-- <Section name='ML'></Section> -->
    </div>
    <Footer/>

    <Character />
    <Modal bind:open={modalVisible} autoclose outsideclose>
        {#if modalContent}
        <img src={modalContent.src} alt={modalContent.alt} class='rounded-3xl object-contain min-h-[70vh] max-h-[70vh] mx-auto'/>
        {/if}
    </Modal>
</div>