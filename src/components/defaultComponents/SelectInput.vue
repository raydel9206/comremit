<template>
    <div class="" :class="`relative w-full flex flex-col  ${label !== ''
        ? 'gap-2'
        : ''
        }`" data-te-input-wrapper-init>
        <div class="text-neutral-700 text-base font-semibold">{{ label }}</div>
        <select :disabled="disabled" placeholder="placeholder" :value="model" :onChange=handleChange class="w-full px-3 py-2.5 bg-white border border-zinc-300 
        rounded-lg text-md shadow-sm placeholder-slate-400 text-neutral-600
      focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary
      disabled:bg-greay-200 disabled:text-gray-200 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "></select>
    </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: "SelectInputCmp",
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
        options: {
            type: Array,
            default: []
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emits }) {
        const handleChange = (value) => {
            console.log("value:", value);
        };

        return {
            handleChange
        }
    }
})
</script>

<style></style>