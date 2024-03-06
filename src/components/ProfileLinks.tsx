import { Icon, Link, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useColorVariable from "../hooks/useColorVariable";

const ProfileLinks = () => {
  const iconColor = useColorVariable("DEFAULT_BACKGROUND");

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
    <Stack spacing={4}>
      {icons.map(({ icon, link }) => (
        <Link href={link} isExternal key={link}>
          <Icon as={icon} color={iconColor} fontSize="2xl"></Icon>
        </Link>
      ))}
    </Stack>
  );
};

export default ProfileLinks;
