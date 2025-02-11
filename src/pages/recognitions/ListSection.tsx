import { MotionBox, MotionHeading } from "@/components/ui/Motion";
import { grow, revealFromBottom, revealFromLeft } from "@/lib/animation";
import { Flex, Icon, List } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";

interface ListSectionProps {
  title: string;
  points: string[];
}

const ListSection = ({ title, points }: ListSectionProps) => {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <MotionHeading size="4xl" color="primary" {...revealFromLeft}>
          {title}
        </MotionHeading>
        <MotionBox h="1" bg="primary" rounded="sm" {...grow} />
      </Flex>
      <Flex
        w="full"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "5", lg: "0" }}
      >
        <List.Root gap="3" listStyle="outside" variant="plain">
          {points.map((point, index) => (
            <MotionBox
              key={"#" + index}
              {...revealFromBottom}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <List.Item fontSize={{ base: "md", lg: "lg" }}>
                <List.Indicator>
                  <Icon size="sm" mt="-0.5">
                    <BsArrowRightCircle />
                  </Icon>
                </List.Indicator>
                {point}
              </List.Item>
            </MotionBox>
          ))}
        </List.Root>
      </Flex>
    </Flex>
  );
};

export default ListSection;
