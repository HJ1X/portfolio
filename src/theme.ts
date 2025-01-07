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
        backgroundColor: mode("#626c78", "#626c78")(props),
      },
    }),
  },
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Space Grotesk', sans-serif`,
  },
});

export default theme;
