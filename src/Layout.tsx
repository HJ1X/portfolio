import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Navbar from "@/components/function/Navbar";

function Layout() {
  return (
    <Container>
      <Flex direction="column" className="px-8 py-6">
        <Navbar />
        <Outlet />
      </Flex>
    </Container>
  );
}

export default Layout;
