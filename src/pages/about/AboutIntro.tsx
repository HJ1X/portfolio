import FancyButton from "@/components/ui/custom/FancyButton";
import FancyHeading from "@/components/ui/custom/FancyHeading";
import { MotionFlex, MotionText } from "@/components/ui/Motion";
import { revealFromBottom, revealFromLeft } from "@/lib/animation";
import { Flex, Heading } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

const AboutIntro = () => {
  return (
    <Flex w="full" h="full" mt="-10" direction="column" justifyContent="center">
      <MotionFlex
        align={{ base: "center", lg: "baseline" }}
        className="select-none"
        direction={{ base: "column", lg: "row" }}
        {...revealFromBottom}
      >
        <Heading size={{ base: "2xl", lg: "3xl" }} userSelect="none">
          Hey, I'm
        </Heading>
        <FancyHeading
          ml={{ base: "3", lg: "4" }}
          size={{ base: "5xl", lg: "6xl" }}
          textAlign={{ base: "center", lg: "inherit" }}
        >
          Himanshu Jaroli
        </FancyHeading>
      </MotionFlex>
      <MotionFlex
        justify={{ base: "center", lg: "start" }}
        {...revealFromBottom}
      >
        <FancyHeading
          size={{ base: "3xl", lg: "4xl" }}
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
        textAlign={{ base: "center", lg: "inherit" }}
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
        justify={{ base: "center", lg: "start" }}
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
