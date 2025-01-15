import { Box, Flex } from '@chakra-ui/react'
import EducationHistory from './education-history'
import WorkExperience from './work-experience'

const ExperiencePage = () => {
  return (
    <Flex gap="10" className='w-full h-full pt-6'>
      <Box width="70%" height="full">
        <WorkExperience />
      </Box>
      <Box width="30%">
        <EducationHistory />
      </Box>
    </Flex>
  )
}

export default ExperiencePage