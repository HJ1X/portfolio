import ThemeToggleButton from "@/components/function/ThemeToggleButton";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/chakra/menu";
import FancyButton from "@/components/ui/custom/FancyButton";
import FancyLink from "@/components/ui/custom/FancyLink";
import { MotionFlex } from "@/components/ui/Motion";
import { revealFromLeft } from "@/utils/animation";
import { Box, Flex, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";

interface NavItemProps {
  label: string;
  link: string;
  selected: boolean;
}

const NavItem = ({ label, link, selected }: NavItemProps) => {
  return (
    <>
      <Box as="span" hideBelow="lg">
        <Link className="inline-flex items-center" to={link}>
          <FancyLink selected={selected}>{label}</FancyLink>
        </Link>
      </Box>
      <Box as="span" hideFrom="lg">
        <ChakraLink asChild textDecoration="none">
          <Link to={link}>{label}</Link>
        </ChakraLink>
      </Box>
    </>
  );
};

interface NavLinksProps {
  navItems: {
    label: string;
    link: string;
  }[];
}

const NavLinks = ({ navItems }: NavLinksProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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
      <Box hideFrom="lg">
        <MenuRoot size="md">
          <MenuTrigger asChild>
            <IconButton variant="outline" size="sm">
              <IoMdMenu />
            </IconButton>
          </MenuTrigger>
          <MenuContent>
            {navItems.map((navItem) => (
              <MenuItem value={navItem.label} key={navItem.label} rounded="sm">
                <NavItem
                  label={navItem.label}
                  link={navItem.link}
                  selected={location.pathname === navItem.link}
                />
              </MenuItem>
            ))}
            <MenuItem value="contact">
              <NavItem
                label="Contact"
                link="/contact"
                selected={location.pathname === "/contact"}
              />
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Box>
    </MotionFlex>
  );
};

export default NavLinks;
