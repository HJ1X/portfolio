import { Link, LinkProps } from "@chakra-ui/react";

interface FancyLinkProps extends LinkProps {
  selected: boolean;
}

const FancyLink = ({ selected, children, ...rest }: FancyLinkProps) => {
  return (
    <Link
      fontWeight="bold"
      position="relative"
      color={selected ? "fg.primary.darker" : ""}
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
        width: "0",
        whiteSpace: "nowrap",
        color: "fg.primary",
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
        bg: "fg.primary",
        transitionProperty: "all",
        transitionDuration: "slow",
        transitionTimingFunction: "ease-in",
      }}
      _hover={{
        textDecoration: "none",
        _before: {
          width: selected ? "0" : "full",
        },
        _after: {
          width: "full",
        },
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default FancyLink;
