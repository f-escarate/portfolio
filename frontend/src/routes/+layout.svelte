<script>
    import "../app.css";
    import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
</script>
<div class='relative mb-0 bg-blue-100 font-roboto scroll-smooth'>
    <Header></Header>
    <Navbar css_class='h-[12vh] w-full sticky top-0 z-10'/>
    <slot />
</div>