import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea = ({ children, className }: ScrollAreaProps) => {
  return (
    <Box transition="all" className={`${styles.scrollArea} ${className}`}>
      <Box transition="all" className={styles.scrollContentArea}>{children}</Box>
    </Box>
  );
};

export default ScrollArea;
