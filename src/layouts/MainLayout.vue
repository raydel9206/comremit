<script setup>
import FooterWeb from '@/components/webComponents/Footer.vue';
import FooterMobile from '@/components/mobileComponents/Footer.vue';
import HeaderWeb from '@/components/webComponents/Header.vue';
import HeaderMovil from '@/components/mobileComponents/Header.vue';

import { useGlobalStore } from '@/store/global';
const storeGlobal = useGlobalStore();
</script>

<template>
    <div class="w-full flex flex-col inline-flex">
        <HeaderWeb v-if="!storeGlobal.isScreemSm" />
        <HeaderMovil v-else />
        <div>
            <main>
                <router-view />
            </main>
        </div>
        <FooterWeb v-if="!storeGlobal.isScreemSm" />
        <FooterMobile v-else />
    </div>
</template>