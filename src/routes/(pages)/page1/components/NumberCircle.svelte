<script>
    import { onMount } from "svelte";

    export let number;
    export let unit;
    let circle;
    let text;
    let visibleNumber = 0;

    const increaseCounter = () => {
        let t = 0;
        let maxT = 350; //ms
        const dt = 40;
        const interval = setInterval(() => {
            t += dt;
            visibleNumber = Math.floor(number * t / maxT);

            if (visibleNumber >= number) {
                visibleNumber = number;
                clearInterval(interval);
            }
        }, dt);
    }

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-appear")
                    increaseCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // use the viewport as the root
            rootMargin: '0px',
            threshold: 0.75, // change this value as needed, 0.5 means when 50% of the element is visible
        });


        observer.observe(circle);
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in")
                    textObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null, // use the viewport as the root
            rootMargin: '0px',
            threshold: 1, // change this value as needed, 0.5 means when 50% of the element is visible
        });

        textObserver.observe(text);
    });

</script>
<div class='flex flex-col items-center gap-2'>
    <div bind:this={circle} class="scale-0 w-48 h-48 rounded-full bg-primary text-white flex items-center justify-center">
        {#if number}
            <p class="text-6xl font-bold">{visibleNumber}</p>
            <p class="text-6xl">{unit}</p>
        {/if}
    </div>
    <div class="opacity-0" bind:this={text}>
        <slot></slot>
    </div>
</div>
