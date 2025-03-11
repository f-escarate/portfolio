<script>
    import NumberCircle from './NumberCircle.svelte';
</script>

<div class="lg:max-w-[50%] min-h-screen py-10 flex flex-col items-center justify-center gap-5 mx-auto text-center">
    <h2 class="font-light text-5xl">We are on a <b class="text-primary">mission</b><br/> to divert textiles from landfills</h2>
    <p class="font-light text-3xl">By providing technology solutions that unlock sustainable opportunities for the industry</p>
    <div class="flex justify-between w-full text-primary">
        <NumberCircle number=92 unit="mm">
            tons of <b>Textile Waste</b> are generated every year
        </NumberCircle>
        <NumberCircle number=80 unit="%">
            of textile waste is <b>Post-Consumer</b> waste
        </NumberCircle>
        <NumberCircle number=1 unit="%">
            of textiles are <b>Recycled</b> into new fibers
        </NumberCircle>
    </div>
</div>