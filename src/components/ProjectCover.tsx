import { Box, Flex, Image } from "@chakra-ui/react";

interface ProjectCoverProps {
  coverImage?: string;
}

const ProjectCover = ({ coverImage }: ProjectCoverProps) => {
  if (!coverImage) return;

  return (
    <Flex
      id="project-cover"
      pos="relative"
      top={-24}
      justifyContent="flex-end"
      mr={14}
      height="35rem"
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
    </Flex>
  );
};

export default ProjectCover;
