export interface Section {
  name: string;
  route: string;
}

const sections: Section[] = [
  {
    name: "About",
    route: "/",
  },
  {
    name: "Experience",
    route: "/experience",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Skills",
    route: "/skills",
  },
  {
    name: "Contace Us",
    route: "/contact",
  },
];

export default sections;
