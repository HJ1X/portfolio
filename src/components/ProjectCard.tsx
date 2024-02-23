import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TRANSITION_DEFAULT } from "../consts";
import useColorVariable from "../hooks/useColorVariable";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const subHeadingColor = useColorVariable("SUBTLE_TEXT");

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      borderRadius="xl"
      boxShadow="2xl"
      transition={TRANSITION_DEFAULT}
      _hover={{
        transform: "scale(1.1)",
        transition: TRANSITION_DEFAULT,
        cursor: "pointer",
        boxShadow: "dark-lg",
      }}
    >
      <CardHeader>
        <Heading noOfLines={1} as="h2" size="lg" mb={1}>
          {project.name}
        </Heading>
        <Heading noOfLines={1} as="h3" size="sm" color={subHeadingColor}>
          {project.type}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{project.description}</Text>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
