import { Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Avatar } from "./chakra/avatar";
import { getRandomKey } from "@/lib/utils";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { useSwipeable } from "react-swipeable";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  avatar: string;
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

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      handleNext();
    },
    preventScrollOnSwipe: true,
  });

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 10) - 5;
  };

  return (
    <Box
      mx={{ base: "0", lg: "auto" }}
      className="max-w-sm md:max-w-4xl antialiased font-sans px-4 md:px-8 lg:px-12 py-10"
    >
      <div className="relative gap-20">
        <div>
          <div
            className="relative h-72 w-full flex justify-center"
            {...swipeHandlers}
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={getRandomKey()}
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
                    rounded="xl"
                    w="100%"
                    mt="6"
                    flexShrink={0}
                    border="none"
                    bg="primary"
                    opacity={isActive(index) ? 1 : 0.6}
                  >
                    <Card.Body>
                      <Card.Description
                        color="gray.contrast"
                        fontSize={{ base: "sm", lg: "md" }}
                      >
                        {testimonial.quote}
                      </Card.Description>
                    </Card.Body>

                    <Card.Footer>
                      <HStack gap="4">
                        <Avatar src={testimonial.avatar} />
                        <Stack gap="0">
                          <Text color="gray.contrast">{testimonial.name}</Text>
                          <Text fontSize="xs" color="fg.inverted">
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
              <FaArrowLeft
                size="1rem"
                className="text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300"
              />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button hover:cursor-pointer"
            >
              <FaArrowRight
                size="1rem"
                className="text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
};
