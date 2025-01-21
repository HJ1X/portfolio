import { Box, Flex, Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { MotionBox, MotionHeading } from "@/components/ui/Motion";
import { revealFromBottom } from "@/utils/animation";

function ProjectPage() {
  const properties = [
    {
      boxHeight: "10/12",
      boxWidth: "9/12",
      pos: {
        bottom: "0",
        right: "0",
      },
      transform: ["translate(-1rem, -1rem)", "translate(0, 0)"],
    },
    {
      boxHeight: "8/12",
      boxWidth: "10/12",
      pos: {
        bottom: "0",
        left: "0",
      },
      transform: ["translate(1rem, -1rem)", "translate(0, 0)"],
    },
    {
      boxHeight: "63%",
      boxWidth: "7/12",
      pos: {
        top: "0",
        right: "0",
      },
      transform: ["translate(-1rem, 1rem)", "translate(0, 0)"],
    },
    {
      boxHeight: "9/12",
      boxWidth: "8/12",
      pos: {
        top: "0",
        left: "0",
      },
      transform: ["translate(1rem, 1rem)", "translate(0, 0)"],
    },
  ];

  return (
    <>
      <Flex position="absolute" bottom="15%" left="-10%">
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
              delay: 0.05 * i,
            }}
          >
            {char}
          </MotionHeading>
        ))}
      </Flex>
      <Grid
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
              height={property.boxHeight}
              width={property.boxWidth}
              {...property.pos}
              initial={{
                opacity: 0,
              }}
              animate={{
                transform: property.transform,
                opacity: [0, 1],
              }}
              transition={{ delay: 0.2 * index}}
            >
              <ProjectCard id={index + 1} />
            </MotionBox>
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default ProjectPage;
