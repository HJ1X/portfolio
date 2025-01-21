import FancyCard from "@/components/ui/custom/FancyCard";
import { MotionFancyCard } from "@/components/ui/Motion";
import { profileTimeline } from "@/data/experienceData";
import { revealFromBottom, revealFromLeft } from "@/utils/animation";
import {
  Card,
  Heading,
  Image,
  TimelineConnector,
  TimelineContent,
  TimelineIndicator,
  TimelineItem,
  TimelineRoot,
  TimelineSeparator,
  TimelineTitle,
} from "@chakra-ui/react";
import { motion } from "motion/react";

interface TimelineProps {
  selectedProfile: {
    companyNumber: number;
    profileNumber: number;
  };
  onProfileChange: (companyNumber: number, profileNumber: number) => void;
}

const MotionTimelineRoot = motion.create(TimelineRoot, {
  forwardMotionProps: true,
});

const Timeline = ({ selectedProfile, onProfileChange }: TimelineProps) => {
  const isSelectedProfile = (companyNumber: number, profileNumber: number) => {
    return (
      selectedProfile.companyNumber === companyNumber &&
      selectedProfile.profileNumber === profileNumber
    );
  };

  return (
    <MotionTimelineRoot size="xl" {...revealFromLeft}>
      {profileTimeline.map((item) => (
        <TimelineItem key={item.number}>
          <TimelineConnector>
            <TimelineSeparator
              insetInlineStart="4.5"
              borderInlineStartWidth="medium"
            />
            <TimelineIndicator h="10" w="10">
              <Image src={item.logo} p="2.5" />
            </TimelineIndicator>
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle mt="0.5">
              <Heading size="2xl">{item.company}</Heading>
            </TimelineTitle>
            {item.profiles.map((profile) => (
              <MotionFancyCard
                key={profile.years}
                size="sm"
                width="2xs"
                cursor="pointer"
                {...revealFromBottom}
                transition={{ delay: 0.2 }}
                selected={isSelectedProfile(item.number, profile.number)}
                onClick={() => onProfileChange(item.number, profile.number)}
              >
                <Card.Body>
                  <Card.Title
                    transitionDuration="slow"
                    transitionProperty="all"
                    color={
                      isSelectedProfile(item.number, profile.number)
                        ? "gray.50"
                        : ""
                    }
                  >
                    {profile.title}
                  </Card.Title>
                  <Card.Description
                    transitionDuration="slow"
                    transitionProperty="all"
                    color={
                      isSelectedProfile(item.number, profile.number)
                        ? "gray.200"
                        : ""
                    }
                  >
                    {profile.years}
                  </Card.Description>
                </Card.Body>
              </MotionFancyCard>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </MotionTimelineRoot>
  );
};

export default Timeline;
