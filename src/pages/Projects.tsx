import { Box, Card, Grid, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id illo optio repellat necessitatibus facilis eum maxime qui enim laborum, ipsam debitis deserunt illum pariatur doloremque amet dolores consectetur cumque corporis reiciendis unde iste nostrum! Adipisci sequi voluptatibus velit a hic obcaecati in quia aliquid architecto, consequatur fugiat, illum libero et sit non incidunt esse modi repudiandae mollitia est corrupti! Rerum ea veniam natus officia incidunt facere inventore laboriosam sequi nisi optio error, necessitatibus excepturi praesentium quaerat doloremque dicta quos, nihil aliquid corrupti reiciendis culpa vel, ad perspiciatis sapiente? Deleniti, laudantium! Veritatis debitis hic facere blanditiis corporis. Odit quis, alias dolores nemo corrupti ducimus odio excepturi perspiciatis, minima veritatis amet recusandae vero id consequuntur modi inventore. Sint cupiditate distinctio dignissimos at consequuntur eveniet a, facilis veritatis rerum quis dolore esse blanditiis. Quia expedita ex porro at assumenda. Illo, quis. Praesentium aut tempora saepe perspiciatis. Officia veniam illo, ad harum cum blanditiis, voluptate magnam sapiente aspernatur ratione modi enim! Ipsa perspiciatis suscipit corrupti autem necessitatibus? A possimus temporibus tenetur eius vero repellat porro alias, voluptatem incidunt, facilis voluptate veritatis doloribus molestiae unde quam libero perferendis ut saepe esse quia quos? Exercitationem necessitatibus, quam numquam veritatis aliquam quae placeat error a harum.",
  },
  {
    id: 2,
    title: "Project 2",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id illo optio repellat necessitatibus facilis eum maxime qui enim laborum, ipsam debitis deserunt illum pariatur doloremque amet dolores consectetur cumque corporis reiciendis unde iste nostrum! Adipisci sequi voluptatibus velit a hic obcaecati in quia aliquid architecto, consequatur fugiat, illum libero et sit non incidunt esse modi repudiandae mollitia est corrupti! Rerum ea veniam natus officia incidunt facere inventore laboriosam sequi nisi optio error, necessitatibus excepturi praesentium quaerat doloremque dicta quos, nihil aliquid corrupti reiciendis culpa vel, ad perspiciatis sapiente? Deleniti, laudantium! Veritatis debitis hic facere blanditiis corporis. Odit quis, alias dolores nemo corrupti ducimus odio excepturi perspiciatis, minima veritatis amet recusandae vero id consequuntur modi inventore. Sint cupiditate distinctio dignissimos at consequuntur eveniet a, facilis veritatis rerum quis dolore esse blanditiis. Quia expedita ex porro at assumenda. Illo, quis. Praesentium aut tempora saepe perspiciatis. Officia veniam illo, ad harum cum blanditiis, voluptate magnam sapiente aspernatur ratione modi enim! Ipsa perspiciatis suscipit corrupti autem necessitatibus? A possimus temporibus tenetur eius vero repellat porro alias, voluptatem incidunt, facilis voluptate veritatis doloribus molestiae unde quam libero perferendis ut saepe esse quia quos? Exercitationem necessitatibus, quam numquam veritatis aliquam quae placeat error a harum.",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Box w="100%" h="100%" py={10}>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="30% 1fr" gap="10">
        <Box display="flex" flexDirection="column" gap="8">
          {projects.map((project) => (
            <Card.Root
              variant="elevated"
              key={project.id}
              cursor="pointer"
              onClick={() => setSelectedProject(project)}
              className="shadow-[var(--shadow-color)]"
              // adding custom box shadow as only updating the shadow color is not getting applied in box shadow color
              boxShadow={
                selectedProject.id === project.id
                  ? `0px 4px 8px 
                  color-mix(in srgb, var(--chakra-colors-primary) 20%, transparent), 0px 0px 1px 
                  color-mix(in srgb, var(--chakra-colors-primary) 30%, transparent)`
                  : `0px 0px 1px 
                      color-mix(in srgb, var(--chakra-colors-primary) 100%, transparent)`
              }
            >
              <Card.Body>
                <Card.Title pb="2">{project.title}</Card.Title>
                <Card.Description>{project.summary}</Card.Description>
              </Card.Body>
            </Card.Root>
          ))}
        </Box>

        <Box px={10} display="flex" flexDirection="column" gap="5">
          <Heading size="5xl">{selectedProject.title}</Heading>
          <Text>{selectedProject.description}</Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Projects;
