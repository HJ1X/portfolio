import Badge from "@/components/ui/Badge";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { Box, Flex, GridItem, Heading } from "@chakra-ui/react";
import { AiOutlineDatabase } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";

const skillSections = [
  {
    label: "Frontend Development",
    icon: <VscJson size="48" />,
    value: 80,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "Backend Development",
    icon: <AiOutlineDatabase size="48" />,
    value: 65,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
      "Docker",
      "Nginx",
    ],
  },
];

const Skills = () => {
  return (
    <Box className="w-full h-full">
      <Flex direction="column" gap="20" justify="center" className="w-3/5 h-full">
        {skillSections.map((section) => (
          <GridItem key={section.label}>
            <Flex align="end" mb="8">
              <Box mr="4">{section.icon}</Box>
              <Flex direction="column" className="flex-grow">
                <Flex justify="space-between" align="end" className="mb-2">
                  <Heading size="4xl">{section.label}</Heading>
                  <Heading size="xl">{section.value}%</Heading>
                </Flex>
                <ProgressRoot
                  shape="full"
                  variant="subtle"
                  className="w-full"
                  value={section.value}
                >
                  <ProgressBar />
                </ProgressRoot>
              </Flex>
            </Flex>
            <Flex wrap="wrap" gap="3">
              {section.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </Flex>
          </GridItem>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
