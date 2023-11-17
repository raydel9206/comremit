<template>
  <div class="flex flex-col">
    <CarouselWeb v-if="!storeGlobal.isScreemSm" :promotions="promotions" />
    <CarouselMobile v-else :promotions="promotions" />
    <div class="flex justify-center lg:px-80 md:px-40 sm:px-12 xs:px-4">
      <div class="w-full grid sm:grid-cols-4
                  xs:grid-cols-2 gap-6 items-center border-b-4 border-primary lg:py-32 md:py-32 sm:py-32 xs:py-20 ">
        <!--Mobile -->
        <div
          class="bg-gray-card flex  flex-col relative bg-gray-card border justify-between p-4  hover:bg-zinc-200 hover:shadow-sm cursor-pointer">
          <div class="w-full h-60 flex justify-center flex-col gap-4 items-center">
            <div class="w-[15%]">
              <img class="w-full h-full" src="/img/common/recharge-icon.svg" alt="recharge-icon" />
            </div>
            <div class="flex flex-col text-center">
              <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">línea móvil</div>
              <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normalbg-gray-card leading-relaxed">Añadir saldo
              </div>
            </div>
            <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase font-bold text-14px ">
              Recargar
            </button>
          </div>
        </div>
        <!-- Recharge -->
        <div
          class="bg-gray-card flex  flex-col relative bg-gray-card border justify-between p-4  hover:bg-zinc-200 hover:shadow-sm cursor-pointer">
          <div class="w-full h-60 flex justify-center flex-col gap-4 items-center">
            <div class="w-1/3">
              <img class="w-full h-full" src="/img/services/bonus-recharge-icon.svg" alt="recharge-icon" />
            </div>
            <div class="flex flex-col text-center">
              <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">recarga</div>
              <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normalbg-gray-card leading-relaxed">Con bono
                promocional</div>
            </div>
            <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase">
              Comprar
            </button>
          </div>
        </div>
        <!-- Packaje -->
        <div
          class="bg-gray-card flex  flex-col relative bg-gray-card border justify-between p-4  hover:bg-zinc-200 hover:shadow-sm cursor-pointer">
          <div class="w-full h-60 flex justify-center flex-col gap-4 items-center">
            <div class="w-1/4">
              <img class="w-full h-full" src="/img/services/combined-plan-icon.svg" alt="combined-plan-icon" />
            </div>
            <div class="flex flex-col text-center">
              <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">PAQUETE</div>
              <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normalbg-gray-card leading-relaxed">Combinado
                para
                móviles</div>
            </div>
            <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase">
              Comprar
            </button>
          </div>
        </div>
        <!-- Mi transfer -->
        <div
          class="bg-gray-card flex flex-col relative bg-gray-card border justify-between p-4  hover:bg-zinc-200 hover:shadow-sm cursor-pointer">
          <div class="w-full h-60 flex justify-center flex-col gap-4 items-center">
            <div class="w-1/4">
              <img class="w-full h-full" src="/img/services/fixed-line-icon.svg" alt="sim-icon" />
            </div>
            <div class="flex flex-col text-center">
              <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">Bolsa mi transfer
              </div>
              <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normalbg-gray-card leading-relaxed">Recargar
                mondero</div>
            </div>
            <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase">
              Comprar
            </button>
          </div>
        </div>
        <!-- Cubacel tour -->
        <div
          class="bg-gray-card flex flex-col relative bg-gray-card border justify-between p-4  hover:bg-zinc-200 hover:shadow-sm cursor-pointer">
          <div class="w-full h-60 flex justify-center flex-col gap-4 items-center">
            <div class="w-1/6">
              <img class="w-full h-full" src="/img/common/sim-icon.svg" alt="recharge-icon" />
            </div>
            <div class="flex flex-col text-center">
              <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">Cubacel tour</div>
              <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normalbg-gray-card leading-relaxed">Activación
                de servicio
              </div>
            </div>
            <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase">
              Recargar
            </button>
          </div>
        </div>
        <!-- Internet -->
        <div
          class="bg-gray-card flex  flex-col relative bg-gray-card border justify-between p-4  hover:bg-zinc-200 hover:shadow-sm cursor-pointer">
          <div class="w-full h-60 flex justify-center flex-col gap-4 items-center">
            <div class="w-1/4">
              <img class="w-full h-full" src="/img/services/internet-icon.svg" alt="internet-icon" />
            </div>
            <div class="flex flex-col text-center">
              <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">Nauta hogar +
              </div>
              <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normalbg-gray-card leading-relaxed">Cuenta de
                usuario</div>
            </div>
            <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase">
              Recargar
            </button>
          </div>
        </div>
        <!-- internet data  -->
        <div
          class="bg-gray-card flex  flex-col relative bg-gray-card border justify-between p-4   hover:bg-zinc-200 hover:shadow-sm cursor-pointer">
          <div class="w-full h-60 flex justify-center flex-col gap-4 items-center">
            <div class="w-1/4">
              <img class="w-full h-full" src="/img/services/data-plan-icon.svg" alt="recharge-icon" />
            </div>
            <div class="flex flex-col text-center">
              <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">Internet</div>
              <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normalbg-gray-card leading-relaxed">Paquete
                datos
                móviles</div>
            </div>
            <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row font-bold text-4xl text-center justify-center items-end pt-12">¿ QUIÉNES SOMOS ?</div>
    <div
      class="relative flex flex-col w-full lg:py-28 md:py-32 sm:py-20 xs:py-20 lg:px-80 md:px-40 sm:px-12 xs:px-4 items-center justify-center gap-8">
      <img class="absolute md:w-1/4 lg:w-1/6 sm:w-1/4 xs:w-2/3" src="/img/aboutUs/logo-border.svg" alt="recharge-icon" />
      <div class="w-full text-center text-zinc-800 lg:text-2xl md:text-1xl sm:text-xl font-normal leading-9">
        COMREMIT es una vía FÁCIL, RÁPIDA y SEGURA para enviar recargas, comprar
        <br />activadores de servicio celular prepago, terminales móviles y accesorios.
        <br />Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        <br />diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        <br />volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
        <br />suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </div>
    </div>
    <div class="flex flex-col lg:px-80 md:px-40 sm:px-12 xs:px-4 items-center">
      <div class="w-full flex flex-col gap-12 border-t-4 border-primary py-32 items-center justify-center">
        <div class="flex-col justify-center items-center inline-flex">
          <div
            class="w-full text-center text-zinc-800 lg:text-5xl md:text-3xl sm:text-xl xs:text-xl font-bold uppercase tracking-widest">
            somos una web confiable</div>
          <div
            class="w-full  text-center text-zinc-800l lg:text-5xl md:text-3xl sm:text-xl xs:text-xl font-bold uppercase tracking-widest">
            no
            pierdas tiempo</div>
        </div>
        <button
          class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold">
          registrate ahora
        </button>
      </div>
      <img class="w-1/3 lg:-mb-80 md:-mb-72 sm:-mb-60 xs:-mb-24" src="/img/common/red-circle.svg" alt="red-circle-icon" />
    </div>
  </div>
</template>

<script>
import CarouselWeb from '@/components/webComponents/Carousel.vue'
import CarouselMobile from '@/components/mobileComponents/Carousel.vue'
import { useGlobalStore } from '@/store/global';
import { useStaticStore } from '@/store/static';
import {
  Ripple,
  initTE,
  Dropdown,
} from "tw-elements";
import { computed, onMounted } from 'vue';
export default {
  components: { CarouselWeb, CarouselMobile },
  setup() {
    const storeGlobal = useGlobalStore();
    const storeStatic = useStaticStore();
    
    const promotions = computed(()=>{
      return storeStatic.promotions
    })

    onMounted(() => {
      initTE({ Ripple, Dropdown, });
    })

    return {
      promotions,
      storeGlobal
    }
  }
}
</script>

<style></style>