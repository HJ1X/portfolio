import { Card, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import useColorVariable from "../hooks/useColorVariable";

interface CanvasAttachedCardProps {
  isActive: boolean;
  children?: ReactNode;
}

const CanvasAttachedCard = ({
  isActive,
  children,
}: CanvasAttachedCardProps) => {
  const defaultBGColor = useColorVariable("CARD_BACKGROUND");

  if (!isActive) {
    return (
      <Card
        backgroundColor="transparent"
        color={defaultBGColor}
        boxShadow=""
        px={4}
        py={2}
      >
          <Text fontSize="md" fontWeight="regular">{children}</Text>
      </Card>
    );
  }

  return (
    <Card backgroundColor="transparent" boxShadow="" px={4} py={2}>
        <Text fontWeight="regular" fontSize="md">
          {children}
        </Text>
    </Card>
  );
};

export default CanvasAttachedCard;
