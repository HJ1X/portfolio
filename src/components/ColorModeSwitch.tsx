import { Switch, useColorMode } from "@chakra-ui/react";
import { TRANSITION_DEFAULT } from "../consts";

const styleText = document.createTextNode(
  `html * { 
      transition: ${TRANSITION_DEFAULT}!important;
  }`
);

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

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
    <Switch
      zIndex="docked"
      colorScheme="green"
      isChecked={colorMode === "dark"}
      onChange={handleColorModeChange}
      size="lg"
    />
  );
};

export default ColorModeSwitch;
