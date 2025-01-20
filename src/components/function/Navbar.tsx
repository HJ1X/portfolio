import { revealFromLeft } from "@/utils/animation";
import { Flex } from "@chakra-ui/react";
import { motion } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router";
import FancyButton from "../ui/custom/FancyButton";
import FancyLink from "../ui/custom/FancyLink";
import { MotionHeading } from "../ui/Motion";
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
    <Flex width="full" justify="space-between" align="center">
      <MotionHeading
        size="4xl"
        onClick={() => navigate("/")}
        className="cursor-pointer select-none"
        animate={revealFromLeft}
      >
        Himanshu J.
      </MotionHeading>
      <Flex as="nav" align="center" gap="4">
        <Flex as="ul" gap="6" align="center">
          {navItems.map((navItem) => (
            <motion.li key={navItem.label} animate={revealFromLeft}>
              <NavItem
                label={navItem.label}
                link={navItem.link}
                selected={location.pathname === navItem.link}
              />
            </motion.li>
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
      </Flex>
    </Flex>
  );
};

export default Navbar;
