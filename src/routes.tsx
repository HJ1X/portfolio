import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/experience",
        element: <div>Experience</div>,
      },
      {
        path: "/skills",
        element: <Skills />
      }
    ],
  },
]);

export default router;
