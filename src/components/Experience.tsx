import { Grid, GridItem } from "@chakra-ui/react";
import ExperienceTimeline from "./ExperienceTimeline";
import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";

export interface ExperienceDetail {
  role: string;
  company: string;
  description: string;
}

const experienceDetails: ExperienceDetail[] = [
  {
    role: "Product Engineer",
    company: "Tata Consultancy Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae, nihil libero incidunt saepe quas quam vitae, sapiente non sed consequatur aut placeat molestias itaque cupiditate fugiat ipsa quidem aliquam.Provident, quibusdam doloribus! Ipsum sunt, ab aperiam natus a atque excepturi impedit rem praesentium? Aliquam, doloremque harum doloribus, optio voluptatem, consequuntur temporibus minima dolores accusamus eligendi ducimus nemo possimus magnam.Numquam earum aspernatur porro explicabo, quis quam rem autem. Dicta architecto deserunt necessitatibus incidunt nesciunt exercitationem earum, aliquam magnam similique officia quos repellendus iusto, quaerat harum dignissimos, nemo dolorum. Pariatur.Maxime libero harum itaque velit unde ipsa quisquam esse perferendis eaque accusantium? Quo repellendus, nihil quibusdam aut error fugiat saepe itaque consequuntur placeat velit quam labore porro ad molestiae vel?",
  },
  {
    role: "Frontend Developer",
    company: "Tata Consultancy Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae, nihil libero incidunt saepe quas quam vitae, sapiente non sed consequatur aut placeat molestias itaque cupiditate fugiat ipsa quidem aliquam.Provident, quibusdam doloribus! Ipsum sunt, ab aperiam natus a atque excepturi impedit rem praesentium? Aliquam, doloremque harum doloribus, optio voluptatem, consequuntur temporibus minima dolores accusamus eligendi ducimus nemo possimus magnam.Numquam earum aspernatur porro explicabo, quis quam rem autem. Dicta architecto deserunt necessitatibus incidunt nesciunt exercitationem earum, aliquam magnam similique officia quos repellendus iusto, quaerat harum dignissimos, nemo dolorum. Pariatur.Maxime libero harum itaque velit unde ipsa quisquam esse perferendis eaque accusantium? Quo repellendus, nihil quibusdam aut error fugiat saepe itaque consequuntur placeat velit quam labore porro ad molestiae vel?",
  },
  {
    role: "App Developer",
    company: "Cogzent solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae, nihil libero incidunt saepe quas quam vitae, sapiente non sed consequatur aut placeat molestias itaque cupiditate fugiat ipsa quidem aliquam.Provident, quibusdam doloribus! Ipsum sunt, ab aperiam natus a atque excepturi impedit rem praesentium? Aliquam, doloremque harum doloribus, optio voluptatem, consequuntur temporibus minima dolores accusamus eligendi ducimus nemo possimus magnam.Numquam earum aspernatur porro explicabo, quis quam rem autem. Dicta architecto deserunt necessitatibus incidunt nesciunt exercitationem earum, aliquam magnam similique officia quos repellendus iusto, quaerat harum dignissimos, nemo dolorum. Pariatur.Maxime libero harum itaque velit unde ipsa quisquam esse perferendis eaque accusantium? Quo repellendus, nihil quibusdam aut error fugiat saepe itaque consequuntur placeat velit quam labore porro ad molestiae vel?",
  },
];

const Experience = () => {
  const [currentExperienceDataIndex, updateExperienceDataIndex] = useState<
    undefined | number
  >(undefined);

  return (
    <Grid
      templateAreas={`"timeline experienceDetails"`}
      templateRows={"1fr"}
      templateColumns={"20rem 1fr"}
      height="100%"
    >
      <GridItem area="timeline" p={5}>
        <ExperienceTimeline
          experienceDetails={experienceDetails}
          updateExperienceDataIndex={updateExperienceDataIndex}
        />
      </GridItem>
      <GridItem area="experienceDetails">
        <ExperienceDetails
          details={experienceDetails}
          index={currentExperienceDataIndex}
        />
      </GridItem>
    </Grid>
  );
};

export default Experience;
