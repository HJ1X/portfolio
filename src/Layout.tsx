import Navbar from "@/components/function/Navbar";
import { Box, Container, Flex } from "@chakra-ui/react";
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
    <Box overflow="hidden">
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
        <Container scrollBehavior="smooth">
          <Flex direction="column" className="px-8 h-screen overflow-hidden">
            <Flex height="20" align="center">
              <Navbar />
            </Flex>
            <Flex className="h-1 flex-grow">
              <Outlet />
            </Flex>
          </Flex>
        </Container>
      )}
    </Box>
  );
}

export default Layout;
