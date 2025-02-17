<script>
    import Section from '../components/Section.svelte';
    import data from '../data/data.json'
    import experience from '../data/experience.json'
    import education from '../data/education.json'
</script>

<div class='flex flex-col mx-4 items-start lg:items-center w-[100%]'>
    <Section id='experience' data={experience}/>
    <Section id='education'  data={education}/>
    <Section id='projects'   data={data['projects']}/>
    <Section id='games'      data={data['games']}/>
    <!-- <Section name='ML'></Section> -->
</div>