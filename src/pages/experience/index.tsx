import { Box, Flex } from "@chakra-ui/react";
import Timeline from "./Timeline";
import ExperienceDetails from "./ExperienceDetails";
import { profileTimeline } from "@/data/experienceData";
import { useState } from "react";

const ExperiencePage = () => {
  const defaultProfile = {
    companyNumber: profileTimeline[0].number,
    profileNumber: profileTimeline[0].profiles[0].number,
  };
  const [selectedProfile, setSelectedProfile] = useState(defaultProfile);

  return (
    <Flex gap="8" height="full" width="full" align="center">
      <Box width="full" mt="-10">
        <Timeline
          selectedProfile={selectedProfile}
          onProfileChange={(companyNumber: number, profileNumber: number) => {
            setSelectedProfile({
              companyNumber,
              profileNumber,
            });
          }}
        />
      </Box>
      <Flex align="center" height="full" mt="-10">
        <ExperienceDetails
          companyNumber={selectedProfile.companyNumber}
          profileNumber={selectedProfile.profileNumber}
        />
      </Flex>
    </Flex>
  );
};

export default ExperiencePage;
