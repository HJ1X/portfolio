import { MotionHeading } from "@/components/ui/Motion";
import { profileTimeline, experienceDetails } from "@/data/experienceData";
import { revealFromBottom, revealFromLeft } from "@/utils/animation";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import Timeline from "./Timeline";

const ExperiencePage = () => {
  const defaultProfile = {
    companyNumber: profileTimeline[0].number,
    profileNumber: profileTimeline[0].profiles[0].number,
  };
  const [selectedProfile, setSelectedProfile] = useState(defaultProfile);

  const details = experienceDetails.find(
    (detail) =>
      detail.companyNumber === selectedProfile.companyNumber &&
      detail.profileNumber === selectedProfile.profileNumber
  );

  return (
    <>
      <Flex position="absolute" top="20%" left="-5%">
        {"Experience".split("").map((char, i) => (
          <MotionHeading
            key={char}
            fontSize="9rem"
            color="gray"
            {...revealFromBottom}
            animate={{
              ...revealFromBottom.animate,
              opacity: 0.2,
            }}
            transition={{
              delay: 0.05 * i,
            }}
          >
            {char}
          </MotionHeading>
        ))}
      </Flex>
      <Grid h="full" templateColumns="repeat(2, 1fr)" alignItems="center">
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
          <ExperienceDetails details={details} />
        </Flex>
      </Grid>
    </>
  );
};

export default ExperiencePage;
