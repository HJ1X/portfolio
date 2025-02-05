import Navbar from "@/components/function/navbar";
import { Container, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { MotionBox } from "./components/ui/Motion";

function Layout() {
  const [loading, setLoading] = useState(true);
  const [outletOverflowHidden, setOutletOverflowHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // TODO: Add loading UI with animation. Currently blank screen appears on loading

  return (
    <>
      <AnimatePresence>
        {loading && (
          <MotionBox
            zIndex="overlay"
            position="fixed"
            height="100vh"
            bg="fg"
            w="full"
            exit={{
              left: "100%",
              width: 0,
            }}
          />
        )}
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
            overflow={outletOverflowHidden ? "hidden" : "auto"}
          >
            <Outlet />
          </Flex>
        </Container>
      )}
    </>
  );
}

export default Layout;
