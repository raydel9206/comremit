<template>
  <div class="flex flex-col mt-28">
    <div
      :class="`flex flex-col bg-primary w-full items-center justify-center gap-8 ${phoneCountry ? 'pt-20 pb-44' : 'py-16'}  `">
      <div class="text-stone-100 text-4xl font-bold uppercase tracking-wide text-center">{{ $t('recharges') }}</div>
      <div class="w-72">
        <Vue3CountryIntl v-model="phoneCountry" :useChinese="false" :placeholder="$t('country_destiny')"
          @onChange="goTo(2)" :noDataText="$t('empty_placeholder')"></Vue3CountryIntl>
      </div>
    </div>
    <div v-if="activeStep == 1">
      <div class="flex flex-col lg:px-80 md:px-40 sm:px-12 xs:px-4 py-8 gap-6">
        <div class="flex flex row justify-between items-center">
          <div class="flex justify-start items-start font-semibold text-lg uppercase cursor-pointer"
            @click="showRecent = !showRecent">
            {{ $t('frecuents_contacts') }}
          </div>
          <img v-if="showRecent" class="lg:w-[4%] md:w-[5%] sm:w-[6%] xs:w-[10%] cursor-pointer rotate"
            src="/img/contacts/arrow_down.svg" alt="down-icon" @click="showRecent = false" />
          <img v-else class="lg:w-[4%] md:w-[5%] sm:w-[6%] xs:w-[10%] cursor-pointer rotate-180"
            src="/img/contacts/arrow_down.svg" alt="up-icon" @click="showRecent = true" />
        </div>
        <div v-if="showRecent"
          class="xs:flex lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 sm:grid sm:grid-cols-5 xs:flex-col justify-start items-center gap-8 ">
          <div v-for="(item, index) in favorites" :key="index"
            class="xs:w-full bg-gray-card flex flex-col relative bg-gray-card border justify-between p-4 hover:bg-zinc-200 hover:shadow-sm cursor-pointer hover:border-primary ">
            <div class="w-full flex justify-center flex-col gap-4 items-center">
              <div class="flex flex-col text-center">
                <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">{{ item.name }}
                </div>
                <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normal bg-gray-card leading-relaxed">{{
                  item.phone_number }}
                </div>
              </div>
              <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase font-bold">
                Recargar
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex row justify-between items-center">
          <div class="flex justify-start items-start font-semibold text-lg uppercase cursor-pointer"
            @click="showContacts = !showContacts">
            {{ $t('contact_list') }}
          </div>
          <img v-if="showContacts" class="lg:w-[4%] md:w-[5%] sm:w-[6%] xs:w-[10%] cursor-pointer rotate"
            src="/img/contacts/arrow_down.svg" alt="down-icon" @click="showContacts = false" />
          <img v-else class="lg:w-[4%] md:w-[5%] sm:w-[6%] xs:w-[10%] cursor-pointer rotate-180"
            src="/img/contacts/arrow_down.svg" alt="up-icon" @click="showContacts = true" />
        </div>
        <div v-if="showContacts" class="flex flex-col gap-4">
          <div class="lg:w-1/4 md:w-1/4 smw-1/4 xs:w-full flex flex-col gap-2">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="search" class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 
              bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none
              transition duration-200 ease-in-out focus:z-[3] focus:border-2 focus:border-primary focus:text-neutral-700 
              focus:outline-none" placeholder="Buscar contacto..." aria-label="Search"
                aria-describedby="button-addon1" />
              <!--Search button-->
              <button
                class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="xs:flex lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 sm:grid sm:grid-cols-5 xs:flex-col justify-start items-center gap-8 ">
            <div v-for="(item, index) in contacts" :key="index"
              class="xs:w-full bg-gray-card flex flex-col relative bg-gray-card border justify-between p-4 hover:bg-zinc-200 hover:shadow-sm cursor-pointer hover:border-primary">
              <div class="w-full flex justify-center flex-col gap-4 items-center">
                <div class="flex flex-col text-center">
                  <div class="w-full bg-gray-cardtext-zinc-800 text-xl font-bold uppercase tracking-widest">{{ item.name
                  }}
                  </div>
                  <div class="w-full bg-gray-cardtext-zinc-500 text-base font-normal bg-gray-card leading-relaxed">{{
                    item.phone_number }}
                  </div>
                </div>
                <button class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase font-bold">
                  Recargar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-16 py-16">
          <div class="h-8 text-center text-zinc-800 text-[26px] font-bold tracking-widest">RECARGA DE FORMA FÁCIL</div>
          <div class="flex flex-row gap-8 items-center justify-start">
            <div class="flex flex-col items-center">
              <img src="/img/common/easy-recharge.svg" alt="easy-recharge" />
              <div class="pl-[43.70px] pr-[43.32px] pb-[6.80px] flex-col justify-start items-center inline-flex">
                <div class="text-center text-zinc-800 text-[26px] font-bold uppercase tracking-widest">
                  Seleccione pais</div>
                <div class="text-center text-zinc-800 text-[26px] font-bold uppercase tracking-widest">
                  y tipo de recarga</div>
              </div>
              <div class="text-center text-zinc-800 text-sm font-thin leading-normal">De las ofertas disponibles, escoja
                la<br />de su preferencia</div>
            </div>
            <div class="flex items-center">
              <img src="/img/common/next-arrow.svg" alt="next-arrow" />
            </div>
            <div class="flex flex-col items-center">
              <img src="/img/common/addressee.svg" alt="addressee" />
              <div class="pl-[43.70px] pr-[43.32px] pb-[6.80px] flex-col justify-start items-center inline-flex">
                <div class="text-center text-zinc-800 text-[26px] font-bold uppercase tracking-widest">
                  Inserte</div>
                <div class="text-center text-zinc-800 text-[26px] font-bold uppercase tracking-widest">
                  destinatario</div>
              </div>
              <div class="text-center text-zinc-800 text-sm font-thin leading-normal">Teclee el número de teléfono (
                usuario
                si es<br />cuenta de internet) o selecciónelo entre sus<br />contactos creados en su perfil</div>
            </div>
            <div class="flex items-center">
              <img src="/img/common/next-arrow.svg" alt="next-arrow" />
            </div>
            <div class="flex flex-col items-center">
              <img src="/img/common/payment.svg" alt="payment" />
              <div class="pl-[43.70px] pr-[43.32px] pb-[6.80px] flex-col justify-start items-center inline-flex">
                <div class="text-center text-zinc-800 text-[26px] font-bold uppercase tracking-widest">
                  Realice</div>
                <div class="text-center text-zinc-800 text-[26px] font-bold uppercase tracking-widest">
                  el pago</div>
              </div>
              <div class="text-center text-zinc-800 text-sm font-thin leading-normal">Escoja uno de los
                métodos<br />disponibles en nuestra plataforma.</div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-center">
          <img class="w-1/4 lg:-mb-60 md:-mb-52 sm:-mb-48 xs:-mb-24 xs:-mb-16" src="/img/common/red-circle.svg"
            alt="red-circle-icon" />
        </div>
      </div>
    </div>
    <div v-if="activeStep === 2">
      <div
        class="-mt-44 lg:grid md:grid sm:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 py-8 xs:flex xs:flex-col xs:gap-4 lg:px-[25%] md:px-40 sm:px-12 lg:justify-center lg:items-center gap-16">
        <div class="flex flex-col justify-center items-center xs:px-4">
          <div class="bg-white flex lg:flex-col md:flex-col sm:flex-col xs:flex-row xs:w-full cursor-pointer
            relative border border-zinc-200 justify-between items-center p-4 gap-4 border-2 hover:border-primary">
            <div class="xs:flex xs:flex-col items-center gap-2">
              <div
                class="text-center text-zinc-800 lg:text-xl md:text-xl sm:text-lg font-bold tracking-widest xs:text-md">
                CUBACEL</div>
              <img src="/img/common/recharge-icon.svg" alt="recharge-icon" />
              <div
                class="text-center text-zinc-800 lg:text-xl md:text-xl sm:text-lg font-bold tracking-widest xs:text-md">
                Linea Movil</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <button
                class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase font-bold lg:text-base md:text-base sm:text-base xs:text-sm">
                Recarga ahora
              </button>
              <div
                class=" text-center text-zinc-500 lg:text-base md:text-base sm:text-base xs:text-sm font-normal leading-relaxed">
                Sin Bono promocional</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center xs:px-4">
          <div
            class="bg-white flex lg:flex-col md:flex-col sm:flex-col xs:flex-row xs:w-full cursor-pointer 
            relative border border-zinc-200 justify-between items-center xs:px-4 p-4 gap-4 border-2 hover:border-primary">
            <div class="xs:flex xs:flex-col items-center gap-2">
              <div
                class="text-center text-zinc-800 lg:text-xl md:text-xl sm:text-lg font-bold tracking-widest xs:text-md">
                CUBACEL</div>
              <img src="/img/common/recharge-icon.svg" alt="recharge-icon" />
              <div
                class="text-center text-zinc-800 lg:text-xl md:text-xl sm:text-lg font-bold tracking-widest xs:text-md">
                Linea Movil</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <button
                class="hover:text-sky-700 text-red-700 flex flex-row gap-2 items-center uppercase font-bold lg:text-base md:text-base sm:text-base xs:text-sm">
                Recarga ahora
              </button>
              <div
                class=" text-center text-zinc-500 lg:text-base md:text-base sm:text-base xs:text-sm font-normal leading-relaxed">
                Sin Bono promocional</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center xs:px-4">
          <div
            class="bg-white flex lg:flex-col md:flex-col sm:flex-col xs:flex-row xs:w-full cursor-pointer
            relative border border-zinc-200 justify-between items-center p-4 sm:p-4 gap-4 border-2 hover:border-primary">
            <div class="xs:flex xs:flex-col items-center gap-2">
              <div
                class="text-center text-zinc-800 lg:text-xl md:text-xl sm:text-lg font-bold tracking-widest xs:text-md">
                CUBACEL</div>
              <img src="/img/common/recharge-icon.svg" alt="recharge-icon" />
              <div
                class="text-center text-zinc-800 lg:text-xl md:text-xl sm:text-lg font-bold tracking-widest xs:text-md">
                Linea Movil</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <button
                class="hover:text-sky-700 text-red-700 flex flex-row gap-2 font-bold items-center uppercase lg:text-base md:text-base sm:text-base xs:text-sm">
                Recarga ahora
              </button>
              <div
                class=" text-center text-zinc-500 lg:text-base md:text-base sm:text-base xs:text-sm font-normal leading-relaxed">
                Sin Bono promocional</div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 lg:px-96 md:px-40 sm:px-12 py-12 gap-4">
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
          <div class="text-zinc-800 text-xl font-thin uppercase">reciben 500 cup</div>
          <div class="w-full text-center text-zinc-800 text-xl font-bold border-b-2 broder-black pb-2">+ 3 GB + 60 MIN
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal uppercase">
              pagas </div>
            <div class="top-0 text-red-700 text-lg font-normal uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal  uppercase">
              23.49 usd</div>
          </div>
        </div>
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
          <div class="text-zinc-800 text-xl font-thin uppercase">reciben 1000 cup</div>
          <div class="w-full text-center text-zinc-800 text-xl font-bold border-b-2 broder-black pb-2 ">+ 6 GB + 120 MIN
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal uppercase">
              pagas </div>
            <div class="top-0 text-red-700 text-lg font-normal uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal uppercase">
              44.49 usd</div>
          </div>
        </div>
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 border-green-primary hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
          <div class="text-zinc-800 text-xl font-thin uppercase">reciben 1500 cup</div>
          <div class="flex flex-row gap-2 border-b-2 broder-black pb-2">
            <div class="flex items-center justify-center w-10 h-8 rounded-full bg-green-primary">
              <svg width="20" height="20" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.689451 24.6559C0.433337 24.5339 0.359229 24.3295 0.360022 24.051C0.366792 20.4263 0.364414 16.8024 0.364414 13.1777C0.364414 12.7127 0.505981 12.5727 0.97466 12.5727C2.3921 12.5727 3.81021 12.5892 5.22686 12.5652C5.91195 12.5532 6.43522 12.7674 6.7655 13.4016C8.37239 12.9815 9.92597 12.4484 11.282 11.475C11.7432 11.1441 12.1646 10.7421 12.5429 10.3182C13.1305 9.65935 13.3806 8.85672 13.3851 7.97018C13.3873 7.64971 13.3971 7.31126 13.4967 7.01184C13.773 6.17323 14.664 5.6588 15.5146 5.79805C16.4056 5.94413 17.0367 6.67112 17.1019 7.57036C17.2232 9.25203 17.0315 10.8873 16.4589 12.4761C16.4513 12.4963 16.4543 12.5203 16.4497 12.5727H16.6991C17.7377 12.5727 18.7754 12.572 19.8131 12.5727C20.7483 12.5727 21.4986 13.1365 21.6969 13.9878C21.9059 14.8803 21.4933 15.7227 20.6427 16.1375L20.5252 16.1952C20.8216 16.7088 20.9123 17.2419 20.7251 17.8035C20.5379 18.365 20.1538 18.7453 19.596 18.9775C19.8925 19.4964 19.9816 20.0294 19.7959 20.591C19.6102 21.1548 19.2201 21.53 18.7319 21.7411C18.8105 22.1034 18.9347 22.4427 18.9475 22.7863C18.9782 23.6444 18.401 24.3744 17.5715 24.6028C17.5213 24.6163 17.4733 24.638 17.4239 24.6559H10.9623C10.8401 24.6402 10.7188 24.623 10.5961 24.6095C10.2434 24.5683 9.88407 24.5571 9.53805 24.4837C8.67852 24.3003 7.82497 24.0862 6.9677 23.893C6.88688 23.875 6.7408 23.887 6.71231 23.9356C6.49225 24.3138 6.15379 24.5212 5.75623 24.6559H0.689451ZM6.87181 14.3689V14.6385C6.87181 17.2875 6.87486 19.9358 6.86577 22.5849C6.86516 22.8163 6.91744 22.9121 7.15263 22.975C8.67931 23.3861 10.2126 23.7328 11.8068 23.7253C13.5498 23.7178 15.293 23.7282 17.036 23.726C17.5999 23.7253 18.0228 23.3232 18.0267 22.8013C18.0304 22.2735 17.6006 21.8721 17.0226 21.8676C16.6039 21.8653 16.1855 21.8684 15.7668 21.8669C15.4412 21.8661 15.2442 21.6939 15.2398 21.4117C15.2352 21.1173 15.4329 20.9392 15.7722 20.9384C16.5006 20.9377 17.2284 20.9414 17.9569 20.9377C18.5343 20.9347 18.9633 20.5274 18.9566 19.9988C18.9491 19.4731 18.5319 19.0845 17.9621 19.0793C17.5362 19.0756 17.1101 19.0801 16.6841 19.0777C16.3637 19.0763 16.1674 18.8966 16.169 18.6106C16.1706 18.3268 16.3674 18.1508 16.6909 18.1501C17.4194 18.1486 18.1472 18.1516 18.8756 18.1486C19.4574 18.1463 19.885 17.751 19.8856 17.2209C19.8872 16.6923 19.4582 16.294 18.878 16.291C18.4601 16.2879 18.0416 16.2917 17.6231 16.2887C17.5474 16.2879 17.4665 16.2842 17.3962 16.2595C17.1812 16.1831 17.0645 15.966 17.1027 15.7384C17.1394 15.5206 17.3236 15.364 17.5653 15.3625C18.3238 15.3588 19.0831 15.3663 19.8424 15.3595C20.5087 15.3528 20.9475 14.7822 20.7715 14.1675C20.6532 13.7565 20.284 13.5019 19.7944 13.5019C17.8266 13.5004 15.859 13.5019 13.8913 13.5011C13.5731 13.5004 13.3769 13.3155 13.3799 13.0294C13.3837 12.7539 13.5776 12.575 13.8831 12.5735C14.324 12.5705 14.7659 12.5667 15.2076 12.5757C15.3506 12.5787 15.4337 12.5465 15.4802 12.4005C15.561 12.1429 15.6695 11.8944 15.7505 11.6368C16.1614 10.3264 16.2295 8.97871 16.1606 7.61976C16.1518 7.4513 16.0813 7.26929 15.9907 7.12413C15.7766 6.78268 15.364 6.64941 14.974 6.7617C14.5929 6.87253 14.3263 7.22446 14.3105 7.64746C14.2986 7.9642 14.3166 8.28387 14.2814 8.59829C14.1405 9.848 13.4974 10.8274 12.5824 11.6465C11.4392 12.6708 10.0853 13.3237 8.65003 13.8201C8.06907 14.0215 7.47456 14.1847 6.87181 14.3689ZM1.30122 23.7268H1.53172C2.79344 23.7268 4.05578 23.7275 5.31744 23.7268C5.78319 23.7268 5.9419 23.5658 5.9419 23.0948C5.94269 20.1073 5.94269 17.119 5.9419 14.1308C5.9419 13.6606 5.78386 13.5019 5.31585 13.5019C4.05352 13.5011 2.79198 13.5011 1.52952 13.5019C1.45529 13.5019 1.38051 13.5086 1.30122 13.5124V23.7268Z"
                  fill="white" />
                <path
                  d="M5.76523 24.662C6.16011 24.5273 6.49611 24.32 6.71471 23.9421C6.74312 23.8935 6.88808 23.8816 6.96827 23.8995C7.81975 24.0925 8.66742 24.3066 9.52108 24.4899C9.86459 24.5632 10.2215 24.5745 10.5717 24.6156C10.6937 24.6291 10.8141 24.6463 10.9353 24.662H5.76523Z"
                  fill="white" />
                <path
                  d="M15.7015 2.40246C15.7015 2.739 15.7038 3.07626 15.7009 3.41359C15.6986 3.71299 15.5191 3.90568 15.2468 3.9087C14.9721 3.91094 14.7838 3.71969 14.7824 3.42464C14.7793 2.73525 14.7793 2.04581 14.7824 1.35642C14.7838 1.06137 14.9721 0.870181 15.2474 0.873079C15.5205 0.875314 15.6986 1.06729 15.7009 1.36832C15.7038 1.71295 15.7015 2.05776 15.7015 2.40246Z"
                  fill="white" />
                <path
                  d="M13.108 4.59435C13.0146 4.70798 12.9323 4.8606 12.8062 4.95035C12.6498 5.06106 12.4502 5.03638 12.3127 4.90319C11.8409 4.44623 11.3739 3.98404 10.9215 3.50831C10.7526 3.33034 10.7893 3.07079 10.9582 2.90025C11.1271 2.72978 11.3887 2.68932 11.5659 2.8576C12.0466 3.31615 12.5116 3.79108 12.9742 4.26747C13.0378 4.33334 13.0505 4.4477 13.108 4.59435Z"
                  fill="white" />
                <path
                  d="M17.8223 5.04968C17.7064 4.95329 17.5477 4.86731 17.4557 4.73499C17.3474 4.5788 17.378 4.38066 17.5125 4.24243C17.9652 3.77745 18.4222 3.31625 18.8918 2.8685C19.0713 2.6966 19.3279 2.72267 19.5013 2.88568C19.6824 3.05459 19.7227 3.3252 19.547 3.51056C19.0945 3.9868 18.6248 4.44569 18.1543 4.90318C18.0887 4.96742 17.9756 4.98465 17.8223 5.04968Z"
                  fill="white" />
                <path
                  d="M10.5868 6.70099C10.8854 6.70178 11.1839 6.69809 11.4825 6.7025C11.7648 6.70624 11.9544 6.88778 11.9587 7.15088C11.9639 7.42509 11.772 7.61774 11.4795 7.62004C10.8824 7.62293 10.2854 7.62293 9.6883 7.62004C9.39117 7.61853 9.20011 7.43324 9.20084 7.15897C9.20156 6.88633 9.39274 6.70473 9.6912 6.70178C9.98967 6.69876 10.2883 6.70099 10.5868 6.70099Z"
                  fill="white" />
                <path
                  d="M19.9018 6.70164C20.2001 6.70164 20.4988 6.69795 20.7974 6.70236C21.078 6.70604 21.2663 6.89139 21.2692 7.15521C21.2714 7.42049 21.0848 7.61694 20.8084 7.61911C20.1958 7.62358 19.584 7.62358 18.9714 7.61911C18.6951 7.61694 18.5083 7.42049 18.5113 7.15521C18.5135 6.89066 18.7017 6.70604 18.9831 6.70236C19.2892 6.69795 19.5951 6.70164 19.9018 6.70164Z"
                  fill="white" />
                <path
                  d="M4.08092 19.5243C4.08092 18.9338 4.08013 18.3433 4.08158 17.7527C4.08225 17.4336 4.25818 17.24 4.54084 17.2393C4.82345 17.2393 5.00083 17.4336 5.00083 17.7527C5.00228 18.9486 5.00301 20.1453 5.00083 21.3413C5.00083 21.6536 4.81305 21.8495 4.52972 21.8436C4.25891 21.8384 4.08304 21.6455 4.08158 21.342C4.07935 20.7358 4.08092 20.1305 4.08092 19.5243Z"
                  fill="white" />
                <path
                  d="M5.0018 15.831C4.99671 16.0935 4.78933 16.289 4.52441 16.2817C4.26288 16.2749 4.07028 16.0652 4.07997 15.7991C4.08881 15.5463 4.28881 15.3582 4.54537 15.3604C4.80859 15.3619 5.00628 15.5663 5.0018 15.831Z"
                  fill="white" />
              </svg>
            </div>
            <div class="w-full text-center text-zinc-800 text-xl font-bold">+ 9 GB + 180 MIN
            </div>
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal uppercase">
              pagas </div>
            <div class="top-0 text-red-700 text-lg font-normal uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal uppercase">
              64.50 usd</div>
          </div>
        </div>
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
          <div class="text-zinc-800 text-xl font-thin uppercase">reciben 2000 cup</div>
          <div class="w-full text-center text-zinc-800 text-xl font-bold border-b-2 broder-black pb-2 ">+ 12 GB + 240 MIN
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal uppercase">
              pagas </div>
            <div class="top-0 text-red-700 text-lg font-normal uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal uppercase">
              84 usd</div>
          </div>
        </div>
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
          <div class="text-zinc-800 text-xl font-thin uppercase">reciben 500 cup</div>
          <div class="w-full text-center text-zinc-800 text-xl font-bold border-b-2 broder-black pb-2">+ 3 GB + 60 MIN
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal uppercase">
              pagas </div>
            <div class="top-0 text-red-700 text-lg font-normal uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal uppercase">
              23.49 usd</div>
          </div>
        </div>
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
          <div class="text-zinc-800 text-xl font-thin uppercase">reciben 1000 cup</div>
          <div class="w-full text-center text-zinc-800 text-xl font-bold border-b-2 broder-black pb-2 ">+ 6 GB + 120 MIN
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal uppercase">
              pagas </div>
            <div class="top-0 text-red-700 text-lg font-normal uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal uppercase">
              44.49 usd</div>
          </div>
        </div>
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
          <div class="text-zinc-800 text-xl font-thin uppercase">reciben 1500 cup</div>
          <div class="w-full text-center text-zinc-800 text-xl font-bold border-b-2 broder-black pb-2 ">+ 9 GB + 180 MIN
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal uppercase">
              pagas </div>
            <div class="top-0 text-red-700 text-lg font-normal uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal uppercase">
              64.50 usd</div>
          </div>
        </div>
        <div
          class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between justify-between">
          <div class="text-zinc-800 text-xl font-thin  uppercase">reciben 2000 cup</div>
          <div class="w-full text-center text-zinc-800 text-lg font-bold border-b-2 broder-black pb-2 ">+ 12 GB + 240 MIN
          </div>
          <div class="relative flex flex-row gap-1">
            <div class="text-red-700 text-lg font-normal  uppercase">
              pagas </div>
            <div class="top-0  text-red-700 text-lg font-normal  uppercase">
              $</div>
            <div class="text-red-700 text-lg font-normal  uppercase">
              84 usd</div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row justify-end lg:px-96 md:px-40 sm:px-12 py-8">
        <button @click="goTo(3)"
          class="hover:bg-primary flex flex-row gap-2 uppercase bg-primary_lite py-2.5 px-4 text-white text-xl font-bold">
          Enviar recarga
        </button>
      </div>
    </div>
    <div v-if="activeStep === 3">
      <div class="text-center text-zinc-800 text-2xl font-bold uppercase tracking-widest py-8">resumen</div>
      <div class="flex flex-row gap-2 lg:px-96 md:px-40 sm:px-12 py-8">
        <div class="flex flex-col w-1/2 gap-8">
          <div class="flex flex-col gap-2">
            <div class="w-full flex flex-row justify-between">
              <div class="font-normal text-neutral-700 uppercase">País:</div>
              <div class="font-normal text-neutral-700 uppercase">Cuba</div>
            </div>
            <div class="w-full flex flex-row justify-between">
              <div class="font-normal text-neutral-700 uppercase">Operador:</div>
              <div class="font-normal text-neutral-700 uppercase">Nauta Plus</div>
            </div>
            <div class="w-full flex flex-row justify-between">
              <div class="font-normal text-neutral-700 uppercase">Destinatario:</div>
              <div class="font-normal text-neutral-700 uppercase">+53 58541615</div>
            </div>
          </div>
          <div class="w-full flex flex-row justify-between">
            <div class="font-normal uppercase text-zinc-600">
              Oferta seleccionada:
            </div>
            <div
              class="w-1/2 bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
              <div class="text-zinc-800 text-xl font-thin uppercase">reciben 500 cup</div>
              <div class="w-full text-center text-zinc-800 text-xl font-bold border-b-2 broder-black pb-2">+ 3 GB + 60 MIN
              </div>
              <div class="relative flex flex-row gap-1">
                <div class="text-red-700 text-lg font-normal uppercase">
                  pagas </div>
                <div class="top-0 text-red-700 text-lg font-normal uppercase">
                  $</div>
                <div class="text-red-700 text-lg font-normal  uppercase">
                  23.49 usd</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center gap-4">
          <div
            class="bg-gray-100 flex flex-col items-center p-4 gap-2 border-2 hover:shadow-sm cursor-pointer hover:border-green-primary justify-between">
            <div class="text-zinc-800 text-xl font-thin uppercase">Total a pagar</div>
            <div class="text-red-700 text-lg font-normal  uppercase">
              $ 23.49 usd</div>
            <button @click="goTo(4)"
              class="hover:bg-primary flex flex-row gap-2 uppercase bg-primary_lite py-2.5 px-4 text-white text-xl font-bold">
              pagar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeStep === 4">
      <div class="flex flex-col gap-20 lg:px-96 md:px-40 sm:px-12 py-8">
        <div class="flex flex-col">
          <div class="w-96 h-8 text-center text-zinc-800 text-2xl font-bold uppercase tracking-widest">teléfono o
            contacto</div>
          <TelInput />
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
          <div class="text-zinc-800 text-2xl font-bold uppercase tracking-widest">forma de pago</div>
          <div class="text-zinc-800 text-base font-thin  uppercase">Presaldo disponible</div>
          <div class="text-neutral-500 text-xl font-bold border-y-2 uppercase tracking-wide">$ 40.00 USD</div>
        </div>
        <div class="flex flex-col justify-center gap-8 items-center">
          <div class="text-red-700 text-sm font-bold leading-snug">*No es suficiente para efectuar el pago,<br />por
            favor compre un nuevo paquete aquí</div>
          <div class="w-full flex flex-row justify-center">
            <button
              class="hover:text-sky-700 flex flex-row gap-2 uppercase bg-primary py-2.5 px-4 text-white text-xl font-bold">
              Enviar recarga
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TelInput from '@/components/defaultComponents/TelInput.vue';
import Input from '@/components/defaultComponents/Input.vue';
import { ref } from 'vue';


