import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ExperiencePage from "./pages/experience";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/projects";
import RecognitionsPage from "./pages/recognitions";
import SkillsPage from "./pages/skills";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="recognitions" element={<RecognitionsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
