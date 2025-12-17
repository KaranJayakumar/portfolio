import { Block } from "../layout/Block"

export const Projects = () => {
  return (
    <Block title="Projects">
      <div className="space-y-4 text-sm">
        <div>
          <a
            href="https://github.com/KaranJayakumar/remember"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            Remember
          </a>
          <div className="text-muted-foreground leading-relaxed">
            A mobile app built with React Native, Go, and Postgres that helps
            people remember things about people they meet or already know.
            Actively in progress.
          </div>
        </div>

        <div>
          <a
            href="https://github.com/KaranJayakumar/messager"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            Messager
          </a>
          <div className="text-muted-foreground leading-relaxed">
            An experiment in building a real-time chat app using Spring Boot
            and WebSockets, with a React + Redux frontend.
          </div>
        </div>
      </div>
    </Block>
  )
}

