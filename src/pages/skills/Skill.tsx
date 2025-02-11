import { Flex, Image, Text } from "@chakra-ui/react";

interface SkillProps {
  skill: { name: string; logo: string };
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="2"
      borderWidth="thin"
      rounded="md"
      w={{ base: "24", lg: "28" }}
      h={{ base: "24", lg: "28" }}
      aspectRatio="square"
      p="4"
      bgColor="white"
      color="gray.900"
    >
      <Image
        aspectRatio="square"
        h={{ base: "10", lg: "12" }}
        objectFit="contain"
        src={skill.logo}
      />
      <Text fontSize="sm" fontWeight="bold" mb="-1">
        {skill.name}
      </Text>
    </Flex>
  );
};

export default Skill;
