<template>
    <Carousel class="mt-28">
        <slide v-for="(promotion, i) in promotions" :key="i">
            <div class="w-full justify-center items-center inline-flex bg-blue-sky px-4">
                <div class="flex flex-col items-end">
                    <img class="w-full h-full"
                    :src="promotion.screens[storeGlobal.screen].traslate_img[locale]" />
                </div>
            </div>
        </slide>
    </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, defineComponent } from 'vue'
import { useGlobalStore } from '@/store/global';
import { useI18n } from "vue-i18n";
export default defineComponent({
    name: "CarouselMobile",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        promotions: {
            type: Array,
            default: []
        }
    },
    setup() {
        const storeGlobal = useGlobalStore();
        const { locale } = useI18n({ useScope: "global" });
        return {
            locale,
            storeGlobal
        }
    },
})
</script>

<style></style>