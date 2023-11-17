<template>
    <div class="flex flex-col items-center gap-12 mt-28">
        <div class="flex bg-primary w-full h-32 items-center justify-center">
            <div class="text-stone-100 text-4xl font-bold uppercase tracking-wide">{{ $t('register') }}</div>
        </div>
        <div class="flex flex-col">
            <div class="w-full px-24 pb-2 justify-center items-center inline-flex">
                <div class="w-full text-center text-zinc-800 text-2xl font-bold uppercase tracking-widest">
                    {{ $t('register_data') }}</div>
            </div>
        </div>

        <div class="lg:grid md:grid sm:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-12 xs:flex xs:flex-col">
            <div class="flex flex-col gap-6 ">
                <div class="w-full xs:px-4">
                    <Input :label="$t('name')" />
                </div>
                <div class="w-full xs:px-4">
                    <Input :label="$t('mail')" type="email" />
                </div>
                <div class="w-full xs:px-4">
                    <Input :label="$t('phone_number')" type="email" />
                </div>
                <div v-if="!storeGlobal.isScreemSm" class="flex flex-row gap-2 xs:px-4">
                    <CheckBox/>
                    <div class="text-zinc-800 text-sm font-thin leading-normal">
                        Acepto que las promociones se envíen al correo<br />electrónico y/o teléfono que utilizo para mi
                        registro en<br />la plataforma
                    </div>
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
                <div class="flex flex-row gap-2 xs:px-4">
                    <CheckBox/>
                    <div class="w-full h-20 relative ">
                        <div class="xs:text-sm left-0 top-[3px] absolute text-zinc-800 text-sm font-thin leading-normal">
                            He leído y acepto los
                        </div>
                        <div
                            class="xs:text-sm left-[143.27px] top-[2px] ml-2 absolute text-red-700 text-base font-bold  leading-normal">
                            términos y condiciones,
                        </div>
                        <div class="xs:text-sm left-0 top-[27px] absolute"><span
                                class="text-zinc-800 text-sm font-thin  leading-normal">así como la
                                política de seguridad del sitio<br /></span><span
                                class="text-zinc-800 text-base font-normal  leading-normal">COMREMIT</span>
                        </div>
                    </div>
                </div>
                <div v-if="storeGlobal.isScreemSm" class="flex flex-row gap-2 xs:px-4">
                    <CheckBox/>
                    <div class="text-zinc-800 text-sm font-thin leading-normal">
                        Acepto que las promociones se envíen al correo<br />electrónico y/o teléfono que utilizo para mi
                        registro en<br />la plataforma
                    </div>
                </div>
            </div>
        </div>
        <button
            class="flex flex-row gap-2 items-center uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold hover:-translate-y-px  hover:scale-105 duration-500 hover:opacity-75"
            data-te-ripple-init data-te-ripple-color="light">
            {{ $t('regist') }}
        </button>
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
export default {
    name: "Register",
    components: { Input,CheckBox },
    setup() {
        const storeGlobal = useGlobalStore();

        return{
            storeGlobal
        }
    }

}
</script>

<style></style>