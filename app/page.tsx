"use client"
import { About } from "./_components/blocks/About";
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
      <div className="flex-col py-[10px] pt-[20px]" id="events">
        <p className="pb-[4px] font-bold">Events</p>
        <p className="pb-[8px] text-sm">A few communities and events I&apos;ve been frequenting lately and enjoyed.</p>
        <ul className="text-sm space-y-2 list-disc">
          <div className="px-4">
            <li>
              <a href="https://gdg.community.dev/gdg-melbourne/" className="underline hover:text-gray-600">GDG Melbourne</a> - Tends to be a lot of interesting builders here. Met a guy building a really cool geopolitical news aggregator.
            </li>
            <li>
              <a href="https://www.meetup.com/rea-unstackd/" className="underline hover:text-gray-600">REA Unstackd</a> - I like to go here to engage in things that are beyond me. Always nice to have not known what a data lakehouse/warehouse is at a meetup and then learn what it is through work.
            </li>
            <li>
              <a href="https://melbournecocoaheads.com/" className="underline hover:text-gray-600">Melbourne Cocoa Heads</a> - Always good to have a community of others building for mobile. Feel like it&apos;s an unexplored space.
            </li>
          </div>
        </ul>
      </div>
      <div className="font-bold flex-col py-[10px] pt-[20px]" id="events">
        <p className="pb-[4px]">Projects</p>
        <ul className="text-sm space-y-2 list-disc">
          <div className="px-4">
            <li>
            Remember
            </li>
            <li>
            Messager
            </li>
          </div>
        </ul>
      </div>
      <Footer/>
    </>
  );
}
