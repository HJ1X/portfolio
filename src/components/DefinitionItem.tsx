import { Box, Heading, SystemProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionItemProps extends SystemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({
  children,
  term,
  ...chakraSystemProps
}: DefinitionItemProps) => {
  if (!children || children.toString() === "") return null;

  return (
    <Box {...chakraSystemProps}>
      <Heading as="dt" mb={2} fontSize="2xl" fontWeight="bolder">
        {term}
      </Heading>
      <Text as="dd" fontSize="md">
        {children}
      </Text>
    </Box>
  );
};

export default DefinitionItem;
