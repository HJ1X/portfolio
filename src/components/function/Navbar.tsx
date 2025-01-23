import { revealFromLeft } from "@/utils/animation";
import { Flex } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router";
import FancyButton from "../ui/custom/FancyButton";
import FancyLink from "../ui/custom/FancyLink";
import { MotionFlex, MotionHeading } from "../ui/Motion";
import ThemeToggleButton from "./ThemeToggleButton";

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

interface NavItemProps {
  label: string;
  link: string;
  selected: boolean;
}

const NavItem = ({ label, link, selected }: NavItemProps) => {
  return (
    <Link className="inline-flex items-center" to={link}>
      <FancyLink selected={selected}>{label}</FancyLink>
    </Link>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex width="full" justify="space-between" align="center" zIndex="dropdown">
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
        <Flex as="ul" gap="6" align="center">
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
  );
};

export default Navbar;
