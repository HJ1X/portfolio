import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

const AwardIcon = (Component: IconType) => {
    return <Icon fontSize="3xl" color="primary">
        <Component />
    </Icon>
    
}

export default AwardIcon;