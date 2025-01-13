import { Grid } from "@chakra-ui/react";
import AboutIntro from "./AboutIntro";
import ProfileImage from "./ProfileImage";

const AboutPage = () => {
  return <Grid w="100%" h="100%" templateColumns="60% 1fr">
    <AboutIntro />
    <ProfileImage />
  </Grid>;
};

export default AboutPage;
