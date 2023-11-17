<template>
    <div class="flex flex-col mt-28">
        <div class="flex bg-primary w-full h-32 items-center justify-center">
            <div class="text-stone-100 text-4xl font-normal uppercase tracking-wide">contactos</div>
        </div>
        <div
            class="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col xs:px-4 xs:gap-y-8 py-16 justify-center lg:gap-16 md:gap-16 sm:gap-16">
            <div>
                <div class="font-semibold text-lg uppercase px-6">
                    {{ $t('contact_list') }}
                </div>

                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <div id="datatable" data-te-selectable="true" data-te-multi="false" data-te-max-height="520"
                                    :data-te-no-Found-Message="$t('no_result')" data-te-hover="true"
                                    data-te-fixed-header="true" :data-te-rows-text="$t('rows_per_page')">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col inline-flex border-2 items-start p-8 gap-4">
                <div class="font-semibold text-lg uppercase">
                    {{ textForm }}
                </div>
                <Input :label= "$t('name')" :model="cont_data_form.name" />
                <Input :label= "$t('country')"  :model="cont_data_form.country" />
                <Input :label= "$t('phone')" :model="cont_data_form.phone" />
                <Input :label="$t('email_internet')" :model="cont_data_form.email" />
                <Input :label="$t('landline_phone')" :model="cont_data_form.fixed_phone" />
                <div class="w-full mt-8 flex flex-row justify-end items-end">
                    <button
                        class="hover:text-sky-700 flex flex-row gap-2 uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold">
                        {{textBtn}}
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <img class="w-1/4 lg:-mb-96 md:-mb-64 sm:-mb-56 xs:-mb-24 xs:-mb-16" src="/img/common/red-circle.svg"
                alt="red-circle-icon" />
        </div>
    </div>
</template>

<script>
import Input from "@/components/defaultComponents/Input.vue"
import { computed, onMounted, reactive, ref } from 'vue'
import { useStaticStore } from '@/store/static'
import { useI18n } from "vue-i18n";
import {
    Datatable,
    initTE,
} from "tw-elements";
export default {
    name: "Contact",
    components: { Input },
    setup() {
        const storeStatic = useStaticStore();
        const datatable = ref();
        const selected = ref("");
        const { t } = useI18n({ useScope: "global" });
        const contacts = computed(() => {
            return storeStatic.contacts
        });

        const cont_data_form = reactive({
            id: "",
            name: "",
            phone: "",
            fixed_phone: "",
            country: "",
            email: "",
        })

        const textForm = computed(() => {
            return selected.value == "" ? t("add_contact") : t("update_contact")
        });
       
        const textBtn = computed(() => {
            return selected.value == "" ? t("add_btn") : t("update_btn")
        });


        const setActions = () => {
            document.querySelectorAll(".del-btn").forEach((btn) => {
                btn.addEventListener("click", () => {
                    console.log(`del ${btn.attributes["data-te-number"].value}`);
                });
            });
        };

        const clickRow = (e) => {
            selected.value = data.rows[e.selectedIndexes] ?? "";
            cont_data_form.id = selected.value.id;
            cont_data_form.name = selected.value.name;
            cont_data_form.phone = selected.value.phone;
            cont_data_form.fixed_phone = selected.value.fixed_phone;
            cont_data_form.country = selected.value.country;
            cont_data_form.email = selected.value.email;
        };

        const data = (
            {
                columns: [
                    { label: t('name'), field: "name" },
                    { label: t('phone_number'), field: "phone" },
                    { label: t('mail'), field: "email" },
                    { label: t('favorite'), field: "favorite", sort: false },
                    { label: "", field: "delete", sort: false },
                ],
                rows: [
                    {
                        id: 1,
                        name: "Tiger Nixon",
                        phone: "+48 0000000",
                        fixed_phone: "+48 77512478",
                        country: "Cuba",
                        email: "tiger.nixon@gmail.com",
                    },
                    {
                        id: 2,
                        name: "Sonya Frost",
                        phone: "+53 456123456",
                        fixed_phone: "+48 77526699",
                        country: "Cuba",
                        email: "sfrost@gmail.com",
                    },
                    {
                        id: 3,
                        name: "Tatyana Fitzpatrick",
                        phone: "+42 123432456",
                        fixed_phone: "+48 72262491",
                        country: "Cuba",
                        email: "tfitz@gmail.com",
                    },
                    {
                        name: "Tatyana Fitzpatrick",
                        phone: "+42 123432456",
                        fixed_phone: "+48 72262491",
                        country: "Cuba",
                        email: "tfitz@gmail.com",
                    },
                ].map((row) => {
                    return {
                        ...row,
                        favorite: `
                         <a role="button" class="star-button text-warning" data-te-index="${row}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d9000d" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                         </svg>
                        </a>`,
                        delete: `
                        <button
                        type="button"
                        data-te-ripple-init
                        data-te-number=${row.phone}
                        class="del-btn inline-block rounded-full  p-1.5 mr-1 uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg ">
                            <path
                                d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5H13.66M9.5 12.5H14.5"
                                stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`,
                    };
                }),
            }
        );

        onMounted(() => {
            document.getElementById("datatable").addEventListener("render.te.datatable", setActions);
            document.getElementById("datatable").addEventListener("selectRows.te.datatable", (e) => clickRow(e));
            datatable.value = new Datatable(
                document.getElementById("datatable"),
                data
            );
        });

        return {
            contacts,
            selected,
            datatable,
            textForm,
            cont_data_form,
            textBtn
        }
    }
}
</script>

<style></style>