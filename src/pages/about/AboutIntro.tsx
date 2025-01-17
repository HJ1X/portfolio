import Button from "@/components/ui/custom/Button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

const AboutIntro = () => {
  return (
    <Box className="w-full h-full">
      <Flex
        className="w-full h-full"
        direction="column"
        justifyContent="center"
      >
        <Heading size="3xl">
          Hi, I'm
          <Heading ml="3" as="span" size="5xl" color="primary">
            Arpit Das,
          </Heading>
          <Heading
            size="3xl"
            className="capitalize leading-relaxed"
            color="primary"
          >
            Full Stack Developer
          </Heading>
        </Heading>
        <Text className="pt-5" fontSize="md">
          Software Engineer with 2+ years of experience in developing and
          delivering industry standard web applications. I have a passion for
          crafting scalable and user-centric softwares. My focus lies in writing
          clean, maintainable code, optimizing performance, and delivering
          exceptional user experiences.
        </Text>
        <Flex pt="8" gap="3">
          <Button label="Contact Me" />
          <Button
            theme="secondary"
            label="Download Resume"
            icon={<HiDownload />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutIntro;
