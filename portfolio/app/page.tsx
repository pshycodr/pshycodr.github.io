import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}