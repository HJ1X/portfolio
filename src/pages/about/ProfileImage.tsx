import { Box, Image } from "@chakra-ui/react";
import Img from "@/assets/project-images/my-pic.png";

const ProfileImage = () => {
  return (
    <Box pos="relative">
      <Box
        backgroundImage="url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22sw-gradient%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%221%22%20y2%3D%220%22%3E%3Cstop%20id%3D%22stop1%22%20stop-color%3D%22%23644ED2%22%20offset%3D%220%25%22%2F%3E%3Cstop%20id%3D%22stop2%22%20stop-color%3D%22%23644ED2%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20fill%3D%22url(%23sw-gradient)%22%20d%3D%22M19.9%2C12C12.9%2C23.6%2C-14.5%2C23.9%2C-21.2%2C12.4C-28%2C1%2C-14%2C-22.3%2C-0.3%2C-22.4C13.4%2C-22.6%2C26.9%2C0.4%2C19.9%2C12Z%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20transform%3D%22translate(50%2050)%22%20stroke-width%3D%220%22%20style%3D%22transition%3A%200.3s%3B%22%2F%3E%3C%2Fsvg%3E')"
        w="125%"
        h="125%"
        top="-25%"
        left="-15%"
        backgroundSize="cover"
        backgroundPosition="center"
        transform="rotate(180deg)"
        pos="absolute"
        zIndex="-1"
      ></Box>

      <Image src={Img} />
    </Box>
  );
};

export default ProfileImage;
