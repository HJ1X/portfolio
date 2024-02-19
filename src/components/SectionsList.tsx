import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import sections, { Section } from "../data/sections";
import SectionItem from "./SectionItem";
import { useLocation, useNavigate } from "react-router-dom";

const getActiveSection = (urlPath: string) => {
  const sectionDerivedFromPath = sections.find((section) =>
    urlPath.substring(1).includes(section.id)
  );

  if (!sectionDerivedFromPath) return sections[0];
  return sectionDerivedFromPath;
};

const SectionsList = () => {
  const navigate = useNavigate();
  const { pathname: urlPath } = useLocation();
  const [activeSection, setActiveSection] = useState(getActiveSection(urlPath));

  useEffect(() => {
    setActiveSection(getActiveSection(urlPath));
  }, [urlPath]);

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
