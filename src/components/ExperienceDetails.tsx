import { Text } from "@chakra-ui/react";
import { Experience } from "../consts";
import TechStack from "./TechStack";

interface ExperienceDetailsProps {
  experienceDetails?: Experience;
}

const ExperienceDetails = ({ experienceDetails }: ExperienceDetailsProps) => {
  if (experienceDetails === undefined) return;
  return (
    <>
      <Text mb={1}>{experienceDetails.description}</Text>
      <Text mb={2}>Technologies:</Text>
      <TechStack technologies={experienceDetails.technology} />
    </>
  );
};

export default ExperienceDetails;
