import { Card } from "@chakra-ui/react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Outlet } from "react-router-dom";
import useColorVariable from "../hooks/useColorVariable";

const Canvas = () => {
  const scrollbarTheme_ = useColorVariable("SCROLLBAR_THEME");
  return (
    <Card borderRadius="2rem 0 0 2rem" boxShadow="2xl" height="100%" overflow="auto" p={0} backgroundColor="#f2f2f2">
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: "move", theme: scrollbarTheme_ } }}
        style={{ height: "100%" }}
      >
        <Outlet />
      </OverlayScrollbarsComponent>
    </Card>
  );
};

export default Canvas;
