import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
      {
        path: "projects/",
        children: [
          {
            index: true,
            element: <ProjectsPage />,
          },
          {
            path: ":projectId",
            element: <ProjectDetailsPage />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default routes;
