import { theme } from "@chakra-ui/react";

// BG color for both light and dark mode is same as inverse text color
// of theme in chakra UI.

export const DARK_MODE_DEFAULT_BG = theme.colors.gray[700];
export const DARK_MODE_DEFAULT_TEXT = theme.colors.whiteAlpha[900];

export const LIGHT_MODE_DEFAULT_BG = theme.colors.white;
export const LIGHT_MODE_DEFAULT_TEXT = theme.colors.gray[800];
