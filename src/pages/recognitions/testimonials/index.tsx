import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/recognitionsData";

const Testimonials = () => {
  return <AnimatedTestimonials autoplay testimonials={testimonials} />;
};

export default Testimonials;
