import { Heading, HeadingProps } from "@chakra-ui/react";

interface FancyHeadingProps extends HeadingProps {
  theme?: "primary" | "secondary";
}

const FancyHeading = ({
  children,
  theme = "primary",
  ...rest
}: FancyHeadingProps) => {
  return (
    <Heading
      color={theme === "primary" ? "fg.primary" : "fg.secondary"}
      position="relative"
      overflow="hidden"
      display="inline-block"
      _before={{
        content: `"${children as string}"`,
        position: "absolute",
        overflow: "hidden",
        top: 0,
        left: "0",
        width: "0",
        whiteSpace: "nowrap",
        color:
          theme === "primary" ? "fg.primary.darker" : "fg.secondary.darker",
        transitionProperty: "all",
        transitionDuration: "slow",
        transitionTimingFunction: "ease-in",
      }}
      _hover={{
        _before: {
          width: "full",
        },
      }}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default FancyHeading;
