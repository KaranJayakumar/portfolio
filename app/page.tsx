"use client"
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
          A few events I&apos;ve been frequenting lately and enjoyed. 
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
        <div className="font-normal flex-col text-sm pt-[40px] mt-[40px] border-t border-gray-200" id="footer">
          <p className="pb-[8px] gap-x-4 flex">
            <a href="https://www.linkedin.com/in/karan-jayakumar-v2048/" className="underline hover:text-gray-600">LinkedIn</a>
            <a href="https://github.com/KaranJayakumar" className="underline hover:text-gray-600">GitHub</a>
            <a href="/resume.pdf" download className="underline hover:text-gray-600">Resume</a>
            <a href="mailto:karanjaykumar@gmail.com" className="underline hover:text-gray-600">Chat</a>
          </p>
        </div>
      </div>
    </PortfolioLayout>
  );
}
