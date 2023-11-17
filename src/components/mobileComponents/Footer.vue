<template>
    <div class="bg-blue-medium w-full">
        <div class="w-full h-24 bg-blue-dark"></div>
        <div class="flex flex-col justify-center items-center gap-8 px-8 py-8">
            <div class="w-full flex flex-col w-1/2 gap-4 justify-center items-center">
                <img src="/img/footer/comremit-logo-gray.svg" />
                <div class="w-full text-neutral-400 text-center text-sm font-normal">
                    Servicio de recargas internacionales de forma fácil, rápida, y segura, con la mejor protección de datos
                    de nuestros clientes.
                </div>
                <div class="w-full flex flex-row gap-4 items-center justify-center">
                    <img src="/img/footer/facebook-icon.svg" />
                    <img src="/img/footer/twitter-icon.svg" />
                </div>
            </div>
            <div class="flex flex-col gap-4 justify-center items-center">
                <div class="text-white text-xl font-bold uppercase tracking-tight">links de ayuda</div>
                <div class="text-neutral-400 text-sm font-bold mt-4">Recargas</div>
                <div class="text-neutral-400 text-sm font-bold">Servicios prepago</div>
                <div class="text-neutral-400 text-sm font-bold">Teléfonos y accesorios</div>
                <div class="text-neutral-400 text-sm font-bold">Términos y condiciones</div>
                <div class="text-neutral-400 text-sm font-bold">Política de privacidad</div>
                <div class="text-neutral-400 text-sm font-bold">Preguntas frecuentes</div>
            </div>
            <div class="flex flex-col gap-4 justify-center items-center">
                <div class=" text-white text-xl font-bold uppercase tracking-tight">Mi cuenta</div>
                    <div class="text-neutral-400 text-sm font-bold mt-4">
                        <button class="hover:text-sky-700 flex flex-row gap-2 items-center"
                        @click="$router.push({ name: 'register' })">
                            Registro
                        </button>
                    </div>
                    <div class="text-neutral-400 text-sm font-bold">
                        <button class="hover:text-sky-700 flex flex-row gap-2 items-center"
                            @click="$router.push({ name: 'account' })">
                            {{$t('account')}}
                        </button>
                    </div>
                    <div class="text-neutral-400 text-sm font-bold cursor-pointer">
                        <button class="hover:text-sky-700 flex flex-row gap-2 items-center"
                            @click="$router.push({ name: 'contact' })">
                            Contactos
                        </button>
                    </div>
                    <div class="text-neutral-400 text-sm font-bold">
                        <button class="hover:text-sky-700 flex flex-row gap-2 items-center"
                            @click="$router.push({ name: 'orders' })">
                            {{$t('orders')}}
                        </button>
                    </div>
                    <div class="text-neutral-400 text-sm font-bold">Cesta</div>
                    <div class="text-neutral-400 text-sm font-bold">Salir</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style></style>