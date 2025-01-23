import { Box, Flex, Grid } from "@chakra-ui/react";
import AboutIntro from "./AboutIntro";
import ProfileImage from "./ProfileImage";
import { MotionHeading } from "@/components/ui/Motion";
import { revealFromBottom } from "@/utils/animation";

const AboutPage = () => {
  return (
    <Box h="full">
      <Flex
        direction="column"
        position="absolute"
        top="20%"
        pl="56"
        left="0"
        right="0"
        mx="auto"
        w="fit"
      >
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
                delay: 0.25 + 0.05 * i,
              }}
            >
              {char}
            </MotionHeading>
          ))}
        </Flex>
      </Flex>
      <Grid w="full" h="full" templateColumns="45% 1fr" gap="20">
        <AboutIntro />
        <ProfileImage />
      </Grid>
    </Box>
  );
};

export default AboutPage;
