import { Box, Image, keyframes, Text } from "@chakra-ui/react";
import UserService from "../services/user-service";
import Bg from "../assets/bg2.jpg";
import Hand from "../assets/hand.png";

const waveAnimation = keyframes`
  0% { transform: rotate(-20deg); }
  10% { transform: rotate(0deg); }
  20% { transform: rotate(-20deg); }
  30% { transform: rotate(0deg); }
  40% { transform: rotate(-15deg); }
  50% { transform: rotate(-18deg); }
  100% { transform: rotate(-20deg); }
`;

const AboutPage = () => {
  const about = UserService.getAbout();

  if(!about) return null;

  return (
    <Box
      height="100%"
      width="100%"
      p={4}
      position="relative"
      display="flex"
      padding="7rem"
      backgroundImage={Bg}
      backgroundPosition="right"
    >
      <Box zIndex="2">
        <Image
          src={about.coverImage}
          width="auto"
          height="100%"
          borderRadius="1rem"
          boxShadow="lg"
        />
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.1)"
        sx={{
          backdropFilter: "blur(5px)",
        }}
        borderColor=""
        boxShadow="2px 3px 6px 3px  rgba(0, 0, 0, 0.1)"
        zIndex="0"
        position="relative"
        flex="1"
        _before={{
          content: '""',
          position: "absolute",
          left: "-0.5%",
          height: "100%",
          width: "2%",
          bg: "#f2f2f2",
          borderRadius: "0 1rem 1rem 0",
          boxShadow: "inset -1px 0 6px -5px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}
      >
        <Box p={10}>
          {/* title */}
          <Box display="flex" width="100%">
            <Text fontSize="4xl">Hey there!</Text>
            <Box flex="1" alignContent="center" pl="3">
              <Image
                src={Hand}
                width="2.5rem"
                height="auto"
                animation={`${waveAnimation} 2.2s infinite`}
              />
            </Box>
          </Box>
          {/* titleEnd */}

          {/* body */}
          <Box mt="4">
            <Text fontSize="lg">{about.description}</Text>
          </Box>
          {/* bodyEnd */}

        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
