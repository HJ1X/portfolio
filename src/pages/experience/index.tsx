import { MotionHeading } from "@/components/ui/Motion";
import { profileTimeline, experienceDetails } from "@/data/experienceData";
import { revealFromBottom } from "@/utils/animation";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import Timeline from "./Timeline";
import ExperiencePageMobile from "./indexMobile";

const defaultProfile = {
  companyNumber: profileTimeline[0].number,
  profileNumber: profileTimeline[0].profiles[0].number,
};

const ExperiencePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(defaultProfile);
  const [experienceTextTop, setExperienceTextTop] = useState(0);

  const timelineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (timelineRef.current) {
      const { top } = timelineRef.current.getBoundingClientRect();
      setExperienceTextTop(top);
    }
  }, []);

  const details = experienceDetails.find(
    (detail) =>
      detail.companyNumber === selectedProfile.companyNumber &&
      detail.profileNumber === selectedProfile.profileNumber
  );

  return (
    <>
      {/* <Flex
        position="absolute"
        top={`calc(${experienceTextTop}px - 2.5rem)`}
        right={{ base: "-2", xl: "-5", "2xl": "-20" }}
      >
        {"Experience".split("").map((char, i) => (
          <MotionHeading
            key={"#" + i}
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
      </Flex> */}
      <Box h="full" hideBelow="lg">
        <Grid h="full" templateColumns="repeat(2, 1fr)" alignItems="center">
          <Box width="full" mt="-10" ref={timelineRef}>
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
