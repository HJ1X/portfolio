import TCSLogo from "@/assets/images/tcs-logo.png";
import HumapsLogo from "@/assets/images/humaps-logo.png";
import ReactLogo from "@/assets/images/skills/react.svg";
import JavaLogo from "@/assets/images/skills/java.svg";
import SpringLogo from "@/assets/images/skills/spring.png";
import RESTLogo from "@/assets/images/skills/rest.png";
import VercelLogo from "@/assets/images/skills/vercel.svg";
import NextLogo from "@/assets/images/skills/next.svg";

export const profileTimeline = [
  {
    number: 3,
    company: "Tata Consultancy Services",
    logo: TCSLogo,
    profiles: [
      {
        number: 2,
        title: "Software Engineer",
        years: "Dec 2023 - Present",
      },
      {
        number: 1,
        title: "Product Engineer",
        years: "Aug 2022 - Nov 2023",
      },
    ],
  },
  {
    number: 2,
    company: "Tata Consultancy Services",
    logo: TCSLogo,
    profiles: [
      {
        number: 1,
        title: "Project Intern",
        years: "Jun 2021 - Aug 2021",
      },
    ],
  },
  {
    number: 1,
    company: "Humaps",
    logo: HumapsLogo,
    profiles: [
      {
        number: 1,
        title: "Web Developer Intern",
        years: "Jan 2021 - Mar 2021",
      },
    ],
  },
];

export interface ExperienceDetails {
  companyNumber: number;
  profileNumber: number;
  company: string;
  location: string;
  profile: string;
  years: string;
  skills: { name: string; logo: string }[];
  keyPoints: string[];
}

export const experienceDetails: ExperienceDetails[] = [
  {
    companyNumber: 3,
    profileNumber: 2,
    company: "Tata Consultancy Services",
    location: "Pune",
    profile: "Software Engineer",
    years: "Dec 2023 - Present",
    skills: [
      { name: "React.js", logo: ReactLogo },
      { name: "Java", logo: JavaLogo },
      { name: "REST API", logo: RESTLogo },
      { name: "Spring Boot", logo: SpringLogo },
      { name: "Next.js", logo: NextLogo },
      { name: "Vercel AI SDK", logo: VercelLogo },
    ],
    keyPoints: [
      "Contributed to a WaaS platform for high-quality product delivery and talent engagement.",
      "Used React.js for UI. Worked closely with the design team to ensure consistent & high-quality UI.",
      "Developed suite of REST APIs in Java (Spring Boot) and performed optimizations reducing the server response time by 20%.",
      "Developed AI Agents and chat interfaces using Next.js, Vercel AI SDK and Azure OpenAI generative and embedding models.",
    ],
  },
  {
    companyNumber: 3,
    profileNumber: 1,
    company: "Tata Consultancy Services",
    location: "Pune",
    profile: "Product Engineer",
    years: "Aug 2022 - Nov 2023",
    skills: [
      { name: "React.js", logo: ReactLogo },
      { name: "Java", logo: JavaLogo },
      { name: "REST API", logo: RESTLogo },
      { name: "Spring Boot", logo: SpringLogo },
      { name: "Prompt Engineering", logo: ReactLogo },
    ],
    keyPoints: [
      "Worked on a product focused on developing digital experiences through high-level intent specification reducing the development time by around 85%.",
      "Developed end-to-end application features, including comprehensive APIs in Java (Spring Boot) and frontend solutions in React.js and PrimeReact for no code development.",
      "Utilized GPT-4 models for generative assistance.",
      "Built a VS Code extension to support, assist and augment intent specification creation.",
    ],
  },
  {
    companyNumber: 2,
    profileNumber: 1,
    company: "Tata Consultancy Services",
    location: "Pune",
    profile: "Project Intern",
    years: "Jun 2021 - Aug 2021",
    skills: [
      { name: "React.js", logo: ReactLogo },
      { name: "OpenCV", logo: JavaLogo },
      { name: "MediaPipe", logo: RESTLogo },
      { name: "AR Vision", logo: RESTLogo },
    ],
    keyPoints: [
      "Developed a Virtual Trial Room application enabling users to try on clothes using AR technology.",
      "Built frontend using React.js and used react-three-fiber to superimpose 3D clothing models, achieving a success rate of 94%.",
      "Used OpenCV and MediaPipe in Python for AR vision and object detection.",
    ],
  },
  {
    companyNumber: 1,
    profileNumber: 1,
    company: "Humaps Pvt. Ltd.",
    location: "Pune",
    profile: "Web Developer Intern",
    years: "Jan 2021 - Mar 2021",
    skills: [
      { name: "React.js", logo: ReactLogo },
      { name: "Express.js", logo: JavaLogo },
      { name: "REST API", logo: RESTLogo },
      { name: "MongoDB", logo: RESTLogo },
    ],
    keyPoints: [
      "Contributed to the development of a hyperlocal e-commerce platform for spare parts & AMC services.",
      "Built RESTful APIs using ExpressJS as the backend framework and MongoDB Atlas as the database.",
      "Developed responsive UI components and integration services using React.js and Material UI.",
    ],
  },
];
