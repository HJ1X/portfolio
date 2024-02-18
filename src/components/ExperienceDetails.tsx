import { Text } from "@chakra-ui/react";
import { Experience } from "../consts";

interface ExperienceDetailsProps {
  experienceDetails?: Experience;
}

const ExperienceDetails = ({ experienceDetails }: ExperienceDetailsProps) => {
  if (experienceDetails === undefined) return;
  return <Text>{experienceDetails.description}</Text>;
};

export default ExperienceDetails;
