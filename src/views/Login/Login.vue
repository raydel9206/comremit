<template>
    <div class="flex flex-col items-center gap-12 mt-28">
        <div class="flex bg-primary w-full h-32 items-center justify-center">
            <div class="text-stone-100 text-4xl font-bold uppercase tracking-wide">{{ $t('login') }}</div>
        </div>
        <div class="flex flex-col">
            <div class="w-full px-24 pb-2 justify-center items-center inline-flex">
                <div class="w-full text-center text-zinc-800 text-2xl font-bold uppercase tracking-widest">
                    {{ $t('user_access') }}</div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div class="lg:w-80 md:w-80 sm:w-80">
                <Input :label="$t('mail')" type="email" />
            </div>
            <div class="lg:w-80 md:w-80 sm:w-80">
                <Input :label="$t('pass')" type="password" />
            </div>
        </div>
        <div class="flex flex-col gap-2 items-center">
            <div class="text-red-700 text-sm font-bold  leading-normal cursor-pointer hover:opacity-75" @click="$router.push({ name: 'register' })">
               {{$t('no_account')}}
            </div>
            <div class="text-red-700 text-sm font-bold  leading-normal cursor-pointer hover:opacity-75">
               {{$t('forgot_pass')}}
            </div>
        </div>
        <button
            class="flex flex-row gap-2 items-center uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold hover:-translate-y-px  hover:scale-105 duration-500 hover:opacity-75"
            data-te-ripple-init data-te-ripple-color="light">
            {{ $t('login') }}
        </button>
        <div class="w-full flex items-center justify-center">
            <img class="lg:w-1/6  md:w-1/5 sm:w-1/4 lg:-mb-56 md:-mb-48 sm:-mb-44 xs:-mb-24 xs:-mb-16"
                src="/img/common/red-circle.svg" alt="red-circle-icon" />
        </div>
    </div>
</template>

<script>
import Input from "@/components/defaultComponents/Input.vue"
export default {
    name: "Login",
    components: { Input },
    setup() {

    }

}
</script>

<style></style>