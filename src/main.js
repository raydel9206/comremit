import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import { createPinia } from 'pinia'
import {Vue3Mq} from "vue3-mq";
import i18n from "./plugins/i18n";
import VueTelInput from 'vue3-tel-input'
import './vue-tel-input.css'
import Vue3CountryIntl from 'vue3-country-intl';
// import css
import 'vue3-country-intl/lib/vue3-country-intl.css'
const VueTelInputOptions = {
    onlyCountries: ["CU","ECU", "NIC"],
    mode: 'nacional',
    autoFormat: false,
    dropdownOptions: {
        showDialCodeInSelection: true,
        showSearchBox: true,
    },
    inputOptions: {
        placeholder: '',
        autocomplete: 'off',
    },
}
const app = createApp(App);
app.use(VueTelInput,VueTelInputOptions);
app.component(Vue3CountryIntl.name, Vue3CountryIntl);
const pinia = createPinia();
app.use(i18n);
app.use(router);
app.use(pinia);
app.use(Vue3Mq);
app.mount("#app");
