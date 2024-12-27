import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Project } from "../types";
import DefinitionItem from "./DefinitionItem";
import ImageCard from "./ImageCard";
import TechStack from "./TechStack";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const definitionItems = [
    {
      name: "Overview",
      description: project.detailedDescription ? (
        <Text>{project.detailedDescription}</Text>
      ) : null,
    },
    {
      name: "Category",
      description: project.type ? <Text>{project.type}</Text> : null,
    },
    {
      name: "Year",
      description: project.year ? <Text>{project.year}</Text> : null,
    },
    {
      name: "Tools",
      description: project.tools ? (
        <TechStack technologies={project.tools} />
      ) : null,
    },
  ];

  return (
    <Grid templateColumns="0.8fr 1.2fr" gap={10}>
      <GridItem>
        {definitionItems.map((definitionItem) => (
          <DefinitionItem
            key={definitionItem.name}
            mb={6}
            term={definitionItem.name}
          >
            {definitionItem.description}
          </DefinitionItem>
        ))}
      </GridItem>

      <GridItem>
        <Box mb={5}>
          <ImageCard image={project.projectImages?.desktop} />
        </Box>
        <Grid templateColumns="0.7fr 1.3fr" gap={5} px={6}>
          <GridItem>
            <ImageCard image={project.projectImages?.mobile} />
          </GridItem>
          <GridItem>
            <ImageCard image={project.projectImages?.tab} />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default ProjectDetails;
