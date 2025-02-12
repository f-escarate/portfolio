import { writable } from "svelte/store";

export const modalData = writable({
    open: false,
    content: null
});
