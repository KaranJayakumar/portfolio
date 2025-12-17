"use client"
import { About } from "./_components/blocks/About";
import { Events } from "./_components/blocks/Events";
import { Projects } from "./_components/blocks/Projects";
import { ExperienceItem,ExperienceLayout } from "./_components/layout/ExperienceLayout";

export default function Home() {
  return (
    <>
      <About/>
      <ExperienceLayout>
        <ExperienceItem position="Full-Stack Software Engineer" description="eesel AI, Melbourne VIC" timeline="Aug 2024 - Present" blogKey={'eesel'}/>
        <ExperienceItem position="Software Engineer Intern" description="Sincidium, Melbourne VIC" timeline="Jun 2024 - Aug 2024"/>
        <ExperienceItem position="Research Assistant" description="University of Melbourne, Melbourne VIC" timeline="Jan 2024 - Jun 2024" blogKey='unimelb'/>
        <ExperienceItem position="IT/Web Support Intern" description="University of Melbourne, Melbourne VIC" timeline="Jun 2023 - Jan 2024" blogKey='unimelb'/>
      </ExperienceLayout>
      <Events/>
      <Projects/>
    </>
  );
}
