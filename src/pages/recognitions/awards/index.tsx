import { Card, Grid } from "@chakra-ui/react";
import { BsLightbulbFill, BsStarFill } from "react-icons/bs";

const awards = [
    {
        id: 1,
        icon: <BsStarFill />,
        award: "Recieved Star of the month award for contribution to building maintainable node based service adhering to clean code architecture"
    },
    {
        id: 2,
        icon: <BsLightbulbFill />,
        award: "Recieved youngest innovator award from CTO for impactful POC"
    }
];

const Awards = () => {
    return <Grid templateColumns="repeat(3, 1fr)" pt="10" gap="3">
        {awards.map(({ id, icon, award }) => {
            return <Card.Root key={id}>
                <Card.Body>
                    <Card.Title fontSize="3xl" color="primary">{icon}</Card.Title>
                    <Card.Description mt="4" fontSize="md">{award}</Card.Description>
                </Card.Body>
            </Card.Root>
        })}
    </Grid>
}

export default Awards;