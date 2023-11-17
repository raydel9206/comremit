import { defineStore } from "pinia";

export const useStaticStore = defineStore("static", () => {
  const promotions = [
    {
      name: "Promotion1",
      screens: {
        xxl: {
          traslate_img: {
            en: "/img/promotions/banner_rotativo.webp",
            es: "/img/promotions/banner_rotativo-1.webp",
          },
        },
        xl: {
          traslate_img: {
            en: "/img/promotions/banner_rotativo-2.webp",
            es: "/img/promotions/banner_rotativo-3.webp",
          },
        },
        xs: {
          traslate_img: {
            en: "/img/promotions/banner_rotativo-4.webp",
            es: "/img/promotions/banner_rotativo-5.webp",
          },
        },
      },
    },
  ];

  const contacts = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
    },
  ];

  return {
    promotions,
    contacts,
  };
});
