import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BadgeProps extends FlexProps {
  children: ReactNode;
  hoverContent?: ReactNode;
}

const Badge = ({ hoverContent, children, ...rest }: BadgeProps) => {
  if (!hoverContent) {
    return (
      <Flex
        userSelect="none"
        color="fg.primary"
        borderColor="fg.primary"
        borderWidth="1px"
        borderRadius="md"
        px="4"
        py="2"
        justify="center"
        align="center"
        {...rest}
      >
        {children}
      </Flex>
    );
  }

  return (
    <Flex
      userSelect="none"
      position="relative"
      color="fg.primary"
      borderColor="fg.primary"
      borderWidth="1px"
      rounded="md"
      className="group"
      px="4"
      py="2"
      justify="center"
      align="center"
      {...rest}
    >
      <Box
        position="absolute"
        width="calc(100% + 2px)"
        rounded="md"
        top="-1px"
        left="-1px"
        height="0"
        overflow="hidden"
        visibility="hidden"
        transitionProperty="all"
        transitionDuration="slow"
        transitionTimingFunction="ease-in"
        _groupHover={{
          height: "28",
          visibility: "visible",
          transitionProperty: "size",
          transitionDuration: "slow",
          transitionTimingFunction: "ease-in",
        }}
      >
        <Flex
          h="full"
          direction="column"
          color="gray.50"
          bgColor="fg.primary"
        >
          {hoverContent}
        </Flex>
      </Box>
      {children}
    </Flex>
  );
};

export default Badge;
