export const ContactCard = () => {
  return (
      <div className="font-normal flex text-sm mr-8" id="footer">
        <div className="pb-[8px] flex flex-col gap-y-2">
          <div className="space-y-2 mb-4">
            <p className="font-semibold">{'Email'}</p>
            <a href="mailto:karanjaykumar@gmail.com" className="text-gray-600" target="_blank">karanjaykumar@gmail.com</a>
          </div>
          <a href="https://www.linkedin.com/in/karan-jayakumar-v2048/" target="_blank" className="text-gray-600">LinkedIn</a>
          <a href="https://github.com/KaranJayakumar"  target="_blank" className="text-gray-600">GitHub</a>
          <a href="/resume.pdf" download className="text-gray-600" target="_blank">Resume</a>
          <a href="https://calendar.app.google/4Vr8TfsNmLjUEPTc9" className="text-gray-600" target="_blank">Chat</a>
        </div>
      </div>
  )
}

