import { Box, Link, LinkProps } from "@chakra-ui/react";

interface FancyLinkProps extends LinkProps {
  selected: boolean;
}

const FancyLink = ({ selected, children, ...rest }: FancyLinkProps) => {
  return (
    <Link
      fontWeight="bold"
      position="relative"
      rounded="none"
      overflow="hidden"
      display="inline-block"
      transitionProperty="all"
      transitionDuration="slow"
      transitionTimingFunction="ease-in"
      // text color transition
      _before={{
        content: `"${children as string}"`,
        position: "absolute",
        overflow: "hidden",
        top: 0,
        left: "0",
        width: selected ? "full" : "0",
        color: "primary.darker",
        whiteSpace: "nowrap",
        transitionProperty: "all",
        transitionDuration: "slow",
        transitionTimingFunction: "ease-in",
      }}
      // underline transition
      _after={{
        content: `""`,
        display: "block",
        width: selected ? "full" : 0,
        height: 0.5,
        rounded: "2xs",
        bg: "fg",
        transitionProperty: "all",
        transitionDuration: "slow",
        transitionTimingFunction: "ease-in",
      }}
      _hover={{
        textDecoration: "none",
        _after: {
          width: "full",
        },
      }}
      {...rest}
    >
      {/* underline transition on select */}
      <Box
        as="span"
        position="absolute"
        bottom="0"
        left="0"
        height="0.5"
        rounded="2xs"
        zIndex="docked"
        bg="primary.darker"
        width={selected ? "full" : "0"}
        transitionProperty="all"
        transitionDuration="slow"
        transitionTimingFunction="ease-in"
      ></Box>
      {children}
    </Link>
  );
};

export default FancyLink;
