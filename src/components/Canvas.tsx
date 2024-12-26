import { Card } from "@chakra-ui/react";
import { useRef } from "react";
import { Outlet } from "react-router-dom";

const Canvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <Card
      ref={canvasRef}
      borderRadius="xl"
      boxShadow="2xl"
      height="100%"
      overflow="auto"
      p={0}
    >
      <Outlet context={{ canvasRef }} />
    </Card>
  );
};

export default Canvas;
