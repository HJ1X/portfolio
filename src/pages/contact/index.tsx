import { Em, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import { FiMail, FiMapPin } from "react-icons/fi";
import { MotionFlex, MotionHeading, MotionText } from "@/components/ui/Motion";
import { revealFromBottom } from "@/utils/animation";

const ContactPage = () => {
  return (
    <Flex className="h-full w-full items-center gap-16">
      <Flex align="start" width="full" gap="20">
        <Flex direction="column" width="55%">
          <MotionHeading size="7xl" color="primary" {...revealFromBottom}>
            Let's
          </MotionHeading>
          <MotionHeading size="7xl" color="primary" mt="-3" {...revealFromBottom}>
            connect
          </MotionHeading>
          <MotionText
            fontSize="sm"
            mt="3"
            ml="1"
            color="fg.muted"
            {...revealFromBottom}
            transition={{ delay: 0.2 }}
          >
            Feel free to reach out. Let’s connect and create something amazing
            together! Whether you want to discuss an exciting project,
            collaborate on something innovative, or just say hello, I’m always
            open to connecting and exploring new ideas.
          </MotionText>
          <Em>
            <MotionFlex
              align="center"
              mt="5"
              ml="2"
              {...revealFromBottom}
              transition={{ delay: 0.3 }}
            >
              <Icon size="sm" mr="3">
                <FiMail />
              </Icon>
              <Text color="gray.fg" fontSize="md">jaroli.himanshu.work@gmail.com</Text>
            </MotionFlex>
          </Em>
          <Em>
            <MotionFlex
              align="center"
              mt="1"
              ml="2"
              {...revealFromBottom}
              transition={{ delay: 0.4 }}
            >
              <Icon size="sm" mr="3">
                <FiMapPin />
              </Icon>
              <Text color="gray.fg" fontSize="md">Udaipur, Rajasthan</Text>
            </MotionFlex>
          </Em>
        </Flex>
        <Flex width="45%">
          <ContactForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactPage;
