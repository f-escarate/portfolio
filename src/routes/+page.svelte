<script>
    import Section from '../components/Section.svelte';
    import data from '../data/data.json'
</script>

<div class='flex flex-col items-center w-[100%]'>
    <Section id='experience' data={data['experience']}/>
    <Section id='projects'   data={data['projects']}/>
    <Section id='games'      data={data['games']}/>
    <!-- <Section name='ML'></Section> -->
</div>