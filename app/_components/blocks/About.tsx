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
      <div className="font-normal flex-col text-sm" id="about">
        <p>I&apos;m a software engineer at <span className="underline cursor-pointer" onClick={() => openEesel()}>eesel AI</span>. Previously, I worked at the University of Melbourne and a now defunct ed-tech startup called <span className="underline cursor-pointer" onClick={() => openSindy()}>Sincidium</span>. I specialise in Python, React/Next and Java . I&apos;m currently exploring Golang and React Native and attempting to build my own <span className="underline cursor-pointer" onClick={() => openRemember()}>mobile app</span>. Generally, I love all things startups and hope to build my own company in the future and love to learn about tech in order to do that. </p>
      </div>
  )
}

