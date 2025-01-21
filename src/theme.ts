import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#e1f5fd" },
          100: { value: "#b3e5f9" },
          200: { value: "#81d3f5" },
          300: { value: "#51c2f1" },
          400: { value: "#2db5ef" },
          500: { value: "#0aa8ec" },
          600: { value: "#059add" },
          700: { value: "#0087ca" },
          800: { value: "#0076b6" },
          900: { value: "#005794" },
        },
        secondary: {
          50: { value: "#e0f5f1" },
          100: { value: "#b2e5db" },
          200: { value: "#7fd5c4" },
          300: { value: "#47c4ad" },
          400: { value: "#00b69b" },
          500: { value: "#00a889" },
          600: { value: "#009a7c" },
          700: { value: "#00896c" },
          800: { value: "#00795d" },
          900: { value: "#005c41" },
        }
    },
  },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.100}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          focusRing: { value: "{colors.primary.500}" },
        },
        secondary: {
          solid: { value: "{colors.secondary.500}" },
          contrast: { value: "{colors.secondary.100}" },
          fg: { value: "{colors.secondary.700}" },
          muted: { value: "{colors.secondary.100}" },
          subtle: { value: "{colors.secondary.200}" },
          emphasized: { value: "{colors.secondary.300}" },
          focusRing: { value: "{colors.secondary.500}" },
        },
      },
      fonts: {
        heading: {
          value: "Montserrat, sans-serif",
        },
        body: {
          value: "Montserrat, sans-serif",
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
