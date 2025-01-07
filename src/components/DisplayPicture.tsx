import { Image } from "@chakra-ui/react";
import userImage from "../assets/user-image.avif";
import useColorVariable from "../hooks/useColorVariable";
import UserService from "../services/user-service";

const DisplayPicture = () => {
  const borderColor = useColorVariable("DEFAULT_BACKGROUND");

  return (
    <Image
      border={`0.1rem solid ${borderColor}`}
      boxShadow="lg"
      borderRadius="full"
      boxSize="4rem"
      src={userImage}
      alt={UserService.getUserName() ?? "user-image"}
      objectFit="cover"
    />
  );
};

export default DisplayPicture;
