import { Flex, Text, theme, useColorMode } from "@chakra-ui/react";
import DisplayPicture from "./DisplayPicture";
import UserService from "../services/user-service";

const Profile = () => {
  const { colorMode } = useColorMode();

  const textColor =
    colorMode === "light" ? theme.colors.white : theme.colors.black;

  return (
    <Flex alignItems="center" direction="column" w="100%">
      <DisplayPicture />
      <Text as="b" fontSize="xl" mt={3} color={textColor}>
        {UserService.getUserName()}
      </Text>
      <Text fontSize="small" color={textColor}>
        {UserService.getEmail()}
      </Text>
    </Flex>
  );
};

export default Profile;
