import { Block } from "../layout/Block"

export const Events = () => {
  return (
    <Block title="Events">
      <p className="text-sm text-muted-foreground mb-3">
        A few communities and events I&apos;ve been frequenting lately and enjoyed.
      </p>

      <div className="space-y-4 text-sm">
        <div>
          <a
            href="https://gdg.community.dev/gdg-melbourne/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            GDG Melbourne
          </a>
          <p className="text-muted-foreground leading-relaxed">
            Tends to be a lot of interesting builders here. Met someone building a
            really cool geopolitical news aggregator.
          </p>
        </div>

        <div>
          <a
            href="https://www.meetup.com/rea-unstackd/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            REA Unstackd
          </a>
          <p className="text-muted-foreground leading-relaxed">
            I like going here to engage with things that are beyond me. Always
            nice to not know what a data lakehouse is at a meetup and then
            learn it properly through work.
          </p>
        </div>

        <div>
          <a
            href="https://melbournecocoaheads.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            Melbourne Cocoa Heads
          </a>
          <p className="text-muted-foreground leading-relaxed">
            Always good to have a community of people building for mobile.
            Feels like an unexplored space.
          </p>
        </div>
      </div>
    </Block>
  )
}

