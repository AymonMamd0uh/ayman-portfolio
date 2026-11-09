
import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DesignGallery from "./sections/DesignGallery";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <div className="site-background" />
      <div className="bg-grid" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <DesignGallery />
        <Contact />
      </main>
    </>
  );
}

export default App;
