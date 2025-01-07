import { Button } from "@/components/ui/button";
import { useColorMode } from "@/components/ui/color-mode";
import { BsEmojiSmileFill, BsEmojiSunglassesFill } from "react-icons/bs";

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button>
      {colorMode === "light" ? (
        <BsEmojiSunglassesFill onClick={toggleColorMode} />
      ) : (
        <BsEmojiSmileFill onClick={toggleColorMode} />
      )}
    </Button>
  );
}

export default ThemeToggleButton;
