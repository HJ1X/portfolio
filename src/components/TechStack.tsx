import { HStack, Tag } from "@chakra-ui/react";

interface TechStackProps {
  technologies: string[];
}

const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <HStack>
      {technologies.map((technology) => (
        <Tag
          variant="subtle"
          key={technology}
          size="md"
          borderRadius="0.625rem"
        >
          {technology}
        </Tag>
      ))}
    </HStack>
  );
};

export default TechStack;
