<script>
    import { Dropdown, DropdownItem, DropdownDivider, Button } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    var buttonStyle = 'text-3xl transition-transform hover:scale-125 my-auto px-2'
    export var title = 'Button';
    export var values = [
        {name: 'Home', href: ''},
        {name: 'About', href: 'about'},
        {name: 'Contact', href: 'contact'}
    ];

</script>


<main>
    <Button class={buttonStyle} pill>
        {title}<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
    </Button>    
    <Dropdown class="w-44 z-20">
        {#each values as element, i}
        <DropdownItem href={`?/${element.href}`}>{element.name}</DropdownItem>
        {/each}
    </Dropdown>
</main>