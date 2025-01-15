import {
  Flex,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FiBriefcase } from "react-icons/fi";
import Timeline from "./Timeline";
import ExperienceDetails from "./ExperienceDetails";

const WorkExperience = () => {
  return (
    <Flex direction="column" height="full">
      <Flex align="center" gap="3">
        <Icon fontSize="4xl" color="primary">
          <FiBriefcase />
        </Icon>
        <Heading size="4xl" color="primary">
          Work
        </Heading>
      </Flex>
      <Flex px="1" pt="8" gap="20" className="h-1 flex-grow">
        <Timeline />
        <ExperienceDetails />
      </Flex>
    </Flex>
  );
};

export default WorkExperience;
