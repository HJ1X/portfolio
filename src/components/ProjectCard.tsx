import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  DARK_MODE_SUBTLE_TEXT,
  LIGHT_MODE_SUBTLE_TEXT,
  TRANSITION_DEFAULT,
} from "../consts";
import { Project } from "../types";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const subHeadingColor = useColorModeValue(
    LIGHT_MODE_SUBTLE_TEXT,
    DARK_MODE_SUBTLE_TEXT
  );

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
        <Heading as="h2" size="lg" mb={1}>
          {project.name}
        </Heading>
        <Heading as="h3" size="sm" color={subHeadingColor}>
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
