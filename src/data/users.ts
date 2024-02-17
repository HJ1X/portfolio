import { User } from "../types";

interface Users {
  [userName: string]: User;
}

const users: Users = {
  arpit: {
    name: "Arpit Das",
    email: "arpitdas118@gmail.com",
  },
  himanshu: {
    name: "Himanshu Jaroli",
    email: "jaroli.himanshu.work@gmail.com",
    projects: [
      {
        name: "SupporTroops",
        id: "supportroops",
        type: "Web Application",
        description:
          "A transparent crowdfunding platform built over the blockchain",
        detailedDescription: "",
      },
      {
        name: "Edwiser",
        id: "edwiser",
        type: "Web Application",
        description: "A one-on-one curated councelling platform",
        detailedDescription: "",
      },
      {
        name: "Project 3",
        id: "project3",
        type: "Mobile Application",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription: "",
      },
      {
        name: "Project 4",
        id: "project4",
        type: "Plugin",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription: "",
      },
      {
        name: "Project 5",
        id: "project5",
        type: "NPM Package",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription: "",
      },
    ],
  },
};

export default users;
