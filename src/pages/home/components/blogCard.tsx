import { ArrowRight } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { IsMobileContext } from "@/context/isMobileContext"
import { BannerData } from "@/data/bannerData"

export function BlogCard() {
  const { isMobile } = useContext(IsMobileContext)
  const { theme } = useTheme()

  const { title, description, fullDescription, img } = BannerData

  if (isMobile) {
    return (
      <div className="px-4">
        <div
          className="grid grid-rows-2 rounded-3xl p-6"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="row-span-1"></div>
          <div className="row-span-1 flex flex-col gap-3 rounded-3xl bg-gray-500 bg-opacity-50 p-4 text-white backdrop-blur-3xl">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
            <Button
              asChild
              className="rounded-3xl bg-vonix-orange-600 text-xl font-bold"
            >
              <Link to="">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full pl-12 pr-24 lg:max-w-screen-lg xl:max-w-screen-xl">
      <div
        className={`flex gap-12 rounded-3xl ${theme === "dark" ? "bg-vonix-orange-600" : "bg-vonix-blue-400"} p-12`}
      >
        <div className="flex flex-1 flex-col justify-between gap-6">
          <h1 className="text-3xl font-semibold text-background">{title}</h1>
          <p className="text-lg text-secondary">{fullDescription}</p>
          <Link
            to=""
            className={`${theme === "dark" ? "text-vonix-blue-800" : "text-vonix-orange-600"} flex items-center justify-start gap-2 text-3xl font-bold  transition-all hover:gap-6`}
          >
            Saiba mais <ArrowRight size={24} />
          </Link>
        </div>
        <div className="flex items-center lg:mr-[-6rem] xl:my-[-8rem] xl:mr-[-8rem]">
          <img
            src={img}
            alt="Premiação da Associação Brasileira de Telesserviços"
            className="rounded-3xl object-cover shadow-xl lg:w-[24rem] xl:w-[32rem]"
          />
        </div>
      </div>
    </div>
  )
}
