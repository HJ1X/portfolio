import { Box, Flex, Image, chakra, shouldForwardProp } from "@chakra-ui/react";
import {
  motion,
  isValidMotionProp,
  useAnimationControls,
  useAnimate,
  usePresence,
} from "framer-motion";
import { useEffect } from "react";

// const ChakraBox = chakra(motion.div, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

interface ProjectCoverProps {
  coverImage?: string;
  hideCover?: boolean;
}

const ProjectCover = ({ coverImage, hideCover }: ProjectCoverProps) => {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, {
          opacity: [0, 1],
        });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, {
          top: ["-6rem", "-41rem"],
        });
        safeToRemove();
      };
      exitAnimation();
    }
  }, []);

  if (!coverImage) return;

  return (
    <div
      ref={scope}
      id="project-cover"
      // posit="relative"
      // top="-6rem"
      // justifyContent="flex-end"
      // mr={14}
      // height="35rem"
      // animate={controls}
      // exit={controls}
      // @ts-ignore no problem in operation, although type error appears.
      // transition={{
      //   duration: 3,
      //   ease: "easeInOut",
      // }}
    >
      <Box id="project-cover__image-container" width="75%" height="100%">
        <Image
          id="project-cover_image"
          width="100%"
          height="100%"
          textAlign="center"
          objectFit="cover"
          borderBottomRadius="2xl"
          src={coverImage}
        />
      </Box>
    </div>
  );
};

export default ProjectCover;
