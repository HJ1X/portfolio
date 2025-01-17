import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BadgeProps extends FlexProps {
  children: ReactNode;
}

const Badge = ({ children, ...rest }: BadgeProps) => {
  return (
    <Flex
      borderColor="fg"
      borderWidth="1px"
      borderRadius="md"
      className="px-3 py-2"
      justify="center"
      align="center"
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Badge;
