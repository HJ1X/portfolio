import { Skill as ISkill } from "@/data/skillsData";
import { Flex, Icon, Text } from "@chakra-ui/react";

interface SkillProps {
  skill: ISkill;
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
      aspectRatio="square"
      p="4"
    >
      <Icon size="2xl">{skill.icon}</Icon>
      <Text fontSize="sm" fontWeight="bold" mb="-1">{skill.name}</Text>
    </Flex>
  );
};

export default Skill;
