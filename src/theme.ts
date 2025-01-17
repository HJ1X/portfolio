import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          primary: {
            darker: {
              70: { value: "#2D00F7B3" },
              DEFAULT: { value: "#2D00F7CC" },
              90: { value: "#2D00F7E6" },
            },
            dark: {
              70: { value: "#6A00F4B3" },
              DEFAULT: { value: "#6A00F4CC" },
              90: { value: "#6A00F4E6" },
            },
            DEFAULT: {
              70: { value: "#8900F2B3" },
              DEFAULT: { value: "#8900F2CC" },
              90: { value: "#8900F2E6" },
            },
            light: {
              70: { value: "#A100F2B3" },
              DEFAULT: { value: "#A100F2CC" },
              90: { value: "#A100F2E6" },
            },
            lighter: {
              70: { value: "#B100E8B3" },
              DEFAULT: { value: "#B100E8CC" },
              90: { value: "#B100E8E6" },
            },
            lightest: {
              70: { value: "#BC00DDB3" },
              DEFAULT: { value: "#BC00DDCC" },
              90: { value: "#BC00DDE6" },
            },
          },
          secondary: {
            lighter: {
              70: { value: "#D100D1B3" },
              DEFAULT: { value: "#D100D1CC" },
              90: { value: "#D100D1E6" },
            },
            light: {
              70: { value: "#DB00B6B3" },
              DEFAULT: { value: "#DB00B6CC" },
              90: { value: "#DB00B6E6" },
            },
            DEFAULT: {
              70: { value: "#E500A4B3" },
              DEFAULT: { value: "#E500A4CC" },
              90: { value: "#E500A4E6" },
            },
            darK: {
              70: { value: "#F20089B3" },
              DEFAULT: { value: "#F20089CC" },
              90: { value: "#F20089E6" },
            },
          },
        },
        fg: {
          primary: {
            darker: { value: "#2D00F7" },
            dark: { value: "#6A00F4" },
            DEFAULT: { value: "#8900F2" },
            light: { value: "#A100F2" },
            lighter: { value: "#B100E8" },
            lightest: { value: "#BC00DD" },
          },
          secondary: {
            lighter: { value: "#D100D1" },
            light: { value: "#DB00B6" },
            DEFAULT: { value: "#E500A4" },
            darK: { value: "#F20089" },
          },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