export default {
  components: { TelInput, Input },
  setup() {
    const phoneCountry = ref("");
    const showRecent = ref(false);
    const showContacts = ref(true);
    const summary_payment = ref(false);
    const activeStep = ref(1);

    const steps = [
      {
        active: true,
        done: false,
        step: 1,
        visible: true,
        wait: false,
      },
      {
        active: false,
        done: false,
        step: 2,
        visible: false,
        wait: false

      },
      {
        active: false,
        done: false,
        step: 3,
        visible: false,
        wait: false
      },
      {
        active: false,
        done: false,
        step: 4,
        visible: false,
        wait: false
      },
    ];

    const goTo = async (step) => {
      activeStep.value = step;
      steps.forEach((element, index) => {
        if (index === step - 1) {
          element.active = true;
          steps[index - 1].done = true;
        }
      });
    };

    const onSelect = ({ name, iso2, dialCode }) => {
      console.log(name, iso2, dialCode);
    };

    const favorites = [
      {
        name: "Favorito 4",
        phone_number: "+53 56897412"
      },
      {
        name: "Favorito 5",
        phone_number: "+53 56897412"
      },
    ]

    const contacts = [
      {
        name: "Favorito 1",
        phone_number: "+53 56897412"
      },
      {
        name: "Favorito 2",
        phone_number: "+53 56897412"
      },
      {
        name: "Favorito 3",
        phone_number: "+53 56897412"
      },
      {
        name: "Favorito 4",
        phone_number: "+53 56897412"
      },
      {
        name: "Favorito 5",
        phone_number: "+53 56897412"
      },
    ]

    return {
      phoneCountry,
      showRecent,
      showContacts,
      activeStep,
      steps,
      contacts,
      summary_payment,
      favorites,
      onSelect,
      goTo
    }
  }
}
</script>

<style></style>