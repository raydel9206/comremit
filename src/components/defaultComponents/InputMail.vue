<template>
    <div class="relative w-full flex flex-col gap-2" data-te-input-wrapper-init>
        <div class="text-neutral-700 text-base font-semibold">{{ label }}</div>
        <input type="email" :value="model" :disabled="disabled" :placeholder="placeholder" class="w-full h-12 px-3 py-2.5 bg-white border border-zinc-300 
        rounded-lg text-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary
      disabled:bg-greay-200 disabled:text-gray-200 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    " />
    </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: "InputMailCmp",
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

<style></style>