<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from '../components/Header.svelte';
    import Navbar from '../components/Navbar.svelte';
</script>
<div class='relative mb-0 bg-blue-100 font-roboto scroll-smooth w-full'>
    <Header/>
    <Navbar/>
    <slot />
    <Footer/>
</div>