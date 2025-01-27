import { ReactNode } from "react";
import { SiTypescript } from "react-icons/si";

export interface Skill {
  name: string;
  icon?: ReactNode;
}

export const skillsData = {
  languages: {
    description: "I have experience with the following languages",
    skills: [
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiTypescript /> },
      { name: "Java", icon: <SiTypescript /> },
    ],
  },
  frameworks: {
    description: "I have experience with the following frameworks",
    skills: [
      { name: "React", icon: <SiTypescript /> },
      { name: "Next.js", icon: <SiTypescript /> },
      { name: "Express", icon: <SiTypescript /> },
      { name: "Express", icon: <SiTypescript /> },
      { name: "Express", icon: <SiTypescript /> },
    ],
  },
  concepts: {
    description:
      "I have experience with the following concepts. I use these concepts to make the system more maintainable, scalable, and reliable.",
    skills: [
      { name: "REST API", icon: <SiTypescript /> },
      { name: "GraphQL", icon: <SiTypescript /> },
      { name: "Microservices", icon: <SiTypescript /> },
      { name: "Docker", icon: <SiTypescript /> },
      { name: "Kubernetes", icon: <SiTypescript /> },
      { name: "CI/CD", icon: <SiTypescript /> },
    ],
  },
};
