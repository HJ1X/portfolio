import FancyButton from "@/components/ui/custom/FancyButton";
import FancyHeading from "@/components/ui/custom/FancyHeading";
import { MotionFlex, MotionText } from "@/components/ui/Motion";
import { intro } from "@/data/aboutData";
import { revealFromBottom, revealFromLeft } from "@/lib/animation";
import { Flex, Heading, Link } from "@chakra-ui/react";
import Resume from "@/assets/pdf/resume.pdf";

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
          {intro.name}
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
          {intro.profile}
        </FancyHeading>
      </MotionFlex>
      <MotionText
        className="pt-5 select-none"
        fontSize={{ base: "md", lg: "lg" }}
        {...revealFromBottom}
        transition={{ delay: 0.2 }}
        textAlign={{ base: "center", lg: "inherit" }}
      >
        {intro.description}
      </MotionText>
      <MotionFlex
        pt="8"
        gap="3"
        {...revealFromLeft}
        transition={{ delay: 0.4 }}
        justify={{ base: "center", lg: "start" }}
      >
        <FancyButton label="Contact Me" />
        <Link
          textDecoration="none"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FancyButton theme="secondary" label="View Resume" />
        </Link>
      </MotionFlex>
    </Flex>
  );
};

export default AboutIntro;
