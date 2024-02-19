import { Box, Text, keyframes, useColorModeValue } from "@chakra-ui/react";
import {
  DARK_MODE_CARD_BG,
  DARK_MODE_DEFAULT_BG,
  DARK_MODE_SUBTLE_TEXT,
  DARK_MODE_TIMELINE_BG,
  Experience,
  LIGHT_MODE_DEFAULT_BG,
  LIGHT_MODE_DEFAULT_TEXT,
  LIGHT_MODE_SUBTLE_TEXT,
  LIGHT_MODE_TIMELINE_BG,
} from "../consts";
import theme from "../theme";

interface ExperienceTimelineProps {
  experiences: Experience[];
  onExperienceChange: (experience: Experience) => void;
}

const getPseudoElementStyles = (isHovered: boolean) => {
  return isHovered
    ? {
        content: `""`,
        position: "absolute",
        width: "0.5rem",
        height: "0.5rem",
        top: "0.85rem",
        left: "-0.15rem",
        borderRadius: "50%",
        zIndex: "1",
        boxShadow:
          "0 0 0 4px black, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
        background: LIGHT_MODE_DEFAULT_BG,
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
      }
    : {
        content: `""`,
        position: "absolute",
        width: "0.313rem",
        height: "0.313rem",
        top: "0.7rem",
        left: "-0.05rem",
        borderRadius: "50%",
        zIndex: "1",
        boxShadow:
          "0 0 0 4px grey, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
        background: DARK_MODE_DEFAULT_BG,
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
      };
};

const ExperienceTimeline = ({
  experiences,
  onExperienceChange,
}: ExperienceTimelineProps) => {
  const timelineColor = useColorModeValue(
    LIGHT_MODE_TIMELINE_BG,
    DARK_MODE_TIMELINE_BG
  );

  const experienceSummaryFontColor = useColorModeValue(
    LIGHT_MODE_SUBTLE_TEXT,
    DARK_MODE_SUBTLE_TEXT
  );

  const lineAnimation = keyframes`
  from {height: 0;}   
  to {height: 100%} 
  `;

  const textAnimation = keyframes`
    0%{
      opacity: 0;
      transform: translateY(-30px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  `;

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
        animation: `${lineAnimation} 4s linear normal`,
      }}
    >
      {experiences.map((experience) => (
        <Box
          key={experience.id}
          onClick={() => onExperienceChange(experience)}
          position="relative"
          mb="2rem"
          transition="font-size ease-in-out 0.2s"
          fontSize="1.3rem"
          animation={`${textAnimation} 1s linear normal`}
          color={experienceSummaryFontColor}
          pl={2}
          _hover={{
            fontSize: "1.6rem",
            color: DARK_MODE_DEFAULT_BG,
            cursor: "pointer",
            _before: getPseudoElementStyles(true),
          }}
          _before={getPseudoElementStyles(false)}
        >
          <Box ml={3}>
            <Text>{experience.role}</Text>
            <Text fontSize="1.1rem">{experience.company}</Text>
            <Text fontSize="1rem">{`${experience.startDate} - ${
              experience.endData ? experience.endData : "Present"
            }`}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceTimeline;
