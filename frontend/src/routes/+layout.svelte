<script>
    import "../app.css";
    import Header from '../components/Header.svelte';
    import Navbar from '../components/Navbar.svelte';
</script>
<div class='relative mb-0 bg-blue-100 font-roboto scroll-smooth'>
    <Header/>
    <Navbar/>
    <slot />
</div>