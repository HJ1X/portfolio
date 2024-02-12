import { HStack, Icon, Link, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ProfileLinks = () => {
  const { colorMode } = useColorMode();

  const icons = [
    {
      icon: FaLinkedinIn,
      link: "https://in.linkedin.com/",
    },
    {
      icon: FaGithub,
      link: "https://github.com/",
    },
  ];

  return (
    <HStack spacing={4}>
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
