import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode(
          "linear-gradient(to right, #8360c3, #2ebf91)",
          "" // TODO: add dark mode gradient
        )(props),
      },
    }),
  },
});

export default theme;
