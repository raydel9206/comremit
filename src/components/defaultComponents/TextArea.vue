<template>
    <div class="w-full relative">
        <div class="text-neutral-700 text-base font-semibold">{{ label }}</div>
        <textarea
          :value="model"
          :disabled="disabled"
          :placeholder="placeholder"
          class="w-full h-36 px-5 py-3.5 bg-white rounded-[10px] border border-zinc-100"
        ></textarea>
    </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: "TextAreaCmp",
    props: {
        label: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        model: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emits }) {

    }
})
</script>
