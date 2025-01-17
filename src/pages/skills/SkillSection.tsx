import { ProgressBar } from "@/components/ui/chakra/progress";
import Badge from "@/components/ui/custom/Badge";
import { Box, Flex, Heading, ProgressRoot } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SkillSectionProps {
  data: {
    label: string;
    icon: ReactNode;
    value: number;
    skills: string[];
  };
}

const SkillSection = ({ data }: SkillSectionProps) => {
  return (
    <>
      <Flex align="end" mb="8">
        <Box mr="4">{data.icon}</Box>
        <Flex direction="column" className="flex-grow">
          <Flex justify="space-between" align="end" className="mb-2">
            <Heading size="4xl">{data.label}</Heading>
            <Heading size="xl">{data.value}%</Heading>
          </Flex>
          <ProgressRoot
            shape="full"
            variant="subtle"
            animated={true}
            className="w-full"
            value={data.value}
          >
            <ProgressBar />
          </ProgressRoot>
        </Flex>
      </Flex>
      <Flex wrap="wrap" gap="3">
        {data.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </Flex>
    </>
  );
};

export default SkillSection;
