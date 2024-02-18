import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Project } from "../types";

interface ProjectDetailsProps {
  project?: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  if (!project) {
    return (
      <Flex mt={4} justifyContent="center">
        <Text w="80%" align="center" fontWeight="bolder" fontSize="4xl">
          Cannot find the project you are looking for. We might be working on it
          later. Stay tuned.
        </Text>
      </Flex>
    );
  }

  return (
    <Box>
      <Heading as="h1" size="2xl" mb={8}>
        {project.name}
      </Heading>
      <Flex justifyContent="center">
        <Image
          objectFit="cover"
          borderRadius="2xl"
          width="70%"
          src={project.coverImage}
        />
      </Flex>
    </Box>
  );
};

export default ProjectDetails;
