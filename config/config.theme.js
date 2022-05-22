import React from "react";
import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    // Add new color

    primary: {
      50: "#ffebdd",
      100: "#fecdb1",
      200: "#fab383",
      300: "#f89a54",
      400: "#f48524",
      500: "#db5d0b",
      600: "#ab3d06",
      700: "#7b2203",
      800: "#4b0f00",
      900: "#1e0001",
    },

    secondary: {
      50: "#ffe2ec",
      100: "#ffb1c7",
      200: "#ff7fa2",
      300: "#ff4d7d",
      400: "#fe1d57",
      500: "#e5063e",
      600: "#b30030",
      700: "#810022",
      800: "#4f0014",
      900: "#200007",
    },

    pink: {
      50: "#ffe7f6",
      100: "#f6bddc",
      200: "#ec94c2",
      300: "#e269a8",
      400: "#d9408f",
      500: "#bf2675",
      600: "#961c5b",
      700: "#6c1241",
      800: "#430828",
      900: "#1c0010",
    },
  },
  fontConfig: {
    lobster: {
      400: {
        normal: 'LobsterTwo_400Regular',
        italic: 'LobsterTwo_400Regular_Italic'
      },
      700: {
        normal: 'LobsterTwo_700Bold',
        italic: 'LobsterTwo_700Bold_Italic'
      }
    }
  },
  fonts: {
    heading: 'lobster',
    body: 'lobster',
    mono: 'lobster',
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});

export default theme;
