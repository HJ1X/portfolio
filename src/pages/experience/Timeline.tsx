import FancyCard from "@/components/ui/custom/FancyCard";
import { profileTimeline } from "@/data/experienceData";
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
  TimelineTitle
} from "@chakra-ui/react";

interface TimelineProps {
  selectedProfile: {
    companyNumber: number;
    profileNumber: number;
  };
  onProfileChange: (companyNumber: number, profileNumber: number) => void;
}

const Timeline = ({ selectedProfile, onProfileChange }: TimelineProps) => {
  const isSelectedProfile = (companyNumber: number, profileNumber: number) => {
    return (
      selectedProfile.companyNumber === companyNumber &&
      selectedProfile.profileNumber === profileNumber
    );
  };

  return (
    <TimelineRoot size="xl">
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
              <FancyCard
                key={profile.years}
                size="sm"
                width="2xs"
                cursor="pointer"
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
              </FancyCard>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineRoot>
  );
};

export default Timeline;
