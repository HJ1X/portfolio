import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <About />,
      },
    ],
  },
]);

export default routes;
