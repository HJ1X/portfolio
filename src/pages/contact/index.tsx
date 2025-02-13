import {
  MotionBox,
  MotionFlex,
  MotionHeading,
  MotionText,
} from "@/components/ui/Motion";
import { revealFromBottom, revealFromLeft } from "@/lib/animation";
import { Em, Flex, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import { FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "./ContactForm";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/data/contactData";

const ContactPage = () => {
  return (
    <Flex
      h={{ base: "fit", lg: "full" }}
      w="full"
      align="center"
      mt={{ base: "8", lg: "0" }}
      pb={{ base: "10", lg: "0" }}
    >
      <Flex
        align="start"
        w={{ base: "full", lg: "fit" }}
        h={{ base: "full", lg: "fit" }}
        gap="20"
        direction={{ base: "column", lg: "row" }}
      >
        <Flex direction="column" width={{ base: "full", lg: "55%" }}>
          <MotionHeading
            size={{ base: "6xl", lg: "7xl" }}
            color="primary"
            {...revealFromBottom}
          >
            Let's
          </MotionHeading>
          <MotionHeading
            size={{ base: "6xl", lg: "7xl" }}
            color="primary"
            mt="-3"
            {...revealFromBottom}
          >
            connect
          </MotionHeading>
          <MotionText
            fontSize="md"
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
              <Text color="gray.fg" fontSize="md">
                jaroli.himanshu.work@gmail.com
              </Text>
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
              <Text color="gray.fg" fontSize="md">
                Udaipur, Rajasthan
              </Text>
            </MotionFlex>
          </Em>
          <MotionFlex
            pt="6"
            gap="4"
            {...revealFromLeft}
            transition={{ delay: 0.5 }}
            justify={{ base: "center", lg: "start" }}
          >
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                rounded="full"
                size="lg"
                variant="outline"
                borderColor="gray.emphasized"
              >
                <FaLinkedinIn />
              </IconButton>
            </Link>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                rounded="full"
                size="lg"
                variant="outline"
                borderColor="gray.emphasized"
              >
                <FaGithub />
              </IconButton>
            </Link>
            <Link
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                rounded="full"
                size="lg"
                variant="outline"
                borderColor="gray.emphasized"
              >
                <FaXTwitter />
              </IconButton>
            </Link>
            <Link
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                rounded="full"
                size="lg"
                variant="outline"
                borderColor="gray.emphasized"
              >
                <FaTelegramPlane />
              </IconButton>
            </Link>
          </MotionFlex>
        </Flex>
        <MotionBox
          rounded="full"
          borderWidth="thin"
          my="auto"
          mx="auto"
          {...revealFromBottom}
          transition={{ delay: 0.4 }}
        >
          <Flex minH="12" minW="12" align="center" justify="center">
            <Text color="gray">or</Text>
          </Flex>
        </MotionBox>
        <Flex width={{ base: "full", lg: "45%" }}>
          <ContactForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactPage;
