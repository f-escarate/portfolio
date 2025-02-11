<script>
    import { Tooltip, Button } from "flowbite-svelte";
    export let tooltip;
</script>
<div class="inline-flex items-center">
    <Button size="xs" class="bg-primary text-white text-xl px-1 py-0">
        {tooltip.name}
    </Button>
    <Tooltip class="flex flex-col gap-1 p-2 text-lg bg-primary">
        {tooltip.description}
    </Tooltip>
</div>