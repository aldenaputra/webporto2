import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Welcome from './components/sections/Welcome';

export default function Home() {
  return (
    <>
      <Welcome />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
