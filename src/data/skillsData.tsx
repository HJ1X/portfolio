import ReactLogo from "@/assets/images/skills/react.svg";
import TSLogo from "@/assets/images/skills/ts.svg";
import NextLogo from "@/assets/images/skills/next.svg";
import JSLogo from "@/assets/images/skills/js.png";
import PythonLogo from "@/assets/images/skills/python.png";
import ExpressLogo from "@/assets/images/skills/express.svg";
import NodeLogo from "@/assets/images/skills/node.svg";
import SpringLogo from "@/assets/images/skills/spring.png";
import GitLogo from "@/assets/images/skills/git.png";
import JavaLogo from "@/assets/images/skills/java.svg";

export const skillsData = {
  languages: {
    description:
      "I write clean and efficient code in multiple languages to develop scalable solutions across domains",
    skills: [
      { name: "Typescript", logo: TSLogo },
      { name: "JavaScript", logo: JSLogo },
      { name: "Java", logo: JavaLogo },
      { name: "Python", logo: PythonLogo },
    ],
  },
  frameworks: {
    description:
      "Experienced with modern frameworks, tools, and platforms to build high-performance, user-centric applications.",
    skills: [
      { name: "React.js", logo: ReactLogo },
      { name: "Next.js", logo: NextLogo },
      { name: "Express.js", logo: ExpressLogo },
      { name: "Node.js", logo: NodeLogo },
      { name: "Spring", logo: SpringLogo },
      { name: "Git", logo: GitLogo },
    ],
  },
  concepts: {
    description:
      "Strong foundation in software design principles, performance optimization, and best practices for maintainable, reliable and scalable solutions.",
    skills: [
      "Object Oriented Programming (OOP)",
      "Design Patterns",
      "REST API",
      "Agile development",
      "Micro service architecture",
      "MVC",
      "Flux",
      "Component-based architecture",
      "Root Cause analysis",
    ],
  },
};
