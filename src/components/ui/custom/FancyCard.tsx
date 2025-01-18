import { Box, Card, CardRootProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FancyCardProps extends CardRootProps {
  children: ReactNode;
  selected?: boolean;
}

const FancyCard = ({ selected = true, children, ...rest }: FancyCardProps) => {
  return (
    <Card.Root
      aria-selected={selected}
      transition="all"
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: "full",
        rounded: "md",
        zIndex: "base",
        bg: "gray.subtle",
        transitionProperty: "all",
        transitionDuration: "moderate",
        transitionTimingFunction: "ease-in",
      }}
      _after={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: "full",
        rounded: "md",
        zIndex: "base",
        bg: "bg.primary",
        transitionProperty: "all",
        transitionDuration: "moderate",
        transitionTimingFunction: "ease-in",
      }}
      _hover={{
        _before: {
          width: selected ? 0 : "full",
        },
      }}
      _selected={{
        _after: {
          width: "full",
        },
      }}
      {...rest}
    >
      <Box zIndex="docked">{children}</Box>
    </Card.Root>
  );
};

export default FancyCard;
