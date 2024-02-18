import { Box, Text } from "@chakra-ui/react";
import styles from "./ExperienceTimeline.module.css";
import { Experience } from "../consts";

interface ExperienceTimelineProps {
  experienceDetails: Experience[];
  setExperience: (experience: Experience) => void;
}

const ExperienceTimeline = ({
  experienceDetails,
  setExperience,
}: ExperienceTimelineProps) => {
  return (
    <Box className={styles.timeline}>
      {experienceDetails.map((experience) => (
        <Box
          className={styles.experienceSummary}
          key={experience.toString()}
          onClick={() => setExperience(experience)}
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
