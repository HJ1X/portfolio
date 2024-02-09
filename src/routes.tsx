import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AboutPage from "./pages/AboutPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
    ],
  },
]);

export default routes;
