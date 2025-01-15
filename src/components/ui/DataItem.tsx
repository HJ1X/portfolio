import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DataItemProps {
  title: string;
  value: ReactNode;
  gap?: number;
}

const DataItem = ({ title, value, gap }: DataItemProps) => {
  return (
    <Flex direction="column" gap={gap || 2}>
      <Heading as="dt">{title}</Heading>
      {value}
    </Flex>
  );
};

export default DataItem;
