import {
  HStack,
  Icon,
  SystemProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  DARK_MODE_DEFAULT_TEXT,
  LIGHT_MODE_DEFAULT_TEXT,
  TRANSITION_SLOWER,
} from "../consts";

interface LinkProps extends SystemProps {
  children?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  handleClick: () => void;
}

const Link = ({
  children,
  leftIcon,
  rightIcon,
  handleClick,
  ...chakraSystemProps
}: LinkProps) => {
  if (!children) return;

  const fontColor = useColorModeValue(
    LIGHT_MODE_DEFAULT_TEXT,
    DARK_MODE_DEFAULT_TEXT
  );

  return (
    <HStack
      fontSize="xl"
      alignItems="center"
      display="inline-flex"
      position="relative"
      _hover={{
        cursor: "pointer",
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "bottom center",
        },
      }}
      _after={{
        content: "''",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: "-0.1rem",
        left: 0,
        backgroundColor: fontColor,
        transformOrigin: "bottom center",
        transition: TRANSITION_SLOWER,
      }}
      {...chakraSystemProps}
      onClick={handleClick}
    >
      {leftIcon && <Icon as={leftIcon} mr={2} />}
      <Text as="b">{children}</Text>
      {rightIcon && <Icon as={rightIcon} ml={2} />}
    </HStack>
  );
};

export default Link;
