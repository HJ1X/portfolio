import { MotionBox, MotionHeading } from "@/components/ui/Motion";
import { Skill as ISkill } from "@/data/skillsData";
import { grow, revealFromBottom, revealFromLeft } from "@/lib/animation";
import Skill from "@/pages/skills/Skill";
import { Flex, Text } from "@chakra-ui/react";

interface SkillSectionProps {
  title: string;
  description: string;
  skills: ISkill[];
}

const SkillSection = ({ title, skills, description }: SkillSectionProps) => {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <MotionHeading size="4xl" {...revealFromLeft}>
          {title}
        </MotionHeading>
        <MotionBox h="1" bg="primary" rounded="sm" {...grow} />
      </Flex>
      <Flex
        w="full"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "5", lg: "0" }}
      >
        <MotionBox
          w={{ base: "full", lg: "1/3" }}
          {...revealFromBottom}
          transition={{ delay: 0.2 }}
        >
          <Text>{description}</Text>
        </MotionBox>
        <Flex
          wrap="wrap"
          w={{ base: "full", lg: "2/3" }}
          gap="6"
          justify={{ base: "start", lg: "end" }}
        >
          {skills.map((skill, i) => (
            <MotionBox
              key={skill.name}
              {...revealFromBottom}
              transition={{ delay: 0.4 + 0.1 * i }}
            >
              <Skill skill={skill} />
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SkillSection;
