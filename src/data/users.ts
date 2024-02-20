import { User } from "../types";
import coverImage from "../assets/cover-image.jpg";
import coverImage2 from "../assets/cover-image-2.webp";

interface Users {
  [userName: string]: User;
}

const randomCoverImage = Math.random() < 0.5 ? coverImage : coverImage2;

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
        coverImage: randomCoverImage,
      },
      {
        name: "Edwiser",
        id: "edwiser",
        type: "Web Application",
        description: "A one-on-one curated councelling platform",
        detailedDescription: "",
        coverImage: randomCoverImage,
      },
      {
        name: "Project 3",
        id: "project3",
        type: "Mobile Application",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription: "",
        coverImage: randomCoverImage,
      },
      {
        name: "Project 4",
        id: "project4",
        type: "Plugin",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription: "",
        coverImage: randomCoverImage,
      },
      {
        name: "Project 5",
        id: "project5",
        type: "NPM Package",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription: "",
        coverImage: randomCoverImage,
      },
    ],
  },
  abhimaanyu: {
    name: "Abhimaanyu Vashishth",
    email: "abhi.vashishth99@gmail.com",
  },
};

export default users;
