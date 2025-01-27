import { MotionHeading } from "@/components/ui/Motion";
import { revealFromLeft } from "@/utils/animation";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import NavLinks from "./NavLinks";

const navItems = [
  {
    label: "About",
    link: "/",
  },
  {
    label: "Experience",
    link: "/experience",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Skills",
    link: "/skills",
  },
  {
    label: "Recognitions",
    link: "/recognitions",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex width="full" justify="space-between" align="center" zIndex="dropdown">
      <MotionHeading
        size={{ base: "3xl", lg: "4xl" }}
        onClick={() => navigate("/")}
        className="cursor-pointer select-none"
        {...revealFromLeft}
        transition={{ delay: 0.2 }}
      >
        Himanshu J.
      </MotionHeading>
      <NavLinks navItems={navItems} />
    </Flex>
  );
};

export default Navbar;
