import { Image, theme, useColorMode } from "@chakra-ui/react";
import userImage from "../assets/user-image.avif";
import UserService from "../services/user-service";

const DisplayPicture = () => {
  const { colorMode } = useColorMode();

  const borderColor =
    colorMode === "light" ? theme.colors.white : theme.colors.black;
  const borderProperty = `0.3rem solid ${borderColor}`;

  return (
    <>
      <Image
        border={borderProperty}
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
