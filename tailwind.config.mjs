import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {},
      colors: {
         light: "#e7eef9",
         dark: "#272727",
         primary: "#272727", //"#3473b7"
         secondary: "#321d67",
         accent: "#EEC638",
      },
   },
   plugins: [addDynamicIconSelectors()],
};

/*

--Dark
colors: {
         text: "#e7eef9",
         background: "#010304",
         primary: "#3473b7",
         secondary: "#321d67",
         accent: "#5e278b",
      },

--Light
colors: {
   'text': '#060d18',
   'background': '#fbfdfe',
   'primary': '#4888cb',
   'secondary': '#ad98e2',
   'accent': '#ab74d8',
},

*/
