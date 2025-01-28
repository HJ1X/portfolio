import FancyLink from "@/components/ui/custom/FancyLink";
import { Box, BoxProps } from "@chakra-ui/react";
import { Link } from "react-router";

interface NavItemProps extends BoxProps {
  label: string;
  link: string;
  selected: boolean;
}

const NavItem = ({ label, link, selected, ...rest }: NavItemProps) => {
  return (
    <Box as="span" {...rest}>
      <Link className="inline-flex items-center" to={link}>
        <FancyLink
          fontSize={{ base: "2xl", lg: "inherit" }}
          selected={selected}
        >
          {label}
        </FancyLink>
      </Link>
    </Box>
  );
};

export default NavItem;
