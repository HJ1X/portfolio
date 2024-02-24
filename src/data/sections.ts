export interface Section {
  name: string;
  id: string;
  route: string;
}

const sections: Section[] = [
  {
    name: "About",
    id: "about",
    route: "/",
  },
  {
    name: "Experience",
    id: "experience",
    route: "/experience",
  },
  {
    name: "Projects",
    id: "projects",
    route: "/projects",
  },
  {
    name: "Skills",
    id: "skills",
    route: "/skills",
  },
  {
    name: "Contact Me",
    id: "contact",
    route: "/contact",
  },
];

export default sections;
