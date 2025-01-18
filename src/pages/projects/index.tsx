import { Box, Grid, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

function ProjectPage() {
  const properties = [
    {
      boxHeight: "10/12",
      boxWidth: "9/12",
      pos: {
        bottom: "0",
        right: "0",
      },
      headingText: "1",
    },
    {
      boxHeight: "8/12",
      boxWidth: "10/12",
      pos: {
        bottom: "0",
        left: "0",
      },
      headingText: "2",
    },
    {
      boxHeight: "63%",
      boxWidth: "7/12",
      pos: {
        top: "0",
        right: "0",
      },
      headingText: "3",
    },
    {
      boxHeight: "9/12",
      boxWidth: "8/12",
      pos: {
        top: "0",
        left: "0",
      },
      headingText: "4",
    },
  ];

  return (
    <Grid
      height="full"
      width="full"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap="3"
    >
      {properties.map((property, index) => (
        <Box key={property.headingText} position="relative">
          <Box
            position="absolute"
            height={property.boxHeight}
            width={property.boxWidth}
            {...property.pos}
          >
            <Heading
              position="absolute"
              fontWeight="bolder"
              top="5"
              right="5"
              size="5xl"
              color="white"
              zIndex="docked"
            >
              {property.headingText}
            </Heading>
            <ProjectCard id={index + 1} />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default ProjectPage;
