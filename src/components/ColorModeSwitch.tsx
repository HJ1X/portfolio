import { Icon, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { TRANSITION_DEFAULT } from "../consts";
import useColorVariable from "../hooks/useColorVariable";

const styleText = document.createTextNode(
  `html * { 
      transition: ${TRANSITION_DEFAULT}!important;
  }`
);

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const iconColor = useColorVariable("COLOR_MODE_SWITCH");

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
