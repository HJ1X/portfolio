import { MotionBox, MotionFlex } from "@/components/ui/Motion";
import { experienceDetails } from "@/data/experienceData";
import { revealFromBottom } from "@/utils/animation";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ExperienceDetails from "./ExperienceDetails";
import Timeline from "./Timeline";
import { IoMdClose } from "react-icons/io";

interface ExperiencePageMobileProps {
  selectedProfile: {
    companyNumber: number;
    profileNumber: number;
  };
  onProfileChange: (companyNumber: number, profileNumber: number) => void;
}

const ExperiencePageMobile = ({
  selectedProfile,
  onProfileChange,
}: ExperiencePageMobileProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const details = experienceDetails.find(
    (detail) =>
      detail.companyNumber === selectedProfile.companyNumber &&
      detail.profileNumber === selectedProfile.profileNumber
  );

  return (
    <Flex h="full" align="center">
      {!showDetails && (
        <Box width="full" mt="-10">
          <Timeline
            selectedProfile={selectedProfile}
            onProfileChange={(cn, pn) => {
              onProfileChange(cn, pn);
              setShowDetails(true);
            }}
          />
        </Box>
      )}
      {showDetails && (
        <Box h="full" w="full" pt="14" position="relative">
          <MotionFlex
            position="absolute"
            left="0"
            right="0"
            w="full"
            zIndex="docked"
            justify="end"
            {...revealFromBottom}
          >
            <IconButton
              variant="outline"
              rounded="full"
              size="lg"
              onClick={() => setShowDetails(false)}
            >
              <IoMdClose />
            </IconButton>
          </MotionFlex>
          <ExperienceDetails details={details} />
        </Box>
      )}
    </Flex>
  );
};

export default ExperiencePageMobile;
