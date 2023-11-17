<template>
    <div class="fixed w-full flex flex-col z-40">
        <div class="w-full h-12 bg-black-header">
            <div class="flex flex-row gap-8 justify-end">
                <div class="flex flex-row items-center justify-center">
                    <div>
                        <img src="/img/header/language-icon.svg" alt="language-icon" />
                    </div>
                    <button class="flex px-4 gap-2 items-center py-2.5 rounded font-medium text-base uppercase leading-normal text-white  
                        transition duration-150 ease-in-out motion-reduce:transition-none" type="button"
                        id="dropdownMenuButton1" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init
                        data-te-ripple-color="light">
                        Idioma
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
                             active:text-neutral-800 active:no-underline disabled:pointer-events-none 
                             disabled:bg-transparent disabled:text-neutral-400" data-te-dropdown-item-ref>
                                Español
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer block w-full whitespace-nowrap bg-transparent px-4 py-2
                            text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 
                            active:no-underline disabled:pointer-events-none disabled:bg-transparent hover:text-primary
                            disabled:text-neutral-400" data-te-dropdown-item-ref>
                                Inglés
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-between py-4 px-4 bg-white">
            <img class="w-1/2" src="/img/header/comremit-logo.svg" alt="comremit logo" />
            <div class="flex flex-row">
                <button class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase">
                    <img class="w-[65%]" src="/img/header/cart-icon.svg" alt="cart icon" />
                </button>
                <button class="hover:text-sky-700 flex flex-row gap-2 items-center uppercase">
                    <img class="w-[65%]" src="/img/header/profile-icon.svg" alt="profile icon" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: "header",
    setup(){
        const router = useRouter();
    }

}
</script>

<style></style>