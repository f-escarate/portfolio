<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from '../components/Header.svelte';
    import Navbar from '../components/Navbar.svelte';
</script>
<svelte:head>
    <title>Portafolio Felipe Escárate F.</title>
</svelte:head>
<div class='relative mb-0 bg-pale font-roboto scroll-smooth w-full'>
    <Header/>
    <Navbar/>
    <slot />
    <Footer/>
</div>