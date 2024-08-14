import { useContext } from "react"
import { Helmet } from "react-helmet-async"

import bgLoop from "@/assets/bgLoop.mp4"
import { NavBar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { IsMobileContext } from "@/context/isMobileContext"
import { NavActiveContext } from "@/context/isNavActive"

import { CustomersCarousel } from "./components/customersCarousel"

export function Home() {
  const { isMobile } = useContext(IsMobileContext)
  const { navActive, setNavActive } = useContext(NavActiveContext)

  return (
    <>
      <Helmet title="Home" />
      <div className="relative flex h-screen w-full flex-col">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full rounded-b-3xl object-cover"
        >
          <source
            src={bgLoop}
            type="video/mp4"
          />
        </video>

        <div
          className={`sticky top-0 z-50 w-full ${navActive && "bg-background shadow-lg"}`}
          onMouseEnter={() => setNavActive(true)}
          onMouseLeave={() => setNavActive(false)}
        >
          <div className="mx-auto w-full lg:max-w-screen-lg xl:max-w-screen-xl">
            <NavBar />
          </div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div className="flex h-screen flex-col py-16">
          <div className="relative z-10 m-auto flex h-full flex-col items-center justify-center text-white lg:max-w-screen-lg xl:max-w-screen-xl">
            <h1 className="text-center text-8xl font-bold">
              Impulsione a experiencia do seu cliente com a Vonix.
            </h1>
            <p className="mt-4 text-lg">
              Transforme sua operação com atendimento dinâmico e com IA.
            </p>
            <Button>Vonix platform</Button>
          </div>

          <div>
            <CustomersCarousel />
          </div>
        </div>
      </div>
    </>
  )
}
