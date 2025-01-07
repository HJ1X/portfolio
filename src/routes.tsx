import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import AboutMe from "./pages/AboutMe";

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
    ],
  },
]);

export default router;
