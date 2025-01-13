import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import SkillsPage from "./pages/skills";
import Projects from "./pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <SkillsPage />
      }
    ],
  },
]);

export default router;
