import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";

const Projects = lazy(() => import("./sections/Projects/Projects"));
const Experience = lazy(() => import("./sections/Experience/Experience"));

const SectionLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
