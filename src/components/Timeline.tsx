import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TimelineProps {
  contents: ReactElement[];
}

const Timeline = ({ contents }: TimelineProps) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center"
      position="relative"
      height="100%"
      sx={{
        "& > :last-child": {
          borderLeft: "3px solid transparent",
        },
        "& > *:last-child > *:last-child": {
          paddingBottom: 0,
        }
      }}
    >
      {[...contents]}
    </Box>
  );
};

export default Timeline;
