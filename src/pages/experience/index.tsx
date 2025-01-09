import { Grid, GridItem } from '@chakra-ui/react'

const ExperiencePage = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="16">
      <GridItem width="60%">
        work ex
        {/* <WorkExperience /> */}
      </GridItem>
      <GridItem width="40%">
        ed ex
        {/* <EducationExperience /> */}
      </GridItem>
    </Grid>
  )
}

export default ExperiencePage