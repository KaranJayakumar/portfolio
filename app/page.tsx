"use client"
import { Footer } from "./_components/layout/Footer";
import { PortfolioLayout } from "./_components/layout/PortfolioLayout";

export default function Home() {
  const openEesel = () => {
    window.open("https://eesel.ai", "_blank")
  }
  const openSindy = () => {
    window.open("https://sindy.ai", "_blank")
  }
  const openRemember = () => {
    window.open("https://github.com/KaranJayakumar/remember", "_blank")
  }
  return (
    <PortfolioLayout>
      <div>
        <div className="font-bold flex-col py-[10px]" id="title-card">
          <p className="pb-[4px]">Karan Jayakumar</p>
        </div>
        <div className="font-normal flex-col text-sm" id="about">
          <p>I&apos;m a software engineer at <span className="underline cursor-pointer" onClick={() => openEesel()}>eesel AI</span>. Previously, I worked at the University of Melbourne and a now defunct ed-tech startup called <span className="underline cursor-pointer" onClick={() => openSindy()}>Sincidium</span>. I specialise in Python, React/Next and Java . I&apos;m currently exploring Golang and React Native and attempting to build my own <span className="underline cursor-pointer" onClick={() => openRemember()}>mobile app</span>. Generally, I love all things startups and hope to build my own company in the future and love to learn about tech in order to do that. </p>
        </div>
        <div className="flex-col py-[10px] pt-[20px]" id="hobbies">
          <p className="pb-[4px] font-bold">Experience</p>
          <ul className="text-sm space-y-2 list-disc">
            <div className="px-4">
              <li>
              eesel AI : Full-Stack Software Engineer
              </li>
              <li>
              Sincidum : Software Engineer Intern
              </li>
              <li>
              University of Melbourne : IT/Web Support Intern -&gt; Research Assistant
              </li>
            </div>
          </ul>
        </div>
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
      </div>
    </PortfolioLayout>
  );
}
