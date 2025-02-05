import Img from "@/assets/images/profile/Himanshu.png";
import { MotionFlex, MotionSVG } from "@/components/ui/Motion";
import { revealFromBottom } from "@/lib/animation";
import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

type Pos = { bottom: number; width: number };

const ProfileImage = () => {
  const [img, setImg] = useState<Pos>({ bottom: 0, width: 0 });
  const ref = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const viewPortHeight =
        window.visualViewport?.height ?? window.innerHeight;
      const { bottom, width } = ref.current.getBoundingClientRect();

      setImg({
        bottom: viewPortHeight - bottom + 2,
        width: width,
      });
    }
  }, []);

  return (
    <Flex
      pos="relative"
      h={{ base: "calc(100svh - var(--navbar-height))", lg: "full" }}
      align="center"
      w="full"
      overflow="hidden"
    >
      <MotionSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        position="absolute"
        transform={{
          base: "scale(2) rotate(180deg)",
          lg: "scale(1.5) rotate(180deg)",
        }}
      >
        <motion.path
          transition={{
            pathLength: {
              delay: 0.1,
            },
            fill: {
              delay: 0.7,
            },
          }}
          initial={{ pathLength: 0, fill: "#0000" }}
          animate={{
            pathLength: 1,
            fill: "var(--chakra-colors-primary)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          d="M 19.9 12 C 12.9 23.6 -14.5 23.9 -21.2 12.4 C -28 1 -14 -22.3 -0.3 -22.4 C 13.4 -22.6 26.9 0.4 19.9 12 L 20.4 12"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          rotate="90deg"
          stroke="var(--chakra-colors-primary)"
          strokeWidth="0.5px"
          style={{
            transition: "0.3s",
          }}
        />
      </MotionSVG>
      <MotionSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        position="absolute"
        zIndex="11"
        transform={{
          base: "scale(2) rotate(180deg)",
          lg: "scale(1.5) rotate(180deg)",
        }}
      >
        <motion.path
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--chakra-colors-bg)"
          d="M 22 -0 C 17.8 -14.3 7.2 -22.6 -0.3 -22.4 C -10.5 -22.1 -20 -9.3 -22.9 0 L -25 0 L -25 -25 L 25 -25 L 25 -0 Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
        />
      </MotionSVG>
      <Box
        position="absolute"
        bottom="0"
        h={img.bottom}
        w="full"
        zIndex="dropdown"
        bg="bg"
      />
      <MotionFlex
        w={`calc(${img.width}px - 1rem)`}
        left="0"
        right="0"
        mx="auto"
        overflow="hidden"
        position="absolute"
        bottom={img.bottom}
        justify="center"
        {...revealFromBottom}
        transition={{
          delay: 0.9,
        }}
      >
        <Image
          src={Img}
          h="auto"
          maxW="full"
          objectFit="cover"
          filter="drop-shadow(0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.5))"
        />
      </MotionFlex>
    </Flex>
  );
};

export default ProfileImage;
