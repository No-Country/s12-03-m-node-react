/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");
// import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
   
  ],
  theme: {
    extend: {
      colors: {
        moradoMain: "#4D4295",
        celesteAcento: "#4BE6D0",
        light: "#C4CFD4",
        secondary: "#52525B",
        fondo: "#F5F5FA",
        letra: "#37474F",
        moradoActivo: "#DBD9EA",
        moradoFondo: "#F5F5FA",//Se usa para el fondo del modal
        moradoSecundario:"#9087CA"
      },    
      screens: {
        notebook: {"max":"1100px"},
      },
    },
  },
  plugins: [nextui()],
};
