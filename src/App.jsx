import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
    <>
      {" "}
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
