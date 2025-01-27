import { MotionBox } from "@/components/ui/Motion";
import { revealFromBottom } from "@/lib/animation";
import { Box, Flex, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

function ProjectPage() {
  const properties = [
    {
      boxWidth: "30rem",
      aspectRatio: 1.4,
      pos: {
        bottom: "0",
        right: "0",
      },
      transform: ["translate(-1rem, -1rem)", "translate(0, 0)"],
    },
    {
      boxWidth: "34rem",
      aspectRatio: 1.95,
      pos: {
        bottom: "0",
        left: "0",
      },
      transform: ["translate(1rem, -1rem)", "translate(0, 0)"],
    },
    {
      boxWidth: "24rem",
      aspectRatio: 1.45,
      pos: {
        top: "0",
        right: "0",
      },
      transform: ["translate(-1rem, 1rem)", "translate(0, 0)"],
    },
    {
      boxWidth: "28rem",
      aspectRatio: 1.4,
      pos: {
        top: "0",
        left: "0",
      },
      transform: ["translate(1rem, 1rem)", "translate(0, 0)"],
    },
  ];

  return (
    <>
      {/* <Flex
        position="absolute"
        bottom="15%"
        left={{ base: "-2", xl: "-5", "2xl": "-20" }}
      >
        {"Projects".split("").map((char, i) => (
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
      </Flex> */}
      <Grid
        hideBelow="lg"
        height="full"
        width="full"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap="3"
      >
        {properties.map((property, index) => (
          <Box key={"#" + index} position="relative">
            <MotionBox
              position="absolute"
              width={property.boxWidth}
              aspectRatio={property.aspectRatio}
              {...property.pos}
              initial={{
                opacity: 0,
              }}
              animate={{
                transform: property.transform,
                opacity: [0, 1],
              }}
              transition={{ delay: 0.2 * index }}
            >
              <ProjectCard id={index + 1} />
            </MotionBox>
          </Box>
        ))}
      </Grid>
      <Flex direction="column" gap="4" h="fit" pb="6" hideFrom="lg">
        {properties.map((_, index) => (
          <MotionBox
            w="full"
            aspectRatio={1.3}
            key={"#" + index}
            {...revealFromBottom}
            transition={{ delay: 0.1 + 0.2 * index }}
          >
            <ProjectCard id={index + 1} />
          </MotionBox>
        ))}
      </Flex>
    </>
  );
}

export default ProjectPage;
