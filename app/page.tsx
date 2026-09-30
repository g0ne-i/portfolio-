import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import SelectedWork from '@/components/sections/selected-work';
import Experience from '@/components/sections/experience';
import About from '@/components/sections/about';
import TechnicalStack from '@/components/sections/technical-stack';
import CVSection from '@/components/sections/cv-section';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="relative w-full bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <SelectedWork />
      <Experience />
      <About />
      <TechnicalStack />
      <CVSection />
      <Contact />
    </main>
  );
}
