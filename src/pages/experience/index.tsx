import { experienceDetails, profileTimeline } from "@/data/experienceData";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import Timeline from "./Timeline";
import ExperiencePageMobile from "./indexMobile";

const defaultProfile = {
  companyNumber: profileTimeline[0].number,
  profileNumber: profileTimeline[0].profiles[0].number,
};

const ExperiencePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(defaultProfile);

  const details = experienceDetails.find(
    (detail) =>
      detail.companyNumber === selectedProfile.companyNumber &&
      detail.profileNumber === selectedProfile.profileNumber
  );

  return (
    <>
      <Box h="full" hideBelow="lg">
        <Grid h="full" templateColumns="repeat(2, 1fr)" alignItems="center">
          <Box width="full" mt="-10">
            <Timeline
              selectedProfile={selectedProfile}
              onProfileChange={(
                companyNumber: number,
                profileNumber: number
              ) => {
                setSelectedProfile({
                  companyNumber,
                  profileNumber,
                });
              }}
            />
          </Box>
          <Flex align="center" height="full" mt="-10" hideBelow="lg">
            <ExperienceDetails details={details} />
          </Flex>
        </Grid>
      </Box>
      <Flex h="full" w="full" justify="center" hideFrom="lg">
        <ExperiencePageMobile
          selectedProfile={selectedProfile}
          onProfileChange={(companyNumber: number, profileNumber: number) => {
            setSelectedProfile({
              companyNumber,
              profileNumber,
            });
          }}
        />
      </Flex>
    </>
  );
};

export default ExperiencePage;
