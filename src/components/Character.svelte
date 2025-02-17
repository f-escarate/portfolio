<script>
    import { onMount } from "svelte";

    let eyes;
    onMount(() => {
        document.body.onpointermove = event => {
            const { clientX, clientY } = event;
            const { x, y } = eyes.getBoundingClientRect();
            
            const xRatio = (clientX-x) / window.innerWidth;
            const yRatio = (clientY-y) / window.innerHeight;
            const x2 = xRatio * 10;
            const y2 = yRatio * 8;

            eyes.animate({
                left: `${x2}px`,
                bottom: `-${y2}px`
            
            }, {duration: 100, fill: "forwards"})
        }
    });
    let hover = false;
    const playSound = () => {
        const audio = new Audio("./character/hi.mp3");
        audio.play();
    }
</script>
<style>
    @keyframes eyebrow-movement {
        0%, 46%, 50%, 54% {
            transform: translateY(0);
        }
        48%, 52% {
            transform: translateY(-1%);
        }
    }
    .eyebrow-animation {
        animation: eyebrow-movement 15s infinite;
    }

    @keyframes blink {
        0%, 30%, 34% {
            transform: translateY(0%) scaleY(100%);
            max-height: 999999px;
        }
        32% {
            transform: translateY(-6%) scaleY(0%);
            max-height: 0px;
        }
    }
    .blink-animation {
        animation: blink 10s infinite;
    }

    .char-shadow {
        filter: brightness(0) blur(10px);
        opacity: 0.75;
    }
    button:hover .char-shadow {
        filter: brightness(0) blur(10px);
        opacity: 0.9;
        transition-duration: 300ms;
    }

</style>

<button class="hidden md:block fixed bottom-0 right-0 z-[100] w-1/6 h-full cursor-grab" on:click={playSound}
    on:mouseenter={() => hover = true} on:mouseleave={() => hover = false}>
    <img class="w-full absolute bottom-[-15px] right-[-5px] char-shadow" src="./character/base.svg" alt="Character" />
    <img class="w-full absolute bottom-0" src="./character/base.svg" alt="Character" />
    <img class="w-full absolute bottom-0 blink-animation" src="./character/eyes.svg" alt="Eyes" bind:this={eyes}/>
    <img class="w-full absolute bottom-0" src={hover? "./character/openMouth.svg": "./character/mouth.svg"} alt="Mouth" />
    <img class="w-full absolute bottom-0 eyebrow-animation" src="./character/eyebrows.svg" alt="Eyebrows" />
</button>