<script>
    import { Timeline, TimelineItem } from 'flowbite-svelte';
    import Description from '../Description/Description.svelte';
    export let elements;
  </script>
  
  <Timeline class="border-s-[4px] border-secondary">
    {#each elements as element}
        <TimelineItem title={element.title} date={element.date} 
          classDiv="bg-primary w-4 h-4 -start-2.5" 
          classTime="text-primary italic text-lg"
          classH3="text-3xl font-bold text-dark"
          >
          <Description data={element.descriptionData}/>
        </TimelineItem>
    {/each}
  </Timeline>