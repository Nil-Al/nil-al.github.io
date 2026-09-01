import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />

      <main className="flex flex-col">
        <HeroSection />
        <TechStackSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>

      <ContactFooter />
    </div>
  );
}
