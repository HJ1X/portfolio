import { Flex, Text } from "@chakra-ui/react";
import useColorVariable from "../hooks/useColorVariable";
import UserService from "../services/user-service";
import DisplayPicture from "./DisplayPicture";

const Profile = () => {
  const textColor = useColorVariable("DEFAULT_BACKGROUND");

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
