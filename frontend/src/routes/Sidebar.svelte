<script>
    import { Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    import { GithubSolid, LinkedinSolid, FilterSolid } from 'flowbite-svelte-icons';
    import { MultiSelect } from 'flowbite-svelte';
    export var css_class = '';

    let selected = [];
    let filters = [
        { value: 'rc', name: 'React' },
        { value: 'svt', name: 'Svelte' },
        { value: 'tw', name: 'Tailwind CSS' },
        { value: 'dj', name: 'Django' },
        { value: 'sql', name: 'SQL' }
    ];
</script>

<Sidebar class={css_class}>
    <SidebarWrapper class='h-full'>
        <SidebarGroup>
            <SidebarDropdownWrapper label="Filters" isOpen>
                <svelte:fragment slot="icon">
                  <FilterSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <SidebarDropdownItem label="i1" />
                <SidebarDropdownItem label="i2" />
                <SidebarDropdownItem label="i3" />
                <MultiSelect items={filters} bind:value={selected} size="lg" />
              </SidebarDropdownWrapper>
          </SidebarGroup>

        <SidebarGroup border>
            <SidebarItem label="Github" href="https://github.com/f-escarate" target="_blank" rel="noopener noreferrer">
            <svelte:fragment slot="icon">
                <GithubSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="LinkedIn" href="https://www.linkedin.com/in/felipe-esc%C3%A1rate-793380152/" target="_blank" rel="noopener noreferrer">
                <svelte:fragment slot="icon">
                <LinkedinSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
        </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>