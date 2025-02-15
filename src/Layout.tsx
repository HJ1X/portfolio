import Navbar from "@/components/function/navbar";
import { Container, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Outlet } from "react-router";
import LoadingScreen from "./components/function/LoadingScreen";
import { Toaster } from "./components/ui/chakra/toaster";

function Layout() {
  const [loading, setLoading] = useState(true);
  const [outletOverflowHidden, setOutletOverflowHidden] = useState(false);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen setLoading={setLoading} />}
      </AnimatePresence>
      {!loading && (
        <Container scrollBehavior="smooth" position="relative">
          <Flex
            w="full"
            h={{ base: "24", lg: "20" }}
            align="center"
            px={{ base: "4", lg: "0" }}
          >
            <Navbar
              onOutletOverflowHidden={(value) => setOutletOverflowHidden(value)}
            />
          </Flex>
          <Flex
            direction="column"
            h={{ base: "auto", lg: "calc(100dvh - var(--navbar-height))" }}
            px={{ base: "4", lg: "0" }}
            overflow={outletOverflowHidden ? "hidden" : "visible"}
          >
            <Outlet />
          </Flex>
          <Toaster />
        </Container>
      )}
    </>
  );
}

export default Layout;
