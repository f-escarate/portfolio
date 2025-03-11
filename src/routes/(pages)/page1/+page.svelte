<script>
    import Fabric from './components/Fabric.svelte';
    import Medals from './components/Medals.svelte';
    import Mission from './components/Mission.svelte';
</script>
<div class="flex flex-col">
    <Fabric />
    <Mission />
    <Medals />
    <div class="flex flex-col gap-6 items-start w-[85%] mx-auto py-12">
        <h2 class="text-3xl font-light">press</h2>
        <p class="text-5xl font-bold text-primary pl-5">Read the threads</p>
        <a class="my-2 bg-primary rounded-3xl font-semibold text-white p-2 px-5"
        href="https://www.sortile.co/press" target="_blank" rel="noopener noreferrer">
            See more
        </a>
    </div>
</div>