import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router";
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
    label: "Testimonials",
    link: "/testimonials",
  },
];

interface NavItemProps {
  label: string;
  link: string;
  selected: boolean;
}

const NavItem = ({ label, link, selected }: NavItemProps) => {
  return (
    <Link to={link}>
      <Text fontWeight="medium" color={selected ? "primary" : ""}>
        {label}
      </Text>
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();

  return (
    <Flex width="full" justify="space-between" align="center">
      <Heading size="4xl">Himanshu J.</Heading>
      <Flex as="nav" align="center" gap="5">
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
        </Flex>
          <ThemeToggleButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
