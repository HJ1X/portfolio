import { HStack, Icon, Link, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ProfileLinks = () => {
  const { colorMode } = useColorMode();

  const icons = [
    {
      icon: FaGithub,
      link: "https://github.com/",
    },
    {
      icon: FaLinkedinIn,
      link: "https://in.linkedin.com/",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com",
    },
  ];

  return (
    <HStack spacing={4} pl={4}>
      {icons.map(({ icon, link }) => (
        <Link href={link} isExternal>
          <Icon
            as={icon}
            key={icon.toString()}
            // needs to be updated as per theme
            color={colorMode === "light" ? "white" : "grey"}
            fontSize="2xl"
          ></Icon>
        </Link>
      ))}
    </HStack>
  );
};

export default ProfileLinks;
