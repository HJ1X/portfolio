import { Flex, Grid } from "@chakra-ui/react";
import AboutIntro from "./AboutIntro";
import ProfileImage from "./ProfileImage";
import { MotionHeading } from "@/components/ui/Motion";
import { revealFromBottom } from "@/utils/animation";

const AboutPage = () => {
  return (
    <Grid w="100%" h="100%" templateColumns="45% 1fr" gap="20">
      <AboutIntro />

      {/* TODO: Fix positioning based on profile image */}
      <Flex direction="column" position="relative" top="20%">
        <Flex>
          {"Arpit".split("").map((char, i) => (
            <MotionHeading
              key={char}
              h="9rem"
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
        <Flex>
          {"Das".split("").map((char, i) => (
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
      </Flex>
      {/* <ProfileImage /> */}
    </Grid>
  );
};

export default AboutPage;
