import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import SkillsPage from "./pages/skills";
import ProjectPage from "./pages/projects";
import ContactPage from "./pages/contact";

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
        element: <ProjectPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ],
  },
]);

export default router;
