import { SimpleGrid } from "@chakra-ui/react";
import UserService from "../services/user-service";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = UserService.getProjects();

  if (!projects) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12} mb={5}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectsGrid;
