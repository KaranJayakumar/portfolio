import { PortfolioLayout } from "./components/layout/PortfolioLayout";

export default function Home() {
  return (
    <PortfolioLayout>
      <div>
        <div className="font-bold flex-col py-[10px]" id="title-card">
          <p className="pb-[4px]">Karan Jayakumar</p>
        </div>
        <div className="font-normal flex-col text-sm" id="about">
          <p>Im a Developer at eesel AI. Previously I worked at the University of Melbourne and an Ed-Tech Startup</p>
        </div>

        <div className="font-bold flex-col py-[10px] pt-[20px]" id="blog">
          <p className="pb-[4px]">Blog</p>
        </div>
        <div className="font-normal flex-col text-sm" id="blog-content">
          <p>
            Check out my writing at <a href="/blog" className="underline hover:text-gray-600">my blog</a>
          </p>
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
          <p>Check back for upcoming events and talks I'll be attending or speaking at.</p>
        </div>
      </div>
    </PortfolioLayout>
  );
}
