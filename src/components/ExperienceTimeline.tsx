import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  DARK_MODE_SUBTLE_TEXT,
  Experience,
  LIGHT_MODE_TIMELINE_BG,
} from "../consts";
import ExperienceTimelineContainer from "./ExperienceTimelineContainer";

interface ExperienceTimelineProps {
  experiences: Experience[];
  onExperienceChange: (experience: Experience) => void;
}

const ExperienceTimeline = ({
  experiences,
  onExperienceChange,
}: ExperienceTimelineProps) => {
  const timelineColor = useColorModeValue(
    LIGHT_MODE_TIMELINE_BG,
    DARK_MODE_SUBTLE_TEXT
  );

  return (
    <Box
      position="relative"
      _after={{
        content: `""`,
        position: "absolute",
        width: "0.2rem",
        background: timelineColor,
        top: 0,
        bottom: 0,
      }}
    >
      {experiences.map((experience) => (
        <ExperienceTimelineContainer
          experience={experience}
          onExperienceChange={onExperienceChange}
          key={experience.id}
        />
      ))}
    </Box>
  );
};

export default ExperienceTimeline;
