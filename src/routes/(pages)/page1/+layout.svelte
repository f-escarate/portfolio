<script>
    import './app.css';
    import Navbar from "./components/Navbar.svelte";
    import Footer from './components/Footer.svelte';
</script>

<svelte:head>
    <title>Sortile</title>
    <link rel="icon" href="./favicon2.png" />
</svelte:head>

<div class='relative mb-0 bg-pale scroll-smooth w-full min-h-screen'>
    <Navbar/>
    <slot />
    <Footer/>
</div>