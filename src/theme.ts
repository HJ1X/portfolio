import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    disableTransitionOnChange: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // Transition effect does not work on gradients. So, create a transparent
        // gradient and then, change background-color to apply transition effect.
        background: mode(
          "linear-gradient(to right, #0000, #2ebf91)",
          "linear-gradient(to right, #0000, #4CD4A9)"
        )(props),
        backgroundColor: mode("#8360c3", "#6842AE")(props),
      },
    }),
  },
});

export default theme;
