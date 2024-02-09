import { Box, Card, theme } from "@chakra-ui/react";
import { Section } from "../data/sections";

interface NavbarItemProps {
  isActive: boolean;
  section: Section;
  onClick: () => void;
}

const getPseudoElementStyles = (elementType: "before" | "after") => {
  const verticalPlacement = elementType === "before" ? "bottom" : "top";
  const boxShadowVeticalOffset =
    elementType === "before" ? "-0.5rem" : "0.5rem";

  return {
    position: "absolute",
    content: "' '",
    [verticalPlacement]: "-1rem",
    right: 0,
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    boxShadow: `0.5rem ${boxShadowVeticalOffset} ${theme.colors.white}`,
  };
};

const SectionItem = ({ isActive, section, onClick }: NavbarItemProps) => {
  return (
    <Box onClick={onClick} cursor="pointer">
      {isActive ? (
        <Card
          zIndex="4"
          _before={getPseudoElementStyles("before")}
          _after={getPseudoElementStyles("after")}
          borderLeftRadius="xl"
          // TODO: Update box-shadow if required
          boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          clipPath="inset(-50px 0px -50px -50px)"
          p={4}
        >
          {section.name}
        </Card>
      ) : (
        <Card backgroundColor="transparent" color="white" boxShadow="" p={4}>
          {section.name}
        </Card>
      )}
    </Box>
  );
};

export default SectionItem;
