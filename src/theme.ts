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
              70: { value: "#EA698BB3" },
              DEFAULT: { value: "#EA698BCC" },
              90: { value: "#EA698BE6" },
            },
            light: {
              70: { value: "#D55D92B3" },
              DEFAULT: { value: "#D55D92CC" },
              90: { value: "#D55D92E6" },
            },
            DEFAULT: {
              70: { value: "#C05299B3" },
              DEFAULT: { value: "#C05299CC" },
              90: { value: "#C05299E6" },
            },
            dark: {
              70: { value: "#AC46A1B3" },
              DEFAULT: { value: "#AC46A1CC" },
              90: { value: "#AC46A1E6" },
            },
            darker: {
              70: { value: "#973AA8B3" },
              DEFAULT: { value: "#973AA8CC" },
              90: { value: "#973AA8E6" },
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
            lighter: { value: "#EA698B" },
            light: { value: "#D55D92" },
            DEFAULT: { value: "#C05299" },
            dark: { value: "#AC46A1" },
            darker: { value: "#973AA8" },
          },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
