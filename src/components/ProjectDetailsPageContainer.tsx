import { Box } from "@chakra-ui/react";
import Link from "./Link";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProjectDetailsPageContainerProps {
  children: ReactNode | ReactNode[];
}

const ProjectDetailsPageContainer = ({
  children,
}: ProjectDetailsPageContainerProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/projects");
  };

  return (
    <Box p={10}>
      <Link
        zIndex="docked"
        mb={6}
        leftIcon={FaArrowLeft}
        handleClick={handleBack}
      >
        Projects
      </Link>
      {children}
    </Box>
  );
};

export default ProjectDetailsPageContainer;
