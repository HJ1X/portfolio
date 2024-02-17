import { Box } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Link from "../components/Link";
import UserService from "../services/user-service";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  if (!projectId) return;

  const project = UserService.getProject(projectId);

  if (!project) return;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/projects");
  };

  return (
    <Box p={10} pr={28}>
      <Link leftIcon={FaArrowLeft} handleClick={handleBack}>
        Back to Projects
      </Link>
    </Box>
  );
};

export default ProjectDetailsPage;
