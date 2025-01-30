import ThemeToggleButton from "@/components/function/ThemeToggleButton";
import FancyButton from "@/components/ui/custom/FancyButton";
import { MotionFlex, MotionHeading } from "@/components/ui/Motion";
import { revealFromLeft } from "@/lib/animation";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { AnimatePresence } from "motion/react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavItem from "./NavItem";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

interface NavbarMobileProps {
  navItems: { label: string; link: string }[];
  onOutletOverflowHidden: (value: boolean) => void;
}

const NavbarMobile = ({
  navItems,
  onOutletOverflowHidden,
}: NavbarMobileProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNav, setShowNav] = useState(false);

  const handleNavOpen = () => {
    setShowNav(true);
    onOutletOverflowHidden(true);
  };

  const handleNavClose = () => {
    setShowNav(false);
    onOutletOverflowHidden(false);
  };

  return (
    <Box w="full" hideFrom="lg" zIndex="modal">
      <Flex w="full" h="24" justify="space-between" align="center">
        <MotionHeading
          size="3xl"
          onClick={() => navigate("/")}
          className="cursor-pointer select-none"
          {...revealFromLeft}
          transition={{ delay: 0.2 }}
        >
          Himanshu J.
        </MotionHeading>
        <MotionFlex
          as="nav"
          align="center"
          gap="4"
          {...revealFromLeft}
          transition={{ delay: 0.2 }}
        >
          <ThemeToggleButton />
          <IconButton
            onClick={() => {
              showNav ? handleNavClose() : handleNavOpen();
            }}
            variant="outline"
            size="sm"
          >
            {showNav ? <IoMdClose /> : <IoMdMenu />}
          </IconButton>
        </MotionFlex>
      </Flex>
      <AnimatePresence mode="wait">
        {showNav && (
          <MotionFlex
            position="absolute"
            top="var(--navbar-height)"
            left="0"
            w="dvw"
            direction="column"
            bg="bg"
            justify="center"
            align="center"
            gap="20"
            initial={{ height: 0 }}
            animate={{ height: "calc(100dvh - var(--navbar-height))" }}
            exit={{ height: 0, transition: { delay: 0.1 } }}
          >
            <MotionFlex
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
              as="ul"
              direction="column"
              align="center"
              gap="6"
            >
              {navItems.map((navItem) => (
                <li key={navItem.label}>
                  <NavItem
                    onClick={handleNavClose}
                    label={navItem.label}
                    link={navItem.link}
                    selected={location.pathname === navItem.link}
                  />
                </li>
              ))}
              <li>
                <FancyButton
                  ml="1"
                  label="Contact"
                  onClick={() => {
                    navigate("/contact");
                    handleNavClose();
                  }}
                  size={{ base: "lg", lg: "sm" }}
                  theme="primary"
                />
              </li>
            </MotionFlex>
            <MotionFlex
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
            >
              <IconButton
                variant="outline"
                rounded="full"
                size="xl"
                onClick={handleNavClose}
              >
                <IoMdClose />
              </IconButton>
            </MotionFlex>
          </MotionFlex>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default NavbarMobile;
