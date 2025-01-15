import { Card, Flex, Heading, Icon } from "@chakra-ui/react";
import { LuGraduationCap } from "react-icons/lu";

const EducationHistory = () => {
  return (
    <Flex direction="column">
      <Flex align="center" gap="3">
        <Icon fontSize="4xl" color="primary">
          <LuGraduationCap />
        </Icon>
        <Heading size="4xl" color="primary">
          Education
        </Heading>
      </Flex>
      <Flex px="2" pt="8" gap="20">
        <Card.Root bg="primary" variant="subtle">
          <Card.Header>
            <Card.Title>Bharati Vidyapeeth University</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              tenetur repudiandae, minima necessitatibus recusandae nihil iure
              excepturi non alias molestiae?
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Flex>
    </Flex>
  );
};

export default EducationHistory;
