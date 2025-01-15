import Badge from "@/components/ui/Badge";
import DataItem from "@/components/ui/DataItem";
import ScrollArea from "@/components/ui/scroll-area";
import { Box, Flex, Heading, List, Stack, Text } from "@chakra-ui/react";

const ExperienceDetails = () => {
  return (
    <ScrollArea>
      <Stack direction="column" gap="6" pb="5">
        <Heading size="3xl">Software Engineer</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem mollitia deleniti error a soluta officiis dicta vero
          dolore rerum eos magnam neque iste aspernatur et, aperiam quidem quasi
          corrupti porro voluptatem earum provident tempora. Unde laborum
          debitis voluptate! Nihil tempore excepturi
        </Text>
        <DataItem
          title="Skills"
          value={
            <Flex gap="3" wrap="wrap">
              <Badge>React.js</Badge>
              <Badge>React.js</Badge>
              <Badge>React.js</Badge>
              <Badge>React.js</Badge>
            </Flex>
          }
        />
        <DataItem
          title="Points"
          value={
            <List.Root listStyle="outside" pl="5">
              <List.Item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                assumenda. Eveniet necessitatibus pariatur temporibus ad
                laborum? Quod voluptates accusantium mollitia.
              </List.Item>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                assumenda.
              </List.Item>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nihil, assumenda. Eveniet necessitatibus pariatur
                temporibus ad laborum? Quod voluptates accusantium mollitia.
              </List.Item>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                assumenda. Eveniet necessitatibus pariatur temporibus ad
                laborum? Quod voluptates accusantium mollitia.
              </List.Item>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                assumenda.
              </List.Item>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nihil, assumenda. Eveniet necessitatibus pariatur
                temporibus ad laborum? Quod voluptates accusantium mollitia.
              </List.Item>
            </List.Root>
          }
        />
      </Stack>
    </ScrollArea>
  );
};

export default ExperienceDetails;
