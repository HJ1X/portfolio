import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // theme based purple color code
        purple: "#644ED2",
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          DEFAULT: { value: "{colors.purple}" },
          lighter: { value: "{colors.blue.subtle}" },
          light: { value: "{colors.blue.emphasized}" },
        },
        secondary: {
          DEFAULT: { value: "{colors.yellow.400}" },
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
