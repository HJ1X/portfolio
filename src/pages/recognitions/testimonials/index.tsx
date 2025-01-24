import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: "Jhon Doe",
    quote: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt at beatae sapiente error unde. Id enim ducimus officia obcaecati. Reiciendis nihil perspiciatis doloremque odio aliquid vitae modi repellendus maiores.`,
    designation: "Tata Consultancy Services",
    source: ""
  },
  {
    name: "Jhon Doe",
    quote: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt at beatae sapiente error unde. Id enim ducimus officia obcaecati. Reiciendis nihil perspiciatis doloremque odio aliquid vitae modi repellendus maiores.`,
    designation: "Tata Consultancy Services",
    source: ""
  },
  {
    name: "Jhon Doe",
    quote: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt at beatae sapiente error unde. Id enim ducimus officia obcaecati. Reiciendis nihil perspiciatis doloremque odio aliquid vitae modi repellendus maiores.`,
    designation: "Tata Consultancy Services",
    source: ""
  },
];

const Testimonials = () => {
  return <AnimatedTestimonials testimonials={testimonials} />
};

export default Testimonials;
