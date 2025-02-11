import { MotionBox } from "@/components/ui/Motion";
import { revealFromBottom } from "@/lib/animation";
import { Box, Flex, Grid, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import AboutIntro from "./AboutIntro";
import ProfileImage from "./ProfileImage";

const AboutPage = () => {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
      <Box h="full" overflow="hidden" hideBelow="lg">
        {/* <Flex
          direction="column"
          position="absolute"
          top="20%"
          pl="28"
          left="0"
          right="0"
          mx="auto"
          w="fit"
        >
          <Flex>
            {intro.name
              .split(" ")[0]
              .split("")
              .map((char, i) => (
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
          <Flex justify="end">
            {intro.name
              .split(" ")[1]
              .split("")
              .map((char, i) => (
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
                    delay: intro.name.split(" ")[0].length * 0.05 + 0.05 * i,
                  }}
                >
                  {char}
                </MotionHeading>
              ))}
          </Flex>
        </Flex> */}
        <Grid w="full" h="full" templateColumns="45% 1fr" gap="20">
          <AboutIntro />
          <ProfileImage />
        </Grid>
      </Box>
      <Flex
        position="relative"
        h="calc(100dvh - var(--navbar-height))"
        w="full"
        direction="column"
        hideFrom="lg"
        gap="20"
      >
        <MotionBox
          position="absolute"
          bottom="8"
          left="0"
          right="0"
          mx="auto"
          w="fit"
          zIndex="overlay"
          {...revealFromBottom}
          transition={{ delay: 0.2 }}
        >
          <IconButton
            variant="outline"
            rounded="full"
            size="xl"
            onClick={() => setShowIntro(!showIntro)}
          >
            {!showIntro ? <FaAngleDown /> : <FaAngleUp />}
          </IconButton>
        </MotionBox>
        {!showIntro && <ProfileImage />}
        {showIntro && <AboutIntro />}
      </Flex>
    </>
  );
};

export default AboutPage;
