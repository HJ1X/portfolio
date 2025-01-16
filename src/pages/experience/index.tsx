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
    <Flex gap="28" height="full" width="full" align="start">
      <Box width="full" pt="32">
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
      <Box pt="20">
        <ExperienceDetails
          companyNumber={selectedProfile.companyNumber}
          profileNumber={selectedProfile.profileNumber}
        />
      </Box>
    </Flex>
  );
};

export default ExperiencePage;
