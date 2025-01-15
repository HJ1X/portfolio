import {
  Card,
  TimelineConnector,
  TimelineContent,
  TimelineIndicator,
  TimelineItem,
  TimelineRoot,
  TimelineSeparator,
  TimelineTitle,
} from "@chakra-ui/react";
import { useState } from "react";

const timelineData = [
  {
    number: 3,
    company: "Tata Consultancy Services",
    profiles: [
      {
        title: "Software Engineer",
        years: "Dec 2023 - Present",
      },
      {
        title: "Product Engineer",
        years: "Aug 2022 - Nov 2023",
      },
    ],
  },
  {
    number: 2,
    company: "Tata Consultancy Services",
    profiles: [
      {
        title: "Project Intern",
        years: "Jun 2021 - Aug 2021",
      },
    ],
  },
  {
    number: 1,
    company: "Humaps",
    profiles: [
      {
        title: "Web Developer Intern",
        years: "Jan 2021 - Mar 2021",
      },
    ],
  },
];

const Timeline = () => {
  const defaultProfile = timelineData[0].profiles[0].years;
  const [selectedProfile, setSelectedProfile] = useState(defaultProfile);

  return (
    <TimelineRoot size="lg" width="xs">
      {timelineData.map((item) => (
        <TimelineItem key={item.number}>
          <TimelineConnector>
            <TimelineSeparator />
            <TimelineIndicator>{item.number}</TimelineIndicator>
          </TimelineConnector>
          <TimelineContent>
            <TimelineTitle>{item.company}</TimelineTitle>
            {item.profiles.map((profile) => (
              <Card.Root
                key={profile.years}
                size="sm"
                width="2xs"
                cursor="pointer"
                transition="all"
                bg={selectedProfile === profile.years ? "primary" : ""}
                _hover={{
                  bg:
                    selectedProfile === profile.years
                      ? "primary"
                      : "primary.light",
                }}
                onClick={() => {
                  setSelectedProfile(profile.years);
                }}
              >
                <Card.Body>
                  <Card.Title>{profile.title}</Card.Title>
                  <Card.Description>{profile.years}</Card.Description>
                </Card.Body>
              </Card.Root>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineRoot>
  );
};

export default Timeline;
