import { awards } from "@/data/recognitionsData";
import { Box, Flex } from "@chakra-ui/react";
import ListSection from "./ListSection";
import Testimonials from "./testimonials";

const RecognitionsPage = () => {
  return (
    <>
      <Flex h="full" w="full" align="center" hideBelow="lg" mt="-10">
        <Flex w="full" gap="16">
          <Flex direction="column" justify="center" w="1/2" gap="20">
            <ListSection title="Awards and achievements" points={awards} />
          </Flex>
          <Box w="1/2" my="auto">
            <Testimonials />
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" h="fit" pb="10" w="full" hideFrom="lg" gap="8">
        <ListSection title="Awards and achievements" points={awards} />
        <Testimonials />
      </Flex>
    </>
  );
};

export default RecognitionsPage;
