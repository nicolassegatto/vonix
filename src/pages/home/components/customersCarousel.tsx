import { useContext, useEffect, useRef } from "react"

import { IsMobileContext } from "@/context/isMobileContext"
import { Logos } from "@/data/customerLogos"

export function CustomersCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const { isMobile } = useContext(IsMobileContext)

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        if (scrollLeft + clientWidth >= scrollWidth) {
          carouselRef.current.scrollLeft = 0 // Reset to the beginning
        } else {
          carouselRef.current.scrollLeft += 1 // Continue scrolling
        }
      }
    }

    // Set an interval to call the scroll function every 20 milliseconds
    const interval = setInterval(scroll, 20)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="py-6">
        <p className="text-center font-extrabold uppercase">
          Quem usa aprova a Vonix:
        </p>
        <p className="text-center text-muted-foreground">
          empresas que construíram sua jornada digital
        </p>
      </div>
      <div
        className="m-auto overflow-hidden"
        ref={carouselRef}
      >
        <div className="flex">
          {Logos.concat(Logos).map((logo, index) => (
            <div
              key={index}
              className={`${isMobile ? "basis-1/3" : "basis-1/5"} m-auto flex-none`}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="m-auto w-32 px-2 brightness-75 invert filter dark:filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
