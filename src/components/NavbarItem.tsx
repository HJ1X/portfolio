import { Card, theme } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavbarItemProps {
  isActive: Boolean;
  children: ReactNode;
  onClick: () => void;
}

const NavbarItem = ({ isActive, children, onClick }: NavbarItemProps) => {
  return (
    <Card
      onClick={onClick}
      zIndex="4"
      boxShadow=""
      borderLeftRadius="xl"
      p={4}
      backgroundColor={isActive ? "white" : "transparent"}
      color={isActive ? "black" : "white"}
      _before={
        isActive && {
          position: "absolute",
          content: "' '",
          bottom: "-1rem",
          right: 0,
          width: "1rem",
          height: "1rem",
          borderRadius: "50%",
          boxShadow: "0.5rem -0.5rem " + theme.colors.white,
        }
      }
      _after={
        isActive && {
          position: "absolute",
          content: "' '",
          top: "-1rem",
          right: 0,
          width: "1rem",
          height: "1rem",
          borderRadius: "50%",
          boxShadow: "0.5rem 0.5rem " + theme.colors.white,
        }
      }
    >
      {children}
    </Card>
  );
};

export default NavbarItem;
