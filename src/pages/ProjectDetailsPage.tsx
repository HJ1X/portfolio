import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProjectCover from "../components/ProjectCover";
import ProjectDetails from "../components/ProjectDetails";
import ProjectDetailsPageContainer from "../components/ProjectDetailsPageContainer";
import useColorVariable from "../hooks/useColorVariable";
import UserService from "../services/user-service";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useCanvasRef from "../hooks/useCanvasRef";
import { TRANSITION_DEFAULT, TRANSITION_SLOWER } from "../consts";
import { AnimatePresence } from "framer-motion";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = UserService.getProject(projectId);

  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const canvasRef = useCanvasRef();

  const projectDescriptionColor = useColorVariable("SUBTLE_TEXT");
  const iconBackgroundColor = useColorVariable("BLUE");
  const iconColor = useColorVariable("DEFAULT_BACKGROUND");
  const iconColorOnHover = useColorVariable("DEFAULT_TEXT");
  const iconBackgroundColorOnHover = useColorVariable("LIGHT_GRAY");

  const handleScrollDown = () => {
    setIsScrolledDown(!isScrolledDown);
  };

  const handleMouseWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    /**
     * Implementation notes:
     * 1. deltaY property gives the delta of mouse wheel. Positive value denotes
     * a mouse wheel down event and vice versa.
     * 2. scrollTop property gives how much an element is scrolled from top.
     */

    if (!isScrolledDown && event.deltaY > 0) {
      setIsScrolledDown(true);
    }

    if (
      isScrolledDown &&
      event.deltaY < 0 &&
      canvasRef.current?.scrollTop === 0
    ) {
      setIsScrolledDown(false);
    }
  };

  if (!project) {
    return (
      <ProjectDetailsPageContainer>
        <Flex mt={4} justifyContent="center">
          <Text w="80%" align="center" fontWeight="bolder" fontSize="4xl">
            Cannot find the project you are looking for. We might be working on
            it later. Stay tuned.
          </Text>
        </Flex>
      </ProjectDetailsPageContainer>
    );
  }

  return (
    <Box onWheel={handleMouseWheel}>
      <ProjectDetailsPageContainer>
        {!isScrolledDown && (
          <AnimatePresence>
            <ProjectCover
              hideCover={isScrolledDown}
              coverImage={project.coverImage}
            />
          </AnimatePresence>
        )}
        <Box px={16} mt={isScrolledDown ? 6 : 0}>
          <Flex justify="space-between" align="flex-end" mb={12}>
            <Box>
              <Heading as="h1" size="2xl" mb={5}>
                {project.name}
              </Heading>
              <Heading
                fontStyle="italic"
                color={projectDescriptionColor}
                size="lg"
              >
                {project.description}
              </Heading>
            </Box>
            <IconButton
              isRound={true}
              variant="solid"
              background={iconBackgroundColor}
              color={iconColor}
              _hover={{
                color: iconColorOnHover,
                background: iconBackgroundColorOnHover,
              }}
              aria-label="Scroll Down"
              size="lg"
              icon={<FaChevronDown />}
              onClick={handleScrollDown}
            />
          </Flex>
          {isScrolledDown && <ProjectDetails project={project} />}
        </Box>
      </ProjectDetailsPageContainer>
    </Box>
  );
};

export default ProjectDetailsPage;
