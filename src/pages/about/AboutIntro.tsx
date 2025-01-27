import FancyButton from "@/components/ui/custom/FancyButton";
import FancyHeading from "@/components/ui/custom/FancyHeading";
import { MotionFlex, MotionText } from "@/components/ui/Motion";
import { revealFromBottom, revealFromLeft } from "@/lib/animation";
import { Flex, Heading } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

const AboutIntro = () => {
  return (
    <Flex
      className="w-full h-full"
      mt="-10"
      direction="column"
      justifyContent="center"
    >
      <MotionFlex
        align="baseline"
        className="select-none"
        {...revealFromBottom}
      >
        <Heading size="3xl" className="select-none">
          Hey, I'm
        </Heading>
        <FancyHeading ml="4" size="7xl">
          Arpit Das
        </FancyHeading>
      </MotionFlex>
      <MotionFlex {...revealFromBottom}>
        <FancyHeading
          size="4xl"
          className="select-none capitalize"
          theme="secondary"
        >
          Full Stack Developer
        </FancyHeading>
      </MotionFlex>
      <MotionText
        className="pt-5 select-none"
        fontSize="md"
        {...revealFromBottom}
        transition={{ delay: 0.2 }}
      >
        Software Engineer with 2+ years of experience in developing and
        delivering industry standard web applications. I have a passion for
        crafting scalable and user-centric softwares. My focus lies in writing
        clean, maintainable code, optimizing performance, and delivering
        exceptional user experiences.
      </MotionText>
      <MotionFlex
        pt="8"
        gap="3"
        {...revealFromLeft}
        transition={{ delay: 0.4 }}
      >
        <FancyButton label="Contact Me" />
        <FancyButton
          theme="secondary"
          label="Download Resume"
          icon={<HiDownload />}
        />
      </MotionFlex>
    </Flex>
  );
};

export default AboutIntro;
