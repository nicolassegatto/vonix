import { ArrowRight } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import aboutUs from "@/assets/aboutUs.jpg"
import { IsMobileContext } from "@/context/isMobileContext"

export function AboutVonixBanner() {
  const { isMobile } = useContext(IsMobileContext)

  return (
    <div className="px-6">
      <div
        className={`${isMobile ? "grid-rows-2" : "grid-cols-3 px-6"} m-auto grid  gap-6 lg:max-w-screen-lg xl:max-w-screen-xl`}
      >
        <div
          className={`${isMobile ? "row-span-1" : "col-span-2"} rounded-3xl bg-vonix-blue-400 shadow-lg`}
          style={{
            backgroundImage: `url(${aboutUs})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className={`${isMobile ? "row-span-1" : "col-span-1"}  flex flex-col gap-6`}
        >
          <h1
            className={`${isMobile ? "text-2xl" : "text-3xl"} font-semibold text-vonix-blue-800 dark:text-vonix-orange-600`}
          >
            Descubra como a Vonix revoluciona a experiência e gestão no seu Call
            Center!
          </h1>
          <p
            className={`${isMobile ? "text-md" : "text-lg "} text-muted-foreground`}
          >
            Saiba mais sobre nossa história, valores e compromisso com soluções
            inovadoras para transformar a comunicação da sua empresa. Conheça a
            equipe que está por trás das inovações em gestão de call centers e
            suporte ao cliente, garantindo eficiência e excelência.
          </p>
          <Link
            to={"about"}
            className={`${isMobile ? "text-xl" : "text-3xl"} flex items-center justify-start gap-4 font-bold text-vonix-orange-600 transition-all hover:gap-6`}
          >
            Saiba mais <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}
