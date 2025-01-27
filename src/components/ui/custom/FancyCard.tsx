import { Box, Card, CardRootProps } from "@chakra-ui/react";
import { forwardRef, ReactNode } from "react";

interface FancyCardProps extends CardRootProps {
  children: ReactNode;
  selected?: boolean;
}

const FancyCard = forwardRef(
  ({ selected = true, children, ...rest }: FancyCardProps, ref: any) => {
    return (
      <Card.Root
        ref={ref}
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
          bg: "primary",
          transitionProperty: "all",
          transitionDuration: "slow",
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
  }
);

export default FancyCard;
