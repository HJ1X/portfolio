import { Card } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Canvas = () => {
  return (
    // TODO: move position styles to layout
    <Card
      borderRadius="xl"
      boxShadow="2xl"
      height="calc(100vh - 6em)"
      my="3em"
      mr="2em"
      p={0}
    >
      <Outlet />
    </Card>
  );
};

export default Canvas;
