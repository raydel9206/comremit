<template>
    <div class="fixed flex flex-col z-40 w-full">
        <div class="flex w-full bg-black-header h-8 lg:px-60 md:px-28 sm:px-12 items-center justify-between">
            <div class="w-full flex flex-row items-center justify-end ">
                <div>
                    <img src="/img/header/language-icon.svg" alt="language-icon" />
                </div>
                <button class="flex p-2 gap-2 items-center rounded font-medium text-base uppercase leading-normal text-white  
                        transition duration-150 ease-in-out motion-reduce:transition-none" type="button"
                    id="dropdownMenuButton1" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init
                    data-te-ripple-color="light">
                    {{$t('language')}}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                            <path
                                d="M1.9136 0.0600586L6.88997 5.02313L11.8663 0.0600586L13.395 1.58799L6.88997 8.08983L0.384918 1.58799L1.9136 0.0600586Z"
                                fill="white" />
                        </svg>
                    </div>
                </button>
                <ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg 
                    border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
                    <li>
                        <a class="cursor-pointer block w-full whitespace-nowrap bg-transparent px-4 py-2
                             text-md font-normal text-neutral-700 hover:bg-neutral-100 hover:text-primary
                             active:text-primary active:no-underline disabled:pointer-events-none 
                             disabled:bg-transparent disabled:text-neutral-400" data-te-dropdown-item-ref @click="emitedSelLang('es')">
                            {{$t('spanish')}}
                        </a>
                    </li>
                    <li>
                        <a class="cursor-pointer block w-full whitespace-nowrap bg-transparent px-4 py-2
                            text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-primary 
                            active:no-underline disabled:pointer-events-none disabled:bg-transparent hover:text-primary
                            disabled:text-neutral-400" data-te-dropdown-item-ref @click="emitedSelLang('en')">
                            {{$t('english')}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex lg:px-60 md:px-28 sm:px-12 py-4 justify-between bg-white shadow-md">
            <div>
                <img class="w-3/4" src="/img/header/comremit-logo.svg" alt="comremit logo" />
            </div>
            <div class="flex flex-row lg:gap-10 md:gap-8 sm:gap-2">
                <button class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase" @click="$router.push({name: 'recharge'})">
                    <img src="/img/common/recharge-icon.svg" alt="recharge-icon" />
                    {{ $t('recharges') }}
                </button>
                <button class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase">
                    <img src="/img/header/shop-icon.svg" alt="shop icon" />
                    {{ $t('nauta') }}
                </button>
                <button class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase">
                    <img class="w-[15%]" src="/img/common/sim-icon.svg" alt="sim-icon" />
                    {{$t('cubacel_tour')}}
                </button>
            </div>
            <div v-if="isLogin" class="flex flex-row gap-2">
                <button class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase">
                    <img src="/img/header/cart-icon.svg" alt="cart icon" />
                </button>
                <button class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase">
                    <img src="/img/header/profile-icon.svg" alt="profile icon" />
                </button>
            </div>
            <div v-else>
                <button
                    class="flex flex-row gap-2 items-center uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold hover:-translate-y-px  hover:scale-105 duration-500 hover:opacity-75" 
                    data-te-ripple-init data-te-ripple-color="light" @click="$router.push({name: 'login'})">
                    {{$t('login')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Ripple,
    initTE,
    Dropdown,
} from "tw-elements";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from 'vue';
export default {
    name: 'Header',
    setup() {
        const isLogin = ref(false);
        const { locale } = useI18n({ useScope: "global" });
        onMounted(() => {
            initTE({ Ripple, Dropdown, });
        });

        const emitedSelLang = (lang) => {
            switch (lang) {
                case "en":
                    locale.value = 'en'
                    break;
                case "es":
                    locale.value = 'es'
                    break;
                default:
                    locale.value = 'es'
                    break;
            }
        };

        return {
            isLogin,
            emitedSelLang
        }
    }
}
</script>

<style></style>