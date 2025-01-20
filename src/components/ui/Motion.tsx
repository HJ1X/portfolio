import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import FancyHeading from "./custom/FancyHeading";

export const MotionBox = motion.create(Box, { forwardMotionProps: true });
export const MotionFlex = motion.create(Flex, { forwardMotionProps: true });
export const MotionHeading = motion.create(Heading, {
  forwardMotionProps: true,
});
export const MotionText = motion.create(Text, { forwardMotionProps: true });
export const MotionFancyHeading = motion.create(FancyHeading, {
  forwardMotionProps: true,
});
