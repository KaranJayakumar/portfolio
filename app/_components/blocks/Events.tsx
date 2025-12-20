import { Block } from "../layout/Block"
import { EventItem } from "../layout/EventItem"

export const Events = () => {
  return (
    <Block title="Events">
      <p className="text-sm text-muted-foreground mb-3">
        A few communities and events I&apos;ve been frequenting lately and enjoyed.
      </p>

      <div className="space-y-4 text-sm">
        <EventItem title='GDG Melbourne' description='Tends to be a lot of interesting builders here. Met someone building a really cool geopolitical news aggregator.' href='https://gdg.community.dev/gdg-melbourne/'/>
        <EventItem title="REA Unstackd" description='I like going here to engage with things that are beyond me. Always nice to not know what a data lakehouse is at a meetup and then learn it properly through work.' href="https://www.meetup.com/rea-unstackd/"
        />
        <EventItem title="Melbourne Cocoa Heads" description='Always good to have a community of people building for mobile. Feels like an unexplored space.' href='https://melbournecocoaheads.com/'/>
      </div>
    </Block>
  )
}

