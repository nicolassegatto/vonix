import { Instagram, Linkedin, Twitter } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { IsMobileContext } from "@/context/isMobileContext"

import { LogoFooterTheme } from "./logoFooterTheme"

export function Footer() {
  const { isMobile } = useContext(IsMobileContext)
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-6 p-6">
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <div className="m-auto flex items-center justify-center ">
            <LogoFooterTheme />
          </div>

          <div className=" flex items-center justify-center gap-4 text-background">
            <Link
              to={"http://instagram.com"}
              className="rounded-full bg-background p-2 text-foreground"
            >
              <Instagram />
            </Link>
            <Link
              to={"http://linkdin.com"}
              className="rounded-full bg-background p-2 text-foreground"
            >
              <Linkedin />
            </Link>
            <Link
              to={"http://twitter.com"}
              className="rounded-full bg-background p-2 text-foreground"
            >
              <Twitter />
            </Link>
          </div>
        </div>

        <div
          className={`flex items-center justify-center gap-4 text-xs text-background ${isMobile && "flex-col"}`}
        >
          <div className="flex flex-col gap-2 ">
            <p>Av. Dr. Paulo Machado, 489 sala 04, Santa Fé, Campo Grande-MS</p>
            <p>
              Av. São Luis, Condomínio Edifício Itália, Republica, São Paulo-SP
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto">
        <p className="flex items-center justify-center text-sm font-bold text-background">
          {`Todos os direitos reservados © Vonix ${new Date().getFullYear()}`}
        </p>
      </div>
    </div>
  )
}
