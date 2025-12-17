export const Footer = () => {
  return (
      <div className="font-normal flex-col text-sm pt-[40px] mt-[40px] border-t border-gray-200" id="footer">
        <p className="pb-[8px] gap-x-4 flex">
          <a href="https://www.linkedin.com/in/karan-jayakumar-v2048/" className="underline hover:text-gray-600">LinkedIn</a>
          <a href="https://github.com/KaranJayakumar" className="underline hover:text-gray-600">GitHub</a>
          <a href="/resume.pdf" download className="underline hover:text-gray-600">Resume</a>
          <a href="https://calendar.app.google/4Vr8TfsNmLjUEPTc9" target="_blank" className="underline hover:text-gray-600">Chat</a>
        </p>
      </div>
  )
}
