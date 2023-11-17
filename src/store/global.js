import { defineStore } from 'pinia'
import { computed } from 'vue';
import { useMq } from "vue3-mq";

export const useGlobalStore = defineStore('global', () => {
    const mq = useMq();
    const isScreemSm = computed(() => {
        return ['xs', 'sm', 'md'].includes(mq.current);
    });

    const screen = computed(()=>{
        return mq.current
    })

    return {
        isScreemSm,
        screen,
    };
});