<script>
    import Navbar from './Navbar.svelte';
</script>

<main class='h-screen bg-blue-100'>
    <Navbar />
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>