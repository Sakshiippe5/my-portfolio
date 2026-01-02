import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-bgDark">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      {/* Add Contact next if you want a form */}
    </div>
  );
}

export default App;