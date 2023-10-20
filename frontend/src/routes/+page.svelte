<script>
    import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
    import Sidebar from './Sidebar.svelte'
    import data from '../data/data.json';
    var home_post = data.home;
</script>

<main class='h-full bg-blue-100 font-mono scroll-smooth'>
    <Header></Header>
    <Navbar css_class='h-[12vh] relative'/>
    <div class='grid grid-flow-col auto-cols-max relative'>
        <Sidebar css_class='h-[88vh]'/>
        <div class='p-4 mx-10 my-5'>
            <h1 class='text-4xl font-bold'>{home_post.title}</h1>
            <div class='my-4 text-l'>
                {home_post.description}
            </div>
        </div>
    </div>
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>