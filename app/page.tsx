"use client"
import { About } from "./_components/blocks/About";
import { Events } from "./_components/blocks/Events";
import { Projects } from "./_components/blocks/Projects";
import { ExperienceItem,ExperienceLayout } from "./_components/layout/ExperienceLayout";
import { Footer } from "./_components/layout/Footer";
import { Header } from "./_components/layout/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <ExperienceLayout>
        <ExperienceItem position="Full-Stack Software Engineer" description="eesel AI, Melbourne VIC" timeline="Aug 2024 - Present"/>
        <ExperienceItem position="Software Engineer Intern" description="Sincidium, Melbourne VIC" timeline="Jun 2024 - Aug 2024"/>
        <ExperienceItem position="Research Assistant" description="University of Melbourne, Melbourne VIC" timeline="Jan 2024 - Jun 2024"/>
        <ExperienceItem position="IT/Web Support Intern" description="University of Melbourne, Melbourne VIC" timeline="Jun 2023 - Jan 2024"/>
      </ExperienceLayout>
      <Events/>
      <Projects/>
      <Footer/>
    </>
  );
}
