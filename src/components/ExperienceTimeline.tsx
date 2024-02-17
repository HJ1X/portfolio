import { Box, Text } from "@chakra-ui/react";
import { ExperienceDetail } from "./Experience";
import styles from "./ExperienceTimeline.module.css";

interface ExperienceTimelineProps {
  experienceDetails: ExperienceDetail[];
  updateExperienceDataIndex: (index: number) => void;
}

const ExperienceTimeline = ({
  experienceDetails,
  updateExperienceDataIndex,
}: ExperienceTimelineProps) => {
  return (
    <Box className={styles.timeline}>
      {experienceDetails.map((experience, index) => (
        <Box
          className={styles.experienceSummary}
          key={experience.role + index}
          onClick={() => updateExperienceDataIndex(index)}
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
