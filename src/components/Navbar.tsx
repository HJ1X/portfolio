import { Box } from "@chakra-ui/react";
import NavbarItem from "./NavbarItem";
import { useState } from "react";

const Sections = ["About", "Skills", "Experience", "Projects"];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <Box mt="5em" ml="2em" borderRadius="5em">
      {Sections.map((section, index) => {
        return (
          <NavbarItem
            key={index}
            onClick={() => handleClick(index)}
            isActive={activeTab === index}
          >
            {section}
          </NavbarItem>
        );
      })}
    </Box>
  );
};

export default Navbar;
