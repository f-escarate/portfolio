<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
  
    let canvas;
  
    onMount(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });
    
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff);

        // Light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-0.6, 0, 2);
        scene.add(light);

    
        // Wave geometry
        const xSize = 25;
        const ySize = 100;
        const xSegments = 80;
        const ySegments = 160;
        const geometry = new THREE.PlaneGeometry(xSize, ySize, xSegments, ySegments);
        const texture = new THREE.TextureLoader().load('./textures/fabric.jpg');
        // assuming you want the texture to repeat in both directions:
        texture.wrapS = THREE.RepeatWrapping; 
        texture.wrapT = THREE.RepeatWrapping;

        // how many times to repeat in each direction; the default is (1,1),
        //   which is probably why your example wasn't working
        const textureXRepeat = 5;
        const textureYRepeat = 10;
        texture.repeat.set( textureXRepeat, textureYRepeat ); 

        const material = new THREE.MeshPhongMaterial({
            map: texture, // Apply the texture
            side: THREE.DoubleSide, // Render both sides of the plane
        });
        const wave = new THREE.Mesh(geometry, material);
        wave.position.y = ySize/2;
        scene.add(wave);
        
        // Camera position
        camera.position.y = 0;
        camera.position.z = 20;
        camera.lookAt(0, 20, 0);
    
        // Animation loop
        const clock = new THREE.Clock();
        const initialPositions = [... wave.geometry.attributes.position.array];
    
        const animate = () => {
           requestAnimationFrame(animate);
    
            const time = clock.getElapsedTime();

            // Update wave vertices
            const positions = wave.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const dy = -(3*time)%textureYRepeat;
                positions[i + 1] = initialPositions[i + 1] + dy;

                const fallingZ = Math.pow(positions[i + 1] / ySize, 2)*60;
                positions[i + 2] = Math.sin(x + time) * Math.cos(positions[i + 1] + time) + fallingZ;
            }    
            wave.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };
    
        animate();
    
        // Handle window resize
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
    
        window.addEventListener('resize', onWindowResize);
    
        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
        };
    });
</script>


    <div class="h-[90vh] relative py-auto flex items-center justify-start overflow-hidden">
        <canvas bind:this={canvas} class="absolute z-[-1]"></canvas>
        <div class="h-min mx-[10%] max-w-[40%] rounded-with-shadow my-auto p-6 bg-secondary text-white">
            <div class="flex flex-col items-start justify-center gap-6">
            
                <h1 class="text-4xl tracking-widest">Making <b>circularity</b> in the fashion industry a reality</h1>
        
                <p class="text-lg">Sortile empowers the textile recycling industry with technology that enables the identification, sorting and traceability of textiles. Maximizing the recovery of valuable materials and connecting the value chain to enhance circularity.</p>
        
            </div>
        </div>
    </div>
    



