import { Link as ReactRouterLink } from "react-router-dom";
import { Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import ProjectsGrid from "../components/ProjectsGrid";

const ProjectsPage = () => {
  return (
    <Box p={10} pr={28}>
      <ProjectsGrid />
      <ChakraLink as={ReactRouterLink} to="/">
        <Text>View Full Project Archive (arrow)</Text>
      </ChakraLink>
    </Box>
  );
};

export default ProjectsPage;
