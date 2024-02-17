import { Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Link from "../components/Link";
import ProjectsGrid from "../components/ProjectsGrid";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleProjectArchive = () => {
    navigate("/");
  };

  return (
    <Box p={10} pr={28} height="100%" position="relative">
      <ProjectsGrid />
      <Link
        position="absolute"
        bottom={0}
        mb={10}
        rightIcon={FaArrowRight}
        handleClick={handleProjectArchive}
      >
        View Full Project Archive (arrow)
      </Link>
    </Box>
  );
};

export default ProjectsPage;
