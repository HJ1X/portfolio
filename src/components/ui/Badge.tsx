import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      borderColor="border"
      borderWidth="1px"
      borderRadius="md"
      className="px-3 py-2"
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  );
};

export default Badge;
