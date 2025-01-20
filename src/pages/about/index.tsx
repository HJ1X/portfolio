import { Grid } from "@chakra-ui/react";
import AboutIntro from "./AboutIntro";
import ProfileImage from "./ProfileImage";

const AboutPage = () => {
  return (
    <Grid w="100%" h="100%" templateColumns="45% 1fr" gap="20">
      <AboutIntro />
      {/* <ProfileImage /> */}
    </Grid>
  );
};

export default AboutPage;
