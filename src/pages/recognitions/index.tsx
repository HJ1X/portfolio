import { achievements, awards } from "@/data/recognitionsData";
import { Box, Flex } from "@chakra-ui/react";
import ListSection from "./ListSection";
import Testimonials from "./testimonials";

const RecognitionsPage = () => {
  return (
    <Flex h="full" w="full" align="center" hideBelow="lg" mt="-10">
      <Flex w="full" gap="16">
        <Flex direction="column" w="1/2" gap="20">
          <ListSection title="Awards" points={awards} />
          <ListSection title="Achievements" points={achievements} />
        </Flex>
        <Box w="1/2" my="auto">
          <Testimonials />
        </Box>
      </Flex>
    </Flex>
  );
};

export default RecognitionsPage;
