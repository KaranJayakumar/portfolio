interface Props{
  href? : string
  title : string
  description : string
}
export const EventItem = ({title, description, href} : Props) => {
  const openLink = () => {
    if(href){
      window.open(href, "_blank")
    }
  }
  return (
    <div className={`space-y-4 text-sm ${href? 'cursor-pointer' : ''}`}>
      <div className="group hover:bg-muted/50">
        <div
          onClick={(() => openLink())}
          className="font-medium group-hover:underline"
        >
          {title}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

