import { Flex, Box } from "@chakra-ui/react";
import Profile from "./Profile";
import ProfileLinks from "./ProfileLinks";
import SectionsList from "./SectionsList";

const SidePanel = () => {
  return (
    <Flex
      height="100%"
      overflow="auto"
      direction="column"
      justifyContent="space-between"
      pt={14}
      pb={6}
    >
      <Box>
        <Box mb={10}>
          <Profile />
        </Box>
        <SectionsList />
      </Box>
      <ProfileLinks />
    </Flex>
  );
};

export default SidePanel;
