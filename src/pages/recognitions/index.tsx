import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { BsTrophy, BsChatQuoteFill } from "react-icons/bs"
import Awards from "./awards";
import Testimonials from "./testimonials";

const RecognitionsPage = () => {
    return <Box pt="6">
        <Flex direction="column">
            <Flex alignItems="center" gap="3">
                <Icon fontSize="4xl" color="primary">
                    <BsTrophy />
                </Icon>
                <Heading size="4xl" color="primary">Awards</Heading>
            </Flex>
            <Awards />


            <Flex alignItems="center" mt="14" gap="3">
                <Icon fontSize="4xl" color="primary">
                    <BsChatQuoteFill />
                </Icon>
                <Heading size="4xl" color="primary">Testimonials</Heading>
            </Flex>
            <Testimonials />
        </Flex>
    </Box>
}

export default RecognitionsPage;