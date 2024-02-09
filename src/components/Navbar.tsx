import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const Sections = ["About", "Skills", "Experience", "Projects"];
const routePaths = ["/", "/skills", "/experience", "/projects"];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
    navigate(routePaths[tabIndex]);
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
