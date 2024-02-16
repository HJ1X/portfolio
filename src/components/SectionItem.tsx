import { Box } from "@chakra-ui/react";
import { Section } from "../data/sections";
import CanvasAttachedCard from "./CanvasAttachedCard";

interface SectionItem {
  isActive: boolean;
  section: Section;
  onClick: () => void;
}

const SectionItem = ({ isActive, section, onClick }: SectionItem) => {
  return (
    <Box onClick={onClick} cursor="pointer">
      <CanvasAttachedCard isActive={isActive}>
        {section.name}
      </CanvasAttachedCard>
    </Box>
  );
};

export default SectionItem;
