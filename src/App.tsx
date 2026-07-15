import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
