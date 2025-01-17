import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Icon,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiArrowRightLine } from "react-icons/ri";

interface ButtonProps extends ChakraButtonProps {
  label: string;
  theme?: "primary" | "secondary";
  icon?: ReactNode;
  showIcon?: boolean;
}

const Button = ({
  label,
  theme = "primary",
  showIcon = true,
  icon = <RiArrowRightLine />,
  ...rest
}: ButtonProps) => {
  if (!showIcon) {
    return (
      <ChakraButton
        border="none"
        className="group"
        bg={theme === "primary" ? "fg.primary" : "fg.secondary"}
        _before={{
          content: `""`,
          position: "absolute",
          rounded: "sm",
          top: 0,
          left: "0",
          width: "0",
          height: "100%",
          bg: theme === "primary" ? "fg.primary.darker" : "fg.secondary.dark",
          zIndex: "hide",
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
        {label}{" "}
      </ChakraButton>
    );
  }

  return (
    <ChakraButton
      border="none"
      position="relative"
      className="group"
      bg={theme === "primary" ? "fg.primary" : "fg.secondary"}
      transitionProperty="all"
      transitionDuration="slow"
      transitionTimingFunction="ease-in"
      _before={{
        content: `""`,
        position: "absolute",
        rounded: "sm",
        top: 0,
        left: "0",
        width: "0",
        height: "100%",
        bg: theme === "primary" ? "fg.primary.darker" : "fg.secondary.dark",
        zIndex: "hide",
        transitionProperty: "all",
        transitionDuration: "slow",
        transitionTimingFunction: "ease-in",
      }}
      _hover={{
        pr: "10",
        _before: {
          width: "full",
        },
        transitionProperty: "all",
        transitionDuration: "moderate",
        transitionTimingFunction: "ease-in",
      }}
      {...rest}
    >
      {label}{" "}
      <Icon
        position="absolute"
        right="0"
        opacity="0"
        size="md"
        visibility="hidden"
        transitionProperty="all"
        transitionDuration="slow"
        transitionTimingFunction="ease-in"
        _groupHover={{
          right: "3",
          opacity: "1",
          visibility: "visible",
          transitionProperty: "all",
          transitionDuration: "moderate",
          transitionTimingFunction: "ease-in",
        }}
      >
        {icon}
      </Icon>
    </ChakraButton>
  );
};

export default Button;
