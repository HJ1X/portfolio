import { useColorMode } from "@/components/ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa6";

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton size="lg" variant="ghost" rounded="full">
      {colorMode === "light" ? (
        <FaMoon onClick={toggleColorMode} />
      ) : (
        <FaSun onClick={toggleColorMode} color="yellow" />
      )}
    </IconButton>
  );
}

export default ThemeToggleButton;
