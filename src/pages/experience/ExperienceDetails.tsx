import Badge from "@/components/ui/Badge";
import DataItem from "@/components/ui/DataItem";
import ScrollArea from "@/components/ui/scroll-area";
import {
  Box,
  Card,
  Em,
  Flex,
  Grid,
  Heading,
  Icon,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import { experienceDetails } from "@/data/experienceData";
import { RiArrowRightLine } from "react-icons/ri";

interface ExperienceDetailsProps {
  companyNumber: number;
  profileNumber: number;
}

const ExperienceDetails = ({
  companyNumber,
  profileNumber,
}: ExperienceDetailsProps) => {
  const detail = experienceDetails.find(
    (detail) =>
      detail.companyNumber === companyNumber &&
      detail.profileNumber === profileNumber
  );

  if (!detail) {
    return null;
  }

  return (
    <Stack direction="column">
      <Heading size="5xl">{detail.profile}</Heading>
      <Flex direction="column" gap="1" mt="-1" mb="6">
        <Text fontSize="sm" color="fg.muted">
          <Em>
            {detail.company}, {detail.location}
          </Em>
        </Text>
        <Text fontSize="sm" color="fg.muted">
          <Em>{detail.years}</Em>
        </Text>
      </Flex>
      <Flex direction="column" position="relative" overflow="visible" gap="10">
        <List.Root gap="2" listStyle="outside" variant="plain">
          {detail.keyPoints.map((point) => (
            <List.Item fontSize="sm" key={point}>
              <List.Indicator>
                <Icon>
                  <RiArrowRightLine />
                </Icon>
              </List.Indicator>
              {point}
            </List.Item>
          ))}
        </List.Root>
        <Flex gap="3" wrap="wrap" pl="5">
          {detail.skills.map((skill) => (
            <Badge key={skill}>
              <Text fontSize="sm">{skill}</Text>
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default ExperienceDetails;
