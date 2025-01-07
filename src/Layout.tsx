import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";

function Layout() {
  return (
    <Flex direction="column">
      <Outlet />
    </Flex>
  );
}

export default Layout;
