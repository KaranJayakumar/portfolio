import { Block } from "../layout/Block"

export const Events = () => {
  return (
    <Block title="Events">
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
    </Block>
  )
}

