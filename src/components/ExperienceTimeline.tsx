import { Grid, GridItem } from "@chakra-ui/react";

const ExperienceTimeline = () => {
  return (
    <Grid
      templateAreas={`"timeline experienceSummary"`}
      templateRows={"1fr"}
      templateColumns={"0.5rem 1fr"}
    >
      <GridItem area="timeline"></GridItem>
      <GridItem area="experienceSummary"></GridItem>
    </Grid>
  );
};

export default ExperienceTimeline;
