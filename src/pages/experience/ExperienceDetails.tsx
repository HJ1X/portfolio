import Badge from "@/components/ui/Badge";
import DataItem from "@/components/ui/DataItem";
import ScrollArea from "@/components/ui/scroll-area";
import {
  Box,
  Card,
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
    <Stack direction="column" pb="5">
      <Heading size="5xl">{detail.profile}</Heading>
      <Flex direction="column" gap="1" mt="-1" mb="6">
        <Text fontSize="sm" color="fg.muted">
          {detail.company}, {detail.location}
        </Text>
        <Text fontSize="sm" color="fg.muted">
          {detail.years}
        </Text>
      </Flex>
      <Flex direction="column" position="relative" overflow="visible">
        <Card.Root width="4/5" bg="primary" border="none">
          <Card.Body>
            <Flex direction="column" gap="6">
              <Text fontWeight="medium" fontSize="sm" color="gray.50">
                {detail.description}
              </Text>
              <Flex gap="3" wrap="wrap" width="3/5">
                {detail.skills.map((skill) => (
                  <Badge key={skill} bgColor="bg" border="none">
                    <Text fontSize="sm">{skill}</Text>
                  </Badge>
                ))}
              </Flex>
            </Flex>
          </Card.Body>
        </Card.Root>
        <Flex position="absolute" top="40" width="full" justify="right">
          <Card.Root width="1/2" right="0" bg="secondary" border="none">
            <Card.Body>
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
            </Card.Body>
          </Card.Root>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default ExperienceDetails;
