import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DataItemProps {
  title: string;
  value: ReactNode;
  gap?: string;
}

const DataItem = ({ title, value, gap }: DataItemProps) => {
  return (
    <Flex direction="column" gap={gap ?? "1.5"}>
      <Heading as="dt" size="md">{title}</Heading>
      {value}
    </Flex>
  );
};

export default DataItem;
