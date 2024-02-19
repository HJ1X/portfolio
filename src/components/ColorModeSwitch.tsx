import { Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import {
  DARK_MODE_BUTTON_COLOR,
  LIGHT_MODE_BUTTON_COLOR,
  TRANSITION_DEFAULT,
} from "../consts";

const styleText = document.createTextNode(
  `html * { 
      transition: ${TRANSITION_DEFAULT}!important;
  }`
);

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const iconColor = useColorModeValue(
    LIGHT_MODE_BUTTON_COLOR,
    DARK_MODE_BUTTON_COLOR
  );

  const handleColorModeChange = () => {
    toggleColorMode();

    // Add a style tag with transition property on color mode change
    // and then, remove it after transition finishes
    // This is required because Chakra UI specifically prevents color mode
    // change transition by using "!important" attribute in styles
    const styleElement = document.createElement("style");
    styleElement.appendChild(styleText);
    document.head.appendChild(styleElement);
    setTimeout(() => {
      document.head.removeChild(styleElement);
    }, 300);
  };

  return (
    <Icon
      zIndex="docked"
      onClick={handleColorModeChange}
      fontSize={"2xl"}
      color={iconColor}
      as={colorMode === "dark" ? MdSunny : FaMoon}
      _hover={{ cursor: "pointer" }}
    ></Icon>
  );
};

export default ColorModeSwitch;
