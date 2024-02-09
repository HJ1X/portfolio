import { Card } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Canvas = () => {
  return (
    <Card borderRadius="xl" boxShadow="2xl" height="100%" p={0}>
      <Outlet />
    </Card>
  );
};

export default Canvas;
