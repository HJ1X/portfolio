import { Box, Flex, Grid, Heading, Icon } from "@chakra-ui/react";
import { BsTrophy, BsChatQuoteFill } from "react-icons/bs";
import Awards from "./awards";
import Testimonials from "./testimonials";

const RecognitionsPage = () => {
  return (
    <Grid templateRows="1fr" templateColumns="50% 1fr" pt="6">
      <Box>
        <Flex alignItems="center" gap="3">
          <Icon fontSize="4xl" color="fg.primary">
            <BsTrophy />
          </Icon>
          <Heading size="4xl" color="fg.primary">
            Awards
          </Heading>
        </Flex>
        <Awards />
      </Box>

      <Box overflow="hidden">
        <Flex alignItems="center" gap="3">
          <Icon fontSize="4xl" color="fg.primary">
            <BsChatQuoteFill />
          </Icon>
          <Heading size="4xl" color="fg.primary">
            Testimonials
          </Heading>
        </Flex>
        <Testimonials />
      </Box>
    </Grid>
  );
};

export default RecognitionsPage;
