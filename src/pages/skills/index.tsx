import { Box, Flex, GridItem } from "@chakra-ui/react";
import { AiOutlineDatabase } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";
import SkillSection from "./SkillSection";

const skillSections = [
  {
    label: "Frontend Development",
    icon: <VscJson size="48" color="var(--chakra-colors-primary)" fontWeight="bold" />,
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
    icon: <AiOutlineDatabase size="48" color="var(--chakra-colors-primary)" fontWeight="bold" />,
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

const SkillsPage = () => {
  return (
    <Box className="w-full h-full">
      <Flex direction="column" gap="20" justify="center" className="w-3/5 h-full">
        {skillSections.map((section) => (
          <GridItem key={section.label}>
            <SkillSection data={section} />
          </GridItem>
        ))}
      </Flex>
    </Box>
  );
};

export default SkillsPage;
