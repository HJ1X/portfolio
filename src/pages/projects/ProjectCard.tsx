import FancyButton from "@/components/ui/custom/FancyButton";
import { projectsDetails } from "@/data/projectsData";
import { Box, Card, Flex, Image } from "@chakra-ui/react";

interface ProjectCardProps {
  id: number;
}

const ProjectCard = ({ id }: ProjectCardProps) => {
  const data = projectsDetails.find((proj) => proj.id === id);

  if (!data) {
    return null;
  }

  return (
    <Card.Root
      position="relative"
      overflow="hidden"
      bg="gray.800"
      w="full"
      h="full"
      rounded="2xl"
      css={{
        "& > #project-card-cover": {
          position: "absolute",
          top: "0",
          left: "0",
          h: "full",
          w: "full",
          rounded: "xl",
          filter: "opacity(0.8)",
          transitionProperty: "all",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-in",
        },
        "&:hover > #project-card-cover": {
          filter: "opacity(0.2) blur(10px)",
          transitionProperty: "all",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-in",
        },
        "& .slide-left-to-right": {
          transform: "translateX(-1rem)",
          opacity: 0,
          transitionProperty: "all",
          transitionDuration: "slower",
          transitionTimingFunction: "ease-in-smooth",
        },
        "&:hover .slide-left-to-right": {
          transform: "translateX(0)",
          opacity: 1,
          transitionProperty: "all",
          transitionDelay: "150ms",
          transitionDuration: "slower",
          transitionTimingFunction: "ease-in-smooth",
        },
        "& #project-title": {
          position: "absolute",
          bottom: 0,
          left: 0,
          transitionProperty: "all",
          transitionDuration: "slower",
          transitionTimingFunction: "ease-in-smooth",
        },
        "&:hover #project-title": {
          position: "absolute",
          bottom: 28,
          transitionProperty: "all",
          transitionDuration: "slower",
          transitionTimingFunction: "ease-in-smooth",
        },
      }}
    >
      <Box id="project-card-cover" position="relative" overflow="hidden">
        <Box
          position="absolute"
          h="full"
          w="full"
          zIndex="docked"
          className="bg-gradient-to-b from-transparent from-80% to-[var(--chakra-colors-gray-700)] to-100%"
        />
        <Image src={data.cover} h="full" w="auto" fit="cover" />
      </Box>
      <Card.Body>
        <Flex
          direction="column"
          justify="space-between"
          filter="opacity(1)"
          h="full"
        >
          <Box
            className="slide-left-to-right"
            h="14"
            w="14"
            rounded="full"
            overflow="hidden"
            bgColor="black"
          >
            <Image src={data.logo} h="full" w="auto" />
          </Box>
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="1.5">
              <Card.Title
                id="project-title"
                color="gray.50"
                fontWeight="bold"
                fontSize="3xl"
              >
                {data.title}
              </Card.Title>
              <Card.Description
                className="line-clamp-2 slide-left-to-right"
                color="gray.400"
                fontSize="md"
              >
                {data.description}
              </Card.Description>
            </Flex>
            <Flex className="slide-left-to-right" gap="3" justify="end">
              {data.liveLink && (
                <FancyButton label="See live" theme="primary" />
              )}
              <FancyButton label="Learn more" theme="secondary" />
            </Flex>
          </Flex>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;
