import FancyButton from "@/components/ui/custom/FancyButton";
import { MotionBox, MotionHeading, MotionText } from "@/components/ui/Motion";
import { revealFromBottom } from "@/lib/animation";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Flex
      h="dvh"
      w="full"
      direction="column"
      gap="2"
      justify="center"
      align="center"
    >
      <MotionHeading
        fontSize={{ base: "7xl", lg: "9rem" }}
        lineHeight={{ base: "normal", lg: "9rem" }}
        {...revealFromBottom}
      >
        404
      </MotionHeading>
      <MotionText mb="3" {...revealFromBottom} transition={{ delay: 0.1 }}>
        Seems like you have entered a wrong URL!
      </MotionText>
      <MotionBox {...revealFromBottom} transition={{ delay: 0.2 }}>
        <FancyButton onClick={() => navigate("/")} label="Home" />
      </MotionBox>
    </Flex>
  );
};

export default NotFoundPage;
