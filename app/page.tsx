"use client"
import { PortfolioLayout } from "./components/layout/PortfolioLayout";

export default function Home() {
  const openEesel = () => {
    window.open("https://eesel.ai", "_blank")
  }
  const openSindy = () => {
    window.open("https://sindy.ai", "_blank")
  }
  return (
    <PortfolioLayout>
      <div>
        <div className="font-bold flex-col py-[10px]" id="title-card">
          <p className="pb-[4px]">Karan Jayakumar</p>
        </div>
        <div className="font-normal flex-col text-sm" id="about">
          <p>I&apos;m a software engineer at <span className="underline cursor-pointer" onClick={() => openEesel()}>eesel AI</span>. Previously, I worked at the University of Melbourne and a now defunct ed-tech startup called <span className="underline cursor-pointer" onClick={() => openSindy()}>Sincidium</span>. I specialise in Python, React/Next and Java . I&apos;m currently exploring Golang and React Native and attempting to build my own Mobile App. Generally, I love all things startups and hope to build my own company in the future and love to learn about tech in order to do that. </p>
        </div>
        <div className="font-bold flex-col py-[10px] pt-[20px]" id="blog">
          <p className="pb-[4px]">Blog</p>
        </div>
        <div className="font-normal flex-col text-sm" id="blog-content">
          <p className="pb-2">I enjoy blogging about the tech stuff I learn. Check out a few of my blogs here.</p>
          <ul>
            <li>
              Blog 1
            </li>
            <li>
              Blog 2
            </li>
            <li>
              Blog 3
            </li>
          </ul>
        </div>

        <div className="font-bold flex-col py-[10px] pt-[20px]" id="hobbies">
          <p className="pb-[4px]">Hobbies</p>
        </div>
        <div className="font-normal flex-col text-sm" id="hobbies-content">
          <p>Basketball enthusiast - love following the NBA and playing when I can.</p>
          <p className="pt-[8px]">Play the piano occasionally, always looking to improve.</p>
          <p className="pt-[8px]">Passionate about building things and exploring startup ideas.</p>
        </div>
        <div className="font-bold flex-col py-[10px] pt-[20px]" id="events">
          <p className="pb-[4px]">Events</p>
        </div>
        <div className="font-normal flex-col text-sm" id="events-content">
          <p>Check back for upcoming events and talks I&apos;ll be attending or speaking at.</p>
        </div>
        <div className="font-bold flex-col py-[10px] pt-[20px]" id="events">
          <p className="pb-[4px]">Projects</p>
        </div>
        <div className="font-normal flex-col text-sm" id="events-content">
          <p>Check back for upcoming events and talks I&apos;ll be attending or speaking at.</p>
        </div>
      </div>
    </PortfolioLayout>
  );
}
