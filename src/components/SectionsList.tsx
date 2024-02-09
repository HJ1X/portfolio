import { Box } from "@chakra-ui/react";
import { useState } from "react";
import sections, { Section } from "../data/sections";
import SectionItem from "./SectionItem";
import { useNavigate } from "react-router-dom";

const SectionsList = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleClick = (section: Section) => {
    setActiveSection(section);
    navigate(section.route);
  };

  return (
    <Box>
      {sections.map((section) => {
        return (
          <SectionItem
            key={section.name}
            section={section}
            isActive={activeSection === section}
            onClick={() => handleClick(section)}
          />
        );
      })}
    </Box>
  );
};

export default SectionsList;
