import { Box } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Link from "../components/Link";
import UserService from "../services/user-service";
import ProjectDetails from "../components/ProjectDetails";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = UserService.getProject(projectId);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/projects");
  };

  return (
    <Box p={10}>
      <Link mb={6} leftIcon={FaArrowLeft} handleClick={handleBack}>
        Back to Projects
      </Link>
      <ProjectDetails project={project} />
    </Box>
  );
};

export default ProjectDetailsPage;
