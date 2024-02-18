import { Box, Text } from "@chakra-ui/react";
import { Experience } from "../consts";

interface ExperienceTimelineProps {
  experienceDetails: Experience[];
  setExperience: (experience: Experience) => void;
}

const getPseudoElementStyles = (isHovered: boolean) => {
  let width = "0.313rem";
  let height = "0.313rem";
  let top = "0.625rem";
  let left = "-0.05rem";
  let boxShadow =
    "0 0 0 4px grey, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)";
  let background = "black";

  if (isHovered) {
    width = "0.5rem";
    height = "0.5rem";
    top = "0.75rem";
    left = "-0.15rem";
    boxShadow =
      "0 0 0 4px black, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)";
    background = "white";
  }

  return {
    content: `""`,
    position: "absolute",
    width,
    height,
    top,
    left,
    borderRadius: "50%",
    zIndex: "1",
    boxShadow,
    background,
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  };
};

const ExperienceTimeline = ({
  experienceDetails,
  setExperience,
}: ExperienceTimelineProps) => {
  return (
    <Box
      position="relative"
      _after={{
        content: `""`,
        position: "absolute",
        width: "0.2rem",
        background: "black",
        top: 0,
        bottom: 0,
      }}
    >
      {experienceDetails.map((experience) => (
        <Box
          key={experience.toString()}
          onClick={() => setExperience(experience)}
          position="relative"
          mb="2rem"
          transition="font-size ease-in-out 0.2s"
          color="grey"
          _hover={{
            fontSize: "1.3rem",
            color: "black",
            cursor: "pointer",
            _before: getPseudoElementStyles(true),
          }}
          _before={getPseudoElementStyles(false)}
        >
          <Box ml={3}>
            <Text>{experience.role}</Text>
            <Text>{experience.company}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceTimeline;
