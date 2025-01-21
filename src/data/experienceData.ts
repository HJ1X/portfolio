import TCSLogo from "@/assets/images/tcs-logo.png";
import HumapsLogo from "@/assets/images/humaps-logo.png";

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
  skills: string[];
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
    skills: ["React", "Java", "AWS", "Azure", "Amgular"],
    keyPoints: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumefsfsdfnda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
    ],
  },
  {
    companyNumber: 3,
    profileNumber: 1,
    company: "Tata Consultancy Services",
    location: "Pune",
    profile: "Product Engineer",
    years: "Aug 2022 - Nov 2023",
    skills: ["React", "Java", "Gen AI", "RAG", "GPT-4o", "Amgular"],
    keyPoints: [
      "Lorem ipsum dolor sit amet consectetur adipisdfsfdfing elit. Nihil, assusdfenda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor.",
      "Lorem ipsum dolor sit amet consectetur adng elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
    ],
  },
  {
    companyNumber: 2,
    profileNumber: 1,
    company: "Tata Consultancy Services",
    location: "Pune",
    profile: "Software Engineer",
    years: "Dec 2023 - Present",
    skills: ["React", "Java", "AWS", "Azure", "Amgular"],
    keyPoints: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
    ],
  },
  {
    companyNumber: 1,
    profileNumber: 1,
    company: "Tata Consultancy Services",
    location: "Pune",
    profile: "Software Engineer",
    years: "Dec 2023 - Present",
    skills: ["React", "Java", "AWS", "Azure", "Amgular"],
    keyPoints: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.",
    ],
  },
];
