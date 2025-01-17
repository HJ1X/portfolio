import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router";
import ThemeToggleButton from "./ThemeToggleButton";
import FancyButton from "../ui/custom/FancyButton";

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
    <Link to={link}>
      <Text fontWeight="bold" color={selected ? "fg.primary" : ""}>
        {label}
      </Text>
    </Link>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex width="full" justify="space-between" align="center">
      <Heading
        size="4xl"
        onClick={() => navigate("/")}
        className="cursor-pointer select-none"
      >
        Himanshu J.
      </Heading>
      <Flex as="nav" align="center" gap="4">
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
              showIcon={false}
            />
          </li>
        </Flex>
        <ThemeToggleButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
