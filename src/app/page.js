// import Image from 'next/image'

import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
    <h1 className="text-white">
      <Navbar/>
    </h1>
    <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/>
        {/* <AchievementsSection/> */}
        <ProjectsSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
