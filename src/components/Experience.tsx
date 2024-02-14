import { Grid, GridItem } from "@chakra-ui/react";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <Grid
      templateAreas={`"timeline experienceDetails"`}
      templateRows={"1fr"}
      templateColumns={"20rem 1fr"}
    >
      <GridItem area="timeline" p={5}>
        <ExperienceTimeline />
      </GridItem>
      <GridItem area="experienceDetails"></GridItem>
    </Grid>
  );
};

export default Experience;
