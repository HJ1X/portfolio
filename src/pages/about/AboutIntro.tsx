import FancyButton from "@/components/ui/custom/FancyButton";
import FancyHeading from "@/components/ui/custom/FancyHeading";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

const AboutIntro = () => {
  return (
    <Flex className="w-full h-full" mt="-10" direction="column" justifyContent="center">
      <Flex align="baseline" className="select-none">
        <Heading size="3xl" className="select-none">
          Hey, I'm
        </Heading>
        <FancyHeading ml="4" size="7xl">
          Arpit Das
        </FancyHeading>
      </Flex>
      <FancyHeading
        size="4xl"
        className="select-none capitalize"
        theme="secondary"
      >
        Full Stack Developer
      </FancyHeading>
      <Text className="pt-5 select-none" fontSize="md">
        Software Engineer with 2+ years of experience in developing and
        delivering industry standard web applications. I have a passion for
        crafting scalable and user-centric softwares. My focus lies in writing
        clean, maintainable code, optimizing performance, and delivering
        exceptional user experiences.
      </Text>
      <Flex pt="8" gap="3">
        <FancyButton label="Contact Me" />
        <FancyButton
          theme="secondary"
          label="Download Resume"
          icon={<HiDownload />}
        />
      </Flex>
    </Flex>
  );
};

export default AboutIntro;
