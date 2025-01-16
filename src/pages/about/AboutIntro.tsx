import { Box, Flex, Heading, Text } from "@chakra-ui/react";

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
          <Heading ml="3" as="span" size="5xl" color="primary">Arpit Das,</Heading>
          <Heading size="3xl" className="capitalize leading-relaxed" color="primary">
            Full Stack Developer
          </Heading>
        </Heading>
        <Text className="pt-5" fontSize="lg">
          Software Engineer with 2+ years of experience in developing and
          delivering industry standard web applications. I have a passion for
          crafting scalable and user-centric softwares. My focus lies in writing
          clean, maintainable code, optimizing performance, and delivering
          exceptional user experiences.
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutIntro;
