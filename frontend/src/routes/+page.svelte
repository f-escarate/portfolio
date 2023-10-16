<script>
    import Navbar from './Navbar.svelte';
    import Sidebar from './Sidebar.svelte'
</script>

<main class='h-screen bg-blue-100'>
    <Navbar css_class='h-[12vh]'/>
    <Sidebar css_class='h-[88vh]'/>
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>