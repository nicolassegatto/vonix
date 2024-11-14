import { useContext, useEffect, useState } from "react"

import { SlideIndicator } from "@/components/slideIndicator"
import { useTheme } from "@/components/theme-provider"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { IsMobileContext } from "@/context/isMobileContext"
import { VonixFeaturesData } from "@/data/vonixFeatures"

export function VonixFeatures() {
  const { isMobile } = useContext(IsMobileContext)
  const { theme } = useTheme()

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div
      className={`m-auto flex flex-col gap-10 lg:max-w-screen-lg xl:max-w-screen-xl ${theme === "dark" && isMobile && "bg-vonix-orange-600 "} ${isMobile && "-mx-6 bg-vonix-blue-400 px-12 py-12"}`}
    >
      <div
        className={`${isMobile ? `rounded-3xl bg-opacity-75 p-6 shadow-lg backdrop-blur-3xl ${theme === "dark" ? "bg-black" : "bg-white"}` : "flex flex-col gap-6"} `}
      >
        <div
          className={`${isMobile && "mb-12 mt-6"} flex w-full flex-col items-center justify-center gap-6`}
        >
          {isMobile && (
            <h2 className={`w-full font-bold text-vonix-blue-800`}>
              SOLUÇÕES PARA O SUCESSO
            </h2>
          )}
          <h1
            className={`font-semibold text-vonix-blue-800 ${theme === "dark" && "text-vonix-orange-600"} ${isMobile ? "text-3xl" : "text-center text-5xl "}`}
          >
            Vonix CC é a plataforma que conecta o seu cliente com sua empresa, e
            simplifica a gestão de sua operação.
          </h1>
          <p
            className={`${isMobile ? "text-md" : "text-center text-lg"}  text-muted-foreground`}
          >
            Aumente o crescimento, a fidelidade dos clientes e a produtividade
            dos colaboradores, enquanto reduz custos, utilizando uma plataforma
            confiável com inteligência artificial (IA). Essa plataforma oferece
            experiências personalizadas em grande escala através de chat,
            e-mail, mensagens, voz, redes sociais e texto.
          </p>
        </div>

        {isMobile ? (
          <>
            <div className="flex flex-col gap-4">
              {VonixFeaturesData.map(feature => (
                <Card
                  key={feature.id}
                  className={`min-h-36 rounded-3xl bg-opacity-70 ${theme === "dark" ? "bg-black" : "bg-white"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-2x text-vonix-blue-800 dark:text-vonix-orange-600">
                      {feature.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            <div>
              <Carousel
                className="mx-16"
                setApi={setApi}
              >
                <CarouselContent className="mx-4 my-4 h-[32rem]">
                  {VonixFeaturesData.map(feature => (
                    <CarouselItem
                      key={feature.id}
                      className="basis-2/1 transition-all hover:scale-105"
                    >
                      <Card
                        className="h-full w-80 rounded-3xl text-background dark:text-foreground"
                        style={{
                          backgroundImage: `url(${feature.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <CardHeader
                          className={`flex h-full flex-col justify-between rounded-3xl bg-gradient-to-t to-transparent ${theme === "dark" ? "from-vonix-orange-600" : "from-vonix-blue-400"}`}
                        >
                          <CardTitle className="text-2xl font-bold">
                            {feature.name}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-background first-letter:uppercase dark:text-foreground">
                            {feature.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <SlideIndicator
                current={current}
                count={count}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
