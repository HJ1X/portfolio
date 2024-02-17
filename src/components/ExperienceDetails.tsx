import { ExperienceDetail } from "./Experience";

interface ExperienceDetailsProps {
  details: ExperienceDetail[];
  index: number | undefined;
}

const ExperienceDetails = ({ details, index }: ExperienceDetailsProps) => {
  if (index === undefined) return;
  return <div>{details[index].description}</div>;
};

export default ExperienceDetails;
