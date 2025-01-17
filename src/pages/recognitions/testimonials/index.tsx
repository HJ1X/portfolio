import { Card, Grid, HStack, Stack, Text } from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar";

const testimonials = [
    {
        id: 1,
        name: "Jhon Doe",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt at beatae sapiente error unde. Id enim ducimus officia obcaecati. Reiciendis nihil perspiciatis doloremque odio aliquid vitae modi repellendus maiores.`,
        company: 'Tata Consultancy Services'
    },
    {
        id: 2,
        name: "Jhon Doe",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt at beatae sapiente error unde. Id enim ducimus officia obcaecati. Reiciendis nihil perspiciatis doloremque odio aliquid vitae modi repellendus maiores.`,
        company: 'Tata Consultancy Services'
    },
    {
        id: 3,
        name: "Jhon Doe",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt at beatae sapiente error unde. Id enim ducimus officia obcaecati. Reiciendis nihil perspiciatis doloremque odio aliquid vitae modi repellendus maiores.`,
        company: 'Tata Consultancy Services'
    }
];

const Testimonials = () => {
    return <Grid templateColumns="repeat(3, 1fr)" pt="10" gap="3">
        {testimonials.map(testimonial => {
            return <Card.Root key={testimonial.id}>
                <Card.Body>
                    <Card.Description>{testimonial.description}</Card.Description>
                </Card.Body>

                <Card.Footer>
                    <HStack gap="4">
                        <Avatar src="https://www.cleanpng.com/png-india-login-computer-icons-emoticon-medicine-user-607865/" />
                        <Stack gap="0">
                        <Text>{testimonial.name}</Text>
                        <Text fontSize="xs" color="fg.muted">@{testimonial.company}</Text>

                        </Stack>
                    </HStack>
                </Card.Footer>
            </Card.Root>
        })}
    </Grid>
}

export default Testimonials;