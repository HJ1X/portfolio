"use client";

import { Card, HStack, Stack, Text } from "@chakra-ui/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Avatar } from "./chakra/avatar";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10">
      <div className="relative gap-20">
        <div>
          <div className="relative h-80 w-full flex justify-center">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Card.Root
                    key={testimonial.name + index}
                    w="100%"
                    mt="6"
                    flexShrink={0}
                    borderColor={isActive(index) ? "fg.primary" : ""}
                    bg={isActive(index) ? "fg.primary" : "fg.secondary"}
                    opacity={isActive(index) ? 1 : 0.7}
                  >
                    <Card.Body>
                      <Card.Description>{testimonial.quote}</Card.Description>
                    </Card.Body>

                    <Card.Footer>
                      <HStack gap="4">
                        <Avatar src="https://www.cleanpng.com/png-india-login-computer-icons-emoticon-medicine-user-607865/" />
                        <Stack gap="0">
                          <Text>{testimonial.name}</Text>
                          <Text fontSize="xs" color="fg.muted">
                            @{testimonial.designation}
                          </Text>
                        </Stack>
                      </HStack>
                    </Card.Footer>
                  </Card.Root>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button hover:cursor-pointer"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button hover:cursor-pointer"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
