import { Box, Card, CardBody } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Canvas = () => {
  return (
    <Box boxShadow="md">
      <Card height="calc(100vh - 2em)" my="1em" mr="1em">
        <CardBody>
          <Outlet />
        </CardBody>
      </Card>
    </Box>
  );
};

export default Canvas;
