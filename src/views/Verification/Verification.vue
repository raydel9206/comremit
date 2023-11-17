<template>
    <div class="flex flex-col items-center gap-12 mt-28">
        <div class="flex bg-primary w-full h-32 items-center justify-center">
            <div class="text-stone-100 text-4xl font-normal uppercase tracking-wide">entrar</div>
        </div>
        <div class="flex flex-col">
            <div class="w-full px-24 pb-2 justify-center items-center inline-flex">
                <div class="w-full text-center text-zinc-800 text-2xl font-bold uppercase tracking-widest">
                    Bienvenido nombre usuario</div>
            </div>
    
            <div class="w-full h-11 text-center text-zinc-400 text-base font-thin uppercase leading-normal">
                Inserte el código de verificación<br />recibido en su correo
            </div>
        </div>
        <div>
            <Input />
        </div>
        <div class="h-4 text-center text-red-700 text-sm font-bold ">Volver a enviar código</div>
        <button
            class="hover:text-sky-700 flex flex-row gap-2 uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold">
            entrar
        </button>
        <div class="w-full flex items-center justify-center">
            <img class="w-1/4 lg:-mb-96 md:-mb-64 sm:-mb-56 xs:-mb-24 xs:-mb-16" src="/img/common/red-circle.svg"
                alt="red-circle-icon" />
        </div>
    </div>
</template>

<script>
import Input from "@/components/defaultComponents/Input.vue"
export default {
    name: "Verification",
    components: { Input },
    setup() {

    }

}
</script>

<style></style>