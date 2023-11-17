<template>
    <input
        class="relative float-left h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none
                         before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 
                         before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 
                         after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 
                         checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary 
                         checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer 
                         hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 
                         focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                         focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 
                         checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        type="radio" name="flexRadioDefault" :id="id" />
    <span v-if="span !== ''">
        {{ span }}
    </span>
    <div v-if="icon == true">
        <RatingsFive v-if="ratings === 'five'" />
        <RatingsFour v-if="ratings === 'four'" />
        <RatingsThree v-if="ratings === 'three'" />
        <RatingsTwo v-if="ratings === 'two'" />
    </div>
    <span v-if="spanPost !== ''">
        {{ spanPost }}
    </span>
</template>

<script>
import { defineComponent } from "vue";
import RatingsFive from "@/assets/icons/RatingsFive.vue";
import RatingsFour from "@/assets/icons/RatingsFour.vue";
import RatingsThree from "@/assets/icons/RatingsThree.vue";
import RatingsTwo from "@/assets/icons/RatingsTwo.vue";
export default defineComponent({
    name: "Check",
    components: { RatingsFive, RatingsFour, RatingsThree, RatingsTwo },
    props: {
        id: {
            type: String,
            default: ""
        },
        span: {
            type: String,
            default: ""
        },
        ratings: {
            type: String,
            default: ""
        },
        spanPost: {
            type: String,
            default: ""
        },
        icon: {
            type: Boolean,
            default: false
        }
    }
});
</script>

<style></style>