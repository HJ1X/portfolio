import { theme, useColorModeValue } from "@chakra-ui/react";

type COLOR_VARIABLES =
  | "DEFAULT_TEXT"
  | "SUBTLE_TEXT"
  | "DEFAULT_BACKGROUND"
  | "CARD_BACKGROUND"
  | "SUBTLE_BACKGROUND"
  | "PLACEHOLDER"
  | "COLOR_MODE_SWITCH"
  | "BLUE"
  | "LIGHT_GRAY";

const useColorVariable = (colorVariable: COLOR_VARIABLES) => {
  switch (colorVariable) {
    case "DEFAULT_TEXT":
      return useColorModeValue(
        theme.colors.gray[800],
        theme.colors.whiteAlpha[900]
      );

    case "SUBTLE_TEXT":
      return useColorModeValue(theme.colors.gray[600], theme.colors.gray[400]);

    case "DEFAULT_BACKGROUND":
      return useColorModeValue(theme.colors.white, theme.colors.gray[800]);

    case "CARD_BACKGROUND":
      return useColorModeValue(theme.colors.white, theme.colors.gray[700]);

    case "SUBTLE_BACKGROUND":
      return useColorModeValue(theme.colors.gray[100], theme.colors.gray[700]);

    case "PLACEHOLDER":
      return useColorModeValue(
        theme.colors.gray[500],
        theme.colors.whiteAlpha[400]
      );

    case "COLOR_MODE_SWITCH":
      return useColorModeValue(
        theme.colors.gray[800],
        theme.colors.yellow[300]
      );

    case "BLUE":
      return theme.colors.blue[400];

    case "LIGHT_GRAY":
      return useColorModeValue(theme.colors.gray[300], theme.colors.gray[500]);
  }
};

export default useColorVariable;
