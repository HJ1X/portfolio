import { useEffect } from "react";
import { MotionBox, MotionText } from "../ui/Motion";
import HumapsLogo from "@/assets/images/companies/humaps-logo.png";
import TCSLogo from "@/assets/images/companies/tcs-logo.png";
import HimanshuImg from "@/assets/images/profile/Himanshu.png";
import CallBuddyLogo from "@/assets/images/projects/call-buddy/logo.png";
import CallBuddyCover from "@/assets/images/projects/call-buddy/cover.png";
import AuroraLogo from "@/assets/images/projects/aurora/logo.png";
import AuroraCover from "@/assets/images/projects/aurora/cover.png";
import CinePlanetLogo from "@/assets/images/projects/cineplanet/logo.png";
import CinePlanetCover from "@/assets/images/projects/cineplanet/cover.png";
import SupporTroopsCover from "@/assets/images/projects/supporTroops/cover.png";
import SupporTroopsLogo from "@/assets/images/projects/supporTroops/logo.png";
import { Flex, Text } from "@chakra-ui/react";
import { fadeToTop } from "@/lib/animation";

const imageSrcset = [
  HumapsLogo,
  TCSLogo,
  HimanshuImg,
  CallBuddyLogo,
  CallBuddyCover,
  AuroraLogo,
  AuroraCover,
  CinePlanetLogo,
  CinePlanetCover,
  SupporTroopsCover,
  SupporTroopsLogo,
];

interface LoadingScreenProps {
  setLoading: (loading: boolean) => void;
}

const LoadingScreen = ({ setLoading }: LoadingScreenProps) => {
  useEffect(() => {
    const imgLoadPromises: Promise<string>[] = [];
    imageSrcset.forEach((src) => {
      imgLoadPromises.push(
        new Promise((res) => {
          const img = new Image();
          img.addEventListener("load", () => {
            res("");
          });
          img.addEventListener("error", () => {
            res("");
          });
          img.src = src;
        })
      );
    });

    Promise.all(imgLoadPromises).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <MotionBox
      zIndex="max"
      position="fixed"
      height="100vh"
      bg="fg"
      w="full"
      exit={{
        left: "100%",
        width: 0,
      }}
      transition={{ delay: 0.3 }}
    >
      <Flex h="full" w="full" justify="center" align="center">
        <MotionText
          as="span"
          color="bg"
          fontSize="4xl"
          fontWeight="bold"
          {...fadeToTop}
        >
          Himanshu Jaroli
          <Text
            as="span"
            display={{ base: "block", lg: "inline" }}
            pl="3"
            fontWeight="normal"
            textAlign="center"
          >
            Portfolio
          </Text>
        </MotionText>
      </Flex>
    </MotionBox>
  );
};

export default LoadingScreen;
