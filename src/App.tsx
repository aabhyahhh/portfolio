import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceRoadmap } from './components/ExperienceRoadmap';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation activeSection={activeSection} />
      
      <section id="home">
        <HeroSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceRoadmap />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
