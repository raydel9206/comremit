<template>
  <div class="flex flex-col mt-28">
    <div class="flex bg-primary w-full h-32 items-center justify-center">
      <div class="text-stone-100 text-4xl font-normal uppercase tracking-wide text-center">{{ $t('orders_register') }}</div>
    </div>
    <div
      class="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col xs:px-4 xs:gap-y-8 py-16 justify-center lg:gap-16 md:gap-16 sm:gap-16">
      <div>
        <div class="font-semibold text-lg uppercase px-6">
          {{ $t('orders') }}
        </div>

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <div id="datatable" data-te-selectable="true" data-te-multi="false" data-te-max-height="520"
                  :data-te-no-Found-Message="$t('no_result')" data-te-hover="true" data-te-fixed-header="true"
                  :data-te-rows-text="$t('rows_per_page')">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-80 md:w-80 sm:w-72  border-2 gap-4 p-8">
        <div v-if="!selected">
          <Sk_order />
        </div>
        <div v-else class="flex flex-col gap-4">
          <div class="text-zinc-800 text-xl font-bold uppercase tracking-widest">
            Orden {{ order_data.order_number }}
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-zinc-400 text-base font-thin  uppercase">
              {{ $t('fact_number') }}
            </div>
            <div class="text-zinc-400 text-sm font-thin leading-normal">00219898</div>
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-zinc-400 text-base font-thin  uppercase">
              {{$t('order_create')}}
            </div>
            <div class="text-zinc-400 text-sm font-thin leading-normal">{{order_data.order_create}} hrs</div>
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-zinc-400 text-base font-thin  uppercase">
              {{$t('order_update')}}
            </div>
            <div class="text-zinc-400 text-sm font-thin leading-normal">{{order_data.order_update}} hrs</div>
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-zinc-400 text-base font-thin  uppercase">
              {{$t('order_deliver')}}
            </div>
            <div class="text-zinc-400 text-sm font-thin leading-normal">{{order_data.order_deliver}} hrs</div>
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-zinc-400 text-base font-thin  uppercase">
              {{$t('beneficiary')}}
            </div>
            <div class="text-zinc-400 text-sm font-thin leading-normal">+53 48756985</div>
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-zinc-400 text-base font-thin  uppercase">
              {{$t('product')}}
            </div>
            <div class="text-zinc-400 text-sm font-thin leading-normal">Recarga cubacel Bono promocional</div>
            <div class="text-zinc-600 text-sm font-bold leading-normal">500 CUP + Bono(1 GB + 50 MIN + 50 SMS)</div>
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-zinc-400 text-base font-thin  uppercase">
              {{$t('paid')}}
            </div>
            <div class="text-zinc-400 text-sm font-thin leading-normal">19.50</div>
          </div>

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
import { useI18n } from "vue-i18n";
import {
  Datatable,
  initTE,
} from "tw-elements";
import Sk_order from '@/components/skeletons/sk_order.vue';
export default {
  name: "orders",
  components: { Input, Sk_order },
  setup() {
    const datatable = ref();
    const selected = ref("");
    const { t } = useI18n({ useScope: "global" });


    const order_data = reactive({
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

    const clickRow = (e) => {
      selected.value = data.rows[e.selectedIndexes] ?? "";
      order_data.id = selected.value.id;
      order_data.order_number = selected.value.order_number;
      order_data.order_create = selected.value.order_create;
      order_data.order_update = selected.value.order_update;
      order_data.order_deliver = selected.value.order_deliver;
    };

    const data = (
      {
        columns: [
          { label: t('order_number'), field: "order_number" },
          { label: t('order_create'), field: "order_create" },
          { label: t('order_update'), field: "order_update" },
          { label: t('order_deliver'), field: "order_deliver" },
        ],
        rows: [
          {
            id: 1,
            order_number: "A0121",
            order_create: "12/02/2021",
            order_update: "13/02/2021",
            order_deliver: "14/02/2021",
          },
          {
            id: 2,
            order_number: "A0180",
            order_create: "12/02/2021",
            order_update: "13/02/2021",
            order_deliver: "14/02/2021",
          },
          {
            id: 3,
            order_number: "A0230",
            order_create: "12/02/2021",
            order_update: "13/02/2021",
            order_deliver: "14/02/2021",
          },
          {
            id: 4,
            order_number: "A0264",
            order_create: "12/02/2021",
            order_update: "13/02/2021",
            order_deliver: "14/02/2021",
          },
          {
            id: 5,
            order_number: "A0351",
            order_create: "12/02/2021",
            order_update: "13/02/2021",
            order_deliver: "14/02/2021",
          },
        ]
      }
    );

    onMounted(() => {
      document.getElementById("datatable").addEventListener("selectRows.te.datatable", (e) => clickRow(e));
      datatable.value = new Datatable(
        document.getElementById("datatable"),
        data
      );
    });

    return {
      selected,
      datatable,
      textForm,
      order_data,
      textBtn
    }
  }

}
</script>

<style></style>