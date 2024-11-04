import { useContext, useEffect, useRef } from "react"

import { IsMobileContext } from "@/context/isMobileContext"
import { Logos } from "@/data/customerLogos"

export function CustomersCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const { isMobile } = useContext(IsMobileContext)

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth } = carouselRef.current

        // Verifica se está perto do final da rolagem
        if (scrollLeft >= scrollWidth / 2) {
          // Move de volta para o início do conteúdo duplicado
          carouselRef.current.scrollLeft = 0
        } else {
          // Continua a rolagem
          carouselRef.current.scrollLeft += 1
        }
      }
    }

    // Configura o intervalo para a função de rolagem
    const interval = setInterval(scroll, 20)

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="m-auto overflow-hidden"
      ref={carouselRef}
    >
      <div className="flex">
        {/* Concatena os logos para duplicar o conteúdo */}
        {Logos.concat(Logos).map((logo, index) => (
          <div
            key={index}
            className={`${isMobile ? "basis-1/3" : "basis-1/6"} m-auto flex-none`}
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className={`m-auto ${isMobile ? "w-32" : "w-64"}  px-2 brightness-100 filter`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
