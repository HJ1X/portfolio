import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import DisplayPicture from "./DisplayPicture";
import UserService from "../services/user-service";
import { DARK_MODE_DEFAULT_BG, LIGHT_MODE_DEFAULT_BG } from "../consts";

const Profile = () => {
  const textColor = useColorModeValue(
    LIGHT_MODE_DEFAULT_BG,
    DARK_MODE_DEFAULT_BG
  );

  return (
    <Flex alignItems="center" direction="column" w="100%">
      <DisplayPicture />
      <Text fontWeight="extrabold" fontSize="xl" mt={3} color={textColor}>
        {UserService.getUserName()}
      </Text>
      <Text fontWeight="bold" fontSize="small" color={textColor}>
        {UserService.getEmail()}
      </Text>
    </Flex>
  );
};

export default Profile;
