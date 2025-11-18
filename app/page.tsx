import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
