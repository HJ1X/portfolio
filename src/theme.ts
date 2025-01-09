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
        primary: { value: "{colors.purple}" },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
