import { User } from "../types";
import coverImage from "../assets/cover-image.jpg";
import coverImage2 from "../assets/cover-image-2.webp";
import projectImageDesktop from "../assets/project-image-desktop.jpeg";
import projectImageTab from "../assets/project-image-tab.png";
import projectImageMobile from "../assets/project-image-mobile.jpg";

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
          "A transparent crowdfunding platform built over blockchain",
        detailedDescription:
          "Ad labore mollit duis commodo sit ad nisi adipisicing fugiat aliqua mollit. Id id magna magna officia laboris magna non quis exercitation in. Duis esse fugiat nostrud non incididunt do occaecat qui incididunt. Esse dolore elit consectetur quis ullamco enim quis elit nisi enim in est ullamco qui.",
        coverImage: randomCoverImage,
        projectImages: {
          desktop: projectImageDesktop,
          tab: projectImageTab,
          mobile: projectImageMobile,
        },
        year: "2022",
        tools: ["ReactJs", "ExpressJs", "Material UI", "Mongo DB"],
      },
      {
        name: "Edwiser",
        id: "edwiser",
        type: "Web Application",
        description: "A one-on-one curated councelling platform",
        detailedDescription:
          "Duis do veniam laborum id et cupidatat velit labore minim esse reprehenderit est exercitation elit. Minim aliqua Lorem est ullamco veniam id voluptate. Occaecat aute commodo in elit voluptate culpa. Esse occaecat irure laborum id ex culpa eu qui.",
        coverImage: randomCoverImage,
        projectImages: {
          desktop: projectImageDesktop,
          tab: projectImageTab,
          mobile: projectImageMobile,
        },
        year: "2022",
        tools: ["ReactJs", "ExpressJs", "Material UI", "Mongo DB"],
      },
      {
        name: "Project 3",
        id: "project3",
        type: "Mobile Application",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription:
          "Enim ut aliqua dolor nisi Lorem ex exercitation in esse. Non minim ad voluptate ea cillum aute. Incididunt et nostrud qui officia et incididunt sit commodo ea. Occaecat laboris eiusmod elit duis ut cillum ipsum velit tempor. Consectetur culpa ad velit mollit voluptate aute voluptate ad minim do amet. Eu ea ipsum eu ad nulla quis. Ea velit commodo consequat esse tempor ullamco occaecat ex cillum consequat.",
        coverImage: randomCoverImage,
        projectImages: {
          desktop: projectImageDesktop,
          tab: projectImageTab,
          mobile: projectImageMobile,
        },
        year: "2022",
        tools: ["ReactJs", "ExpressJs", "Material UI", "Mongo DB"],
      },
      {
        name: "Project 4",
        id: "project4",
        type: "Plugin",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription:
          "Quis Lorem est Lorem laborum aliquip est laborum reprehenderit est fugiat aute ex dolore ad. Et cupidatat qui et ut officia duis quis magna pariatur qui. Quis fugiat nisi adipisicing in adipisicing. Veniam occaecat voluptate veniam ut non id laborum nulla. Cupidatat deserunt sint officia cupidatat minim non. Non sit sunt enim tempor deserunt fugiat laboris ad cillum consectetur. Qui nisi cupidatat tempor ut magna ut incididunt mollit.",
        coverImage: randomCoverImage,
        projectImages: {
          desktop: projectImageDesktop,
          tab: projectImageTab,
          mobile: projectImageMobile,
        },
        year: "2022",
        tools: ["ReactJs", "ExpressJs", "Material UI", "Mongo DB"],
      },
      {
        name: "Project 5",
        id: "project5",
        type: "NPM Package",
        description:
          "lorem ipsum dolere olleo dolor lorem ipsum dolere olleo dolor",
        detailedDescription:
          "Veniam duis non eu enim consectetur exercitation consequat sint. Officia nostrud cupidatat do labore. Ullamco non dolor exercitation veniam mollit reprehenderit aute mollit consequat amet. Veniam eiusmod ex sit aute sint ad cupidatat cupidatat fugiat aliqua ipsum. Eu anim deserunt fugiat cupidatat laborum do deserunt veniam id.",
        coverImage: randomCoverImage,
        projectImages: {
          desktop: projectImageDesktop,
          tab: projectImageTab,
          mobile: projectImageMobile,
        },
        year: "2022",
        tools: ["ReactJs", "ExpressJs", "Material UI", "Mongo DB"],
      },
    ],
  },
  abhimaanyu: {
    name: "Abhimaanyu Vashishth",
    email: "abhi.vashishth99@gmail.com",
  },
};

export default users;
