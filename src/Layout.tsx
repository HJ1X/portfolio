import Navbar from "@/components/function/navbar";
import { Container, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { MotionBox } from "./components/ui/Motion";

function Layout() {
  const [loading, setLoading] = useState(true);

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
          ></MotionBox>
        )}
      </AnimatePresence>
      {!loading && (
        <Container scrollBehavior="smooth" position="relative">
          <Flex
            position="absolute"
            w="full"
            minH={{ base: "24", lg: "20" }}
            h={{ base: "auto", lg: "20" }}
            align="center"
            px="7"
            top="0"
            left="0"
          >
            <Navbar />
          </Flex>
          <Flex
            direction="column"
            h="calc(100dvh - var(--navbar-height))"
            position="relative"
            top="var(--navbar-height)"
            px="3"
          >
            <Flex className="h-1 flex-grow">
              <Outlet />
            </Flex>
          </Flex>
        </Container>
      )}
    </>
  );
}

export default Layout;
