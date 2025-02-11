<script>
    import { Timeline, TimelineItem } from 'flowbite-svelte';
    export let elements;
  </script>
  
  <Timeline>
    {#each elements as element}
        <TimelineItem title={element.title} date={element.date}>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">{element.description}</p>
        </TimelineItem>
    {/each}
  </Timeline>