import Navigation from "./components/Navigation";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import BackToTheTop from "./components/BackToTheTop";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="h-full w-full overflow-y-auto">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
      <BackToTheTop />
    </>
  )
};