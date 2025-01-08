import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Navbar from "@/components/function/Navbar";

function Layout() {
  return (
    <Container>
      <Flex direction="column" className="px-8 py-6 h-screen">
        <Navbar />
        <Flex className="h-1 flex-grow">
          <Outlet />
        </Flex>
      </Flex>
    </Container>
  );
}

export default Layout;
