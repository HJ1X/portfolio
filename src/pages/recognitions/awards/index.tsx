import { List } from "@chakra-ui/react";
import {
    BsArrowRightCircle,
    BsLightbulbFill,
    BsStarFill,
} from "react-icons/bs";

const awards = [
  {
    id: 1,
    icon: <BsStarFill />,
    award:
      "Recieved Star of the month award for contribution to building maintainable node based service adhering to clean code architecture",
  },
  {
    id: 2,
    icon: <BsLightbulbFill />,
    award: "Recieved youngest innovator award from CTO for impactful POC",
  },
];

const Awards = () => {
  return (
    <List.Root variant="plain" px="2" pr="16" py="10">
      {awards.map(({ id, award }, index) => {
        return (
          <List.Item key={id} fontSize="sm" pt={!index ? "8" : "4"}>
            <List.Indicator asChild>
              <BsArrowRightCircle />
            </List.Indicator>
            {award}
          </List.Item>
        );
      })}
    </List.Root>
  );
};

export default Awards;
