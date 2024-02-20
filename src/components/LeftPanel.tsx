import { Box, Stack } from "@chakra-ui/react";
import Profile from "./Profile";
import SectionsList from "./SectionsList";

const LeftPanel = () => {
  return (
    <Stack height="100%" id="left-panel-container">
      <Box mb={10} id="profile-container" pt={8}>
        <Profile />
      </Box>
      <Box id="list-container">
        <SectionsList />
      </Box>
    </Stack>
  );
};

export default LeftPanel;
