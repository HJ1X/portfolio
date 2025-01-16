import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import { FiMail, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  return (
    <Flex className="h-full w-full items-center gap-16">
      <Flex align="start" width="full" gap="20">
        <Flex direction="column" width="55%">
          <Heading size="7xl" color="primary">
            Let's
          </Heading>
          <Heading size="7xl" color="primary" mt="-3">
            connect
          </Heading>
          <Text fontSize="sm" mt="3" ml="1" color="gray.500">
            Feel free to reach out. Let’s connect and create something amazing
            together! Whether you want to discuss an exciting project,
            collaborate on something innovative, or just say hello, I’m always
            open to connecting and exploring new ideas.
          </Text>
          <Flex align="center" mt="5" ml="2">
            <Icon size="sm" mr="3">
              <FiMail />
            </Icon>
            <Text fontSize="md">jaroli.himanshu.work@gmail.com</Text>
          </Flex>
          <Flex align="center" mt="1.5" ml="2">
            <Icon size="sm" mr="3">
              <FiMapPin />
            </Icon>
            <Text fontSize="md">Udaipur, Rajasthan</Text>
          </Flex>
        </Flex>
        <Flex width="45%">
          <ContactForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactPage;
