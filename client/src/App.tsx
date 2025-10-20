import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CountryPage from "./pages/Country";
import RealProjects from "./pages/RealProjects";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        <Router>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/projects"
                element={<Projects />}
              />
              <Route
                path="/mvp-showcase"
                element={<RealProjects />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/country/:countryId"
                element={<CountryPage />}
              />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
