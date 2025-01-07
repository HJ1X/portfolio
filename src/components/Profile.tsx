import { Flex, Text } from "@chakra-ui/react";
import useColorVariable from "../hooks/useColorVariable";
import UserService from "../services/user-service";
import DisplayPicture from "./DisplayPicture";

const Profile = () => {
  const textColor = useColorVariable("DEFAULT_BACKGROUND");

  return (
    <Flex alignItems="center" direction="column" w="100%">
      <DisplayPicture />
      <Text fontSize="lg" mt={3} color={textColor}>
        {UserService.getUserName()}
      </Text>
    </Flex>
  );
};

export default Profile;
