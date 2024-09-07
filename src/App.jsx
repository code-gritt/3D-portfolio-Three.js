import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";

function App() {
  return (
    <>
      {" "}
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
