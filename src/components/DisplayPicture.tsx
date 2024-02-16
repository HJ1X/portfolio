import { Image, useColorModeValue } from "@chakra-ui/react";
import userImage from "../assets/user-image.avif";
import { DARK_MODE_DEFAULT_BG, LIGHT_MODE_DEFAULT_BG } from "../consts";
import UserService from "../services/user-service";

const DisplayPicture = () => {
  const borderColor = useColorModeValue(
    LIGHT_MODE_DEFAULT_BG,
    DARK_MODE_DEFAULT_BG
  );

  return (
    <>
      <Image
        border={`0.3rem solid ${borderColor}`}
        boxShadow="lg"
        borderRadius="full"
        boxSize="10rem"
        src={userImage}
        alt={UserService.getUserName() || "user-image"}
        objectFit="cover"
      />
    </>
  );
};

export default DisplayPicture;
