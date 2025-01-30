import ThemeToggleButton from "@/components/function/ThemeToggleButton";
import FancyButton from "@/components/ui/custom/FancyButton";
import { MotionFlex, MotionHeading } from "@/components/ui/Motion";
import { revealFromLeft } from "@/lib/animation";
import { Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router";
import NavbarMobile from "./indexMobile";
import NavItem from "./NavItem";

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

interface NavbarProps {
  onOutletOverflowHidden: (value: boolean) => void;
}

const Navbar = ({ onOutletOverflowHidden }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Flex
        w="full"
        justify="space-between"
        align="center"
        zIndex="overlay"
        hideBelow="lg"
      >
        <MotionHeading
          size="4xl"
          onClick={() => navigate("/")}
          className="cursor-pointer select-none"
          {...revealFromLeft}
          transition={{ delay: 0.2 }}
        >
          Himanshu J.
        </MotionHeading>
        <MotionFlex
          as="nav"
          align="center"
          gap="4"
          {...revealFromLeft}
          transition={{ delay: 0.2 }}
        >
          <Flex as="ul" gap="6" align="center" hideBelow="lg">
            {navItems.map((navItem) => (
              <li key={navItem.label}>
                <NavItem
                  label={navItem.label}
                  link={navItem.link}
                  selected={location.pathname === navItem.link}
                />
              </li>
            ))}
            <li>
              <FancyButton
                ml="1"
                label="Contact"
                onClick={() => navigate("/contact")}
                size="sm"
                theme="primary"
              />
            </li>
          </Flex>
          <ThemeToggleButton />
        </MotionFlex>
      </Flex>
      <NavbarMobile
        onOutletOverflowHidden={onOutletOverflowHidden}
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;
