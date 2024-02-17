import { HStack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { DARK_MODE_DEFAULT_BG, LIGHT_MODE_DEFAULT_BG } from "../consts";

const ProfileLinks = () => {
  const iconColor = useColorModeValue(
    LIGHT_MODE_DEFAULT_BG,
    DARK_MODE_DEFAULT_BG
  );

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
        <Link href={link} isExternal key={link}>
          <Icon as={icon} color={iconColor} fontSize="2xl"></Icon>
        </Link>
      ))}
    </HStack>
  );
};

export default ProfileLinks;
