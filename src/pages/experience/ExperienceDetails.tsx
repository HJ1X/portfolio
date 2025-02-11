import Badge from "@/components/ui/custom/Badge";
import { MotionBox, MotionFlex, MotionHeading } from "@/components/ui/Motion";
import { ExperienceDetails as IExperienceDetails } from "@/data/experienceData";
import { revealFromBottom, revealFromLeft } from "@/lib/animation";
import { getRandomKey } from "@/lib/utils";
import { Em, Flex, Icon, List, Stack, Text } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";

interface ExperienceDetailsProps {
  details: IExperienceDetails | undefined;
}

const ExperienceDetails = ({ details }: ExperienceDetailsProps) => {
  if (!details) {
    return null;
  }

  return (
    <Stack direction="column">
      <MotionHeading
        key={getRandomKey()}
        size={{ base: "3xl", lg: "5xl" }}
        w={{ base: "5/6", lg: "full" }}
        {...revealFromBottom}
        color="primary"
      >
        {details.profile}
      </MotionHeading>
      <MotionFlex
        key={getRandomKey()}
        direction="column"
        mt="-1"
        mb="4"
        {...revealFromBottom}
        transition={{ delay: 0.1 }}
      >
        <Text fontSize="sm" color="fg.muted">
          <Em>
            {details.company}, {details.location}
          </Em>
        </Text>
        <Text fontSize="sm" color="fg.muted">
          <Em>{details.years}</Em>
        </Text>
      </MotionFlex>
      <Flex direction="column" position="relative" overflow="visible" gap="8">
        <List.Root gap="3" listStyle="outside" variant="plain">
          {details.keyPoints.map((point, index) => (
            <MotionBox
              key={getRandomKey()}
              {...revealFromBottom}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <List.Item fontSize={{ base: "md", lg: "lg" }}>
                <List.Indicator>
                  <Icon mt="-0.5" size="sm">
                    <BsArrowRightCircle />
                  </Icon>
                </List.Indicator>
                {point}
              </List.Item>
            </MotionBox>
          ))}
        </List.Root>
        <Flex gap="3" wrap="wrap" pl="6">
          {details.skills.map((skill, i) => (
            <MotionBox
              key={getRandomKey()}
              {...revealFromLeft}
              transition={{
                delay: 0.2 + details.keyPoints.length * 0.1 + 0.05 * i,
              }}
            >
              <Badge>
                <Text fontWeight="bold" fontSize="sm">
                  {skill.name}
                </Text>
              </Badge>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default ExperienceDetails;
