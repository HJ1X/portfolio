import { MotionFancyCard } from "@/components/ui/Motion";
import { profileTimeline } from "@/data/experienceData";
import { revealFromBottom, revealFromLeft } from "@/lib/animation";
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
                    position="relative"
                    _before={{
                      content: `"${profile.title}"`,
                      position: "absolute",
                      overflow: "hidden",
                      top: 0,
                      left: "0",
                      width: isSelectedProfile(item.number, profile.number)
                        ? "full"
                        : "0",
                      color: "gray.contrast",
                      whiteSpace: "nowrap",
                      transitionProperty: "all",
                      transitionDuration: "slow",
                      transitionTimingFunction: "ease-in",
                    }}
                    transitionDuration="slow"
                    transitionProperty="all"
                  >
                    {profile.title}
                  </Card.Title>
                  <Card.Description
                    position="relative"
                    transitionDuration="slow"
                    transitionProperty="all"
                    _before={{
                      content: `"${profile.years}"`,
                      position: "absolute",
                      overflow: "hidden",
                      top: 0,
                      left: "0",
                      width: isSelectedProfile(item.number, profile.number)
                        ? "full"
                        : "0",
                      color: "gray.contrast",
                      whiteSpace: "nowrap",
                      transitionProperty: "all",
                      transitionDuration: "slow",
                      transitionTimingFunction: "ease-in",
                    }}
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
