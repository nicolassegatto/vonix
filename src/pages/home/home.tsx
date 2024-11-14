import { useContext } from "react"
import { Helmet } from "react-helmet-async"

import bgLoop from "@/assets/bgLoop.mp4"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { IsMobileContext } from "@/context/isMobileContext"

import { AboutVonixBanner } from "./components/aboutBanner"
import { BlogCard } from "./components/blogCard"
import { CustomersCarousel } from "./components/customersCarousel"
import { VonixFeatures } from "./components/vonixFeatures"
import { WhyVonix } from "./components/whyVonix"

export function Home() {
  const { isMobile } = useContext(IsMobileContext)
  const { theme } = useTheme()

  return (
    <div className="flex w-full flex-col">
      <Helmet title="Home" />
      <div className="flex h-[calc(100vh-6rem)] w-full flex-col">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 h-screen w-full object-cover`}
        >
          <source
            src={bgLoop}
            type="video/mp4"
          />
        </video>
        {/* <img
          src={bgLoop}
          alt="Background animado"
          className="absolute inset-0 h-screen w-full object-cover"
          style={{ animation: "fade-in 0.5s ease-in" }} // Opcional: adicione uma animação de fade-in
        /> */}

        <div
          className={`absolute inset-0 h-screen backdrop-blur-lg ${theme === "dark" ? "bg-black bg-opacity-70" : "bg-vonix-blue-600 bg-opacity-40"}`}
        />

        <div
          className={`relative flex h-screen flex-col overflow-hidden py-16 ${theme === "dark" ? "text-foreground" : "text-background"}`}
        >
          <div className="m-auto flex flex-col items-center justify-center gap-8 font-quicksand lg:max-w-screen-lg xl:max-w-screen-xl">
            <h1
              className={`max-w-[900px] text-center font-bold drop-shadow-lg ${isMobile ? "px-4 text-4xl" : "text-7xl"}`}
            >
              Evolua seu negócio para a nova era digital.
            </h1>
            <p
              className={`mt-4 max-w-[800px] text-center font-bold drop-shadow-lg ${isMobile ? "px-4 text-lg" : "text-2xl"}`}
            >
              Ofereça hoje a experiência mais avançada para gestão e automação
              de canais digitais. Tudo isso com a Vonix.
            </p>
            <Button
              className={`rounded-full  bg-vonix-orange-600 p-8 font-extrabold shadow-xl ${isMobile ? "text-md" : "text-xl"}`}
            >
              VonixCC Cloud
            </Button>
          </div>

          <div className="flex flex-col gap-12 ">
            <CustomersCarousel />
            <p
              className={`text-center font-quicksand font-bold ${isMobile && "text-sm"}`}
            >
              Empresas que construíram sua jornada digital
            </p>
          </div>
        </div>
      </div>

      <div className={`my-32 flex flex-col gap-32 px-6`}>
        <WhyVonix />

        <BlogCard />

        <VonixFeatures />

        <AboutVonixBanner />
      </div>
    </div>
  )
}
