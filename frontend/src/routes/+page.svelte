<script>
    import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
    import Section from './Section.svelte';
</script>

<main class='h-full relative mb-0 bg-blue-100 font-mono scroll-smooth'>
    <Header></Header>
    <Navbar css_class='h-[12vh] w-full sticky top-0 z-10'/>
    <div class='relative'>
        <Section name='webdev'></Section>
        <Section name='games'></Section>
        <Section name='ML'></Section>
        <Section name='IoT'></Section>
        <Section name='contact'></Section>
    </div>
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>