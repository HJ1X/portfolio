import { Box, BoxProps, ColorMode, useColorMode } from "@chakra-ui/react";
import {
  DARK_MODE_DEFAULT_TEXT,
  DARK_MODE_SUBTLE_TEXT,
  DARK_MODE_TIMELINE_DOT_COLOR,
  Experience,
  LIGHT_MODE_DEFAULT_TEXT,
  LIGHT_MODE_SUBTLE_TEXT,
  LIGHT_MODE_TIMELINE_DOT_COLOR,
} from "../consts";
import ExperienceTimelineContent from "./ExperienceTimelineContent";

interface ExperienceTimelineContainerProps {
  experience: Experience;
  onExperienceChange: (experience: Experience) => void;
}

const getPseudoElementStyles = (isHovered: boolean, colorMode: ColorMode) => {
  return isHovered
    ? {
        content: `""`,
        position: "absolute",
        width: "0.8rem",
        height: "0.8rem",
        top: "0.85rem",
        left: "-0.325rem",
        borderRadius: "50%",
        zIndex: "1",
        background:
          colorMode === "dark"
            ? DARK_MODE_TIMELINE_DOT_COLOR
            : LIGHT_MODE_TIMELINE_DOT_COLOR,
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
      }
    : {
        content: `""`,
        position: "absolute",
        width: "0.8rem",
        height: "0.8rem",
        top: "0.5em",
        left: "-0.32rem",
        borderRadius: "50%",
        zIndex: "1",
        background:
          colorMode === "dark"
            ? DARK_MODE_TIMELINE_DOT_COLOR
            : LIGHT_MODE_TIMELINE_DOT_COLOR,
        display: "inline-block",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
      };
};

const timelineContentStyles = (colorMode: ColorMode): BoxProps => {
  return {
    position: "relative",
    mb: "2rem",
    transition: "font-size ease-in-out 0.2s",
    fontSize: "1.3rem",
    color:
      colorMode === "dark" ? DARK_MODE_SUBTLE_TEXT : LIGHT_MODE_SUBTLE_TEXT,
    pl: "2",
    _hover: {
      fontSize: "1.6rem",
      color:
        colorMode === "dark" ? DARK_MODE_DEFAULT_TEXT : LIGHT_MODE_DEFAULT_TEXT,
      cursor: "pointer",
      _before: getPseudoElementStyles(true, colorMode),
    },
    _before: getPseudoElementStyles(false, colorMode),
  };
};

const ExperienceTimelineContainer = ({
  experience,
  onExperienceChange,
}: ExperienceTimelineContainerProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      key={experience.id}
      onClick={() => onExperienceChange(experience)}
      {...timelineContentStyles(colorMode)}
    >
      <ExperienceTimelineContent experience={experience} />
    </Box>
  );
};

export default ExperienceTimelineContainer;
