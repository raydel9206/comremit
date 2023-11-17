<template>
    <div class="flex flex-col items-center gap-12 mt-28">
        <div class="flex bg-primary w-full h-32 items-center justify-center">
            <div class="text-stone-100 text-4xl font-bold uppercase tracking-wide">{{ $t('account') }}</div>
        </div>
        <div class="flex flex-col">
            <div class="w-full px-24 pb-2 justify-center items-center inline-flex">
                <div class="w-full text-center text-zinc-800 text-2xl font-bold uppercase tracking-widest">
                    {{ $t('personal_information') }}</div>
            </div>
        </div>

        <div class="lg:w-7/12 md:w-7/12 sm:w-7/12 xs:w-11/12 lg:grid md:grid sm:grid lg:grid-cols-2 md:grid-cols-2
            sm:grid-cols-2 lg:gap-12 md:gap-12 sm:gap-12 xs:gap-6 xs:flex xs:flex-col">
            <div class="flex flex-col gap-6  ">
                <div class="w-full xs:px-4">
                    <Input :label="$t('name')" />
                </div>
                <div class="w-full xs:px-4">
                    <Input :label="$t('mail')" type="email" />
                </div>
                <div class="w-full xs:px-4">
                    <Input :label="$t('phone_number')" type="email" />
                </div>
            </div>
            <div class="flex flex-col gap-6">
                <div class="w-full xs:px-4">
                    <Input :label="$t('country')" />
                </div>
                <div class="w-full xs:px-4">
                    <Input :label="$t('pass')" type="password" />
                </div>
                <div class="w-full xs:px-4 ">
                    <Input :label="$t('pass_confirm')" type="password" />
                </div>
            </div>
        </div>

        <div class="lg:grid md:grid sm:grid xs:flex xs:flex-col lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-12 mt-12 xs:px-8">
            <div class="flex flex-col gap-4">
                <div class="text-zinc-800 text-2xl font-bold uppercase tracking-widest">configuración de pagos</div>
                <div class="text-zinc-800 text-base font-thin uppercase">seleccione método de pago</div>
                <div class="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col xs:gap-4 xs:justify-start xs:items-start
                            lg:justify-between md:justify-between sm:justify-between">
                    <div class="flex justify-center items-center gap-1">
                        <CheckBox label="Tarjeta de crédito" />
                    </div>
                    <div  class="flex justify-center items-center gap-1">
                        <CheckBox label="Presaldo anticipado" />
                    </div>
                </div>
            </div>

            <div class="flex flex-col inline-flex border-2 items-start p-8 gap-4 lg:mt-28 md:mt-28 sm:mt-28">
                <div class="font-semibold text-lg uppercase">
                    Nueva Tarjeta
                </div>
                <Input label= "Nombre y apellidos del titular"/>
                <Input label= "Número de tarjeta" />
                <div class="flex-col justify-center items-center inline-flex">Fecha de caducidad</div>
                <div class="w-full grid grid-cols-3 gap-2">
                    <div>
                        <SelectInput/>
                    </div>
                    <div>
                        <SelectInput/>
                    </div>
                    <div>
                        <SelectInput/>
                    </div>
                </div>
                <div class="w-full mt-8 flex flex-row justify-center items-center">
                    <button
                        class="hover:text-sky-700 flex flex-row gap-2 uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold">
                       Agregar
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <img class="lg:w-1/6  md:w-1/5 sm:w-1/4 lg:-mb-56 md:-mb-48 sm:-mb-44 xs:-mb-24 xs:-mb-16"
                src="/img/common/red-circle.svg" alt="red-circle-icon" />
        </div>
    </div>
</template>

<script>
import Input from "@/components/defaultComponents/Input.vue"
import CheckBox from '@/components/defaultComponents/CheckBox.vue'
import { useGlobalStore } from '@/store/global';
import SelectInput from '@/components/defaultComponents/SelectInput.vue';
export default {
    name: "Account",
    components: { Input, CheckBox, SelectInput },
    setup() {
        const storeGlobal = useGlobalStore();

        return {
            storeGlobal
        }
    }

}
</script>

<style></style>