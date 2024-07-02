import { ArrowRight } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { IsMobileContext } from "@/context/isMobileContext"

interface HomeCardProps {
  logo: string
  title: string
  description: string
  button: string
  to: string
}

export function HomeCard({
  button,
  description,
  logo,
  title,
  to,
}: HomeCardProps) {
  const { isMobile } = useContext(IsMobileContext)
  return (
    <div className="flex  flex-col  justify-center gap-4 px-4">
      <img
        src={logo}
        alt="imagens da aplicacao vonix"
        className="rounded-3xl bg-slate-100 dark:bg-slate-900"
      />
      <h2
        className={`text-xl font-extrabold text-vonix-blue-400 dark:text-vonix-orange-600 `}
      >
        {title}
      </h2>
      <p className="font-extralight text-foreground">{description}</p>
      <div>
        <Button
          className={`${isMobile && "flex w-full justify-between"} gap-2 rounded-full bg-vonix-blue-400 pl-4 pr-0 font-extrabold text-background dark:bg-vonix-orange-600`}
          asChild
        >
          <Link to={to}>
            {button}
            <ArrowRight
              className={`rounded-full bg-vonix-blue-600 dark:bg-vonix-orange-400`}
              size={38}
            />
          </Link>
        </Button>
      </div>
    </div>
  )
}
