import { Box, Flex } from "@chakra-ui/react";
import ProfileLinks from "./ProfileLinks";
import ColorModeSwitch from "./ColorModeSwitch";

function RightPanel() {
  return (
    <Flex
      id="right-panel-container"
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"100%"}
      py={2}
    >
      <Box id="toggle-theme-button">
        <ColorModeSwitch />
      </Box>
      <ProfileLinks />
    </Flex>
  );
}

export default RightPanel;
