import { Block } from "../layout/Block"

export const About = () => {
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
    <Block title="About">
      <p>
        <strong>Hi! I&apos;m Karan 👋</strong> I&apos;m a software engineer who
        loves building things and exploring new ideas.
      </p>

      <br />

      <p>
        I&apos;m currently a software engineer at{" "}
        <span className="underline cursor-pointer" onClick={openEesel}>
          eesel AI
        </span>.
      </p>

      <br />

      <p>
        Previously, I worked at the University of Melbourne and a now defunct
        ed-tech startup called{" "}
        <span className="underline cursor-pointer" onClick={openSindy}>
          Sincidium
        </span>.
      </p>

      <br />

      <p>
        I specialise in Python, React/Next, and Java. I&apos;m currently exploring
        Golang and React Native and attempting to build my own{" "}
        <span className="underline cursor-pointer" onClick={openRemember}>
          mobile app
        </span>.
      </p>

      <br />

      <p>
        Generally, I love all things startups and hope to build my own company
        in the future. I also love learning about tech in order to do that.
      </p>
    </Block>
  )
}

