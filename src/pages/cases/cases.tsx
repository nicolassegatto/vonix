import { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

import { SlideIndicator } from "@/components/slideIndicator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { IsMobileContext } from "@/context/isMobileContext"
import { dataCaseDepoiments, dataCases } from "@/data/cases"

export function Cases() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const { isMobile } = useContext(IsMobileContext)

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
    <div className="mb-24 flex w-full flex-col gap-24">
      <Helmet title="Cases" />
      <div className="-mt-24 bg-vonix-blue-400 pt-32 shadow-inner-bottom">
        <div
          className={`m-auto flex flex-col gap-6 ${isMobile ? "px-12" : "px-6"} lg:max-w-screen-lg xl:max-w-screen-xl`}
        >
          <div className="flex w-full flex-col justify-center gap-2 py-52 text-background">
            <p className="font-semibold opacity-40">Vonix</p>
            <h1 className={`${isMobile ? "text-6xl" : "text-8xl"} font-bold`}>
              Histórias de Sucesso com a Vonix
            </h1>
            <p
              className={`${isMobile ? "text-xl" : "text-2xl"} font-semibold opacity-65`}
            >
              Descubra como nossos clientes transformaram suas operações e
              conquistaram resultados excepcionais com a nossa tecnologia de
              comunicação e gestão.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`mx-auto items-center justify-center gap-6 rounded-3xl  ${isMobile ? "flex flex-col px-12" : "grid grid-cols-2 px-6"} lg:max-w-screen-lg xl:max-w-screen-xl`}
      >
        {dataCases.map((item, index) => (
          <Card
            key={index}
            className="h-full w-full rounded-3xl transition-all hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex h-32 w-32 items-center justify-center">
                <img
                  className="h-full w-full object-contain"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <CardTitle className="text-3xl font-bold">
                {item.description}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex gap-4">
              {item.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-3xl font-bold">
                      <strong>{highlight.title}</strong>
                    </p>
                    <p className="text-xs">{highlight.description}</p>
                  </div>

                  {idx < item.highlights.length - 1 && (
                    <Separator orientation="vertical" />
                  )}
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex gap-4">
              <Badge variant={"outline"}>{item.companyType}</Badge>
              <Badge variant={"outline"}>{item.caseType}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-vonix-blue-400 pt-32 shadow-inner-top">
        <div className="m-auto flex flex-col gap-4 px-6 lg:max-w-screen-lg xl:max-w-screen-xl">
          <div>
            <h1 className="text-2xl font-bold text-background">Depoimentos</h1>
          </div>

          <div>
            <Carousel
              className={`${isMobile ? "mx-8" : "mx-16"} `}
              setApi={setApi}
            >
              <CarouselContent className={`my-4 ml-4 mr-8 flex items-center`}>
                {dataCaseDepoiments.map(depoiment => (
                  <CarouselItem
                    key={depoiment.name}
                    className={`${isMobile ? "" : "basis-2/4"} `}
                  >
                    <Card
                      className={`flex h-72 items-center justify-center rounded-3xl bg-muted py-6`}
                    >
                      <CardContent className="flex items-start justify-center gap-6 py-0">
                        <div>
                          <Avatar className="h-20 w-20 border-4 border-vonix-blue-400">
                            <AvatarImage src={depoiment.image} />
                            <AvatarFallback>
                              {depoiment.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        </div>

                        <div className="flex flex-col gap-4">
                          <ScrollArea className="h-24">
                            <div>
                              <p className="text-xs text-muted-foreground">
                                {depoiment.description}
                              </p>
                            </div>
                          </ScrollArea>

                          <div className="flex flex-col gap-1">
                            <h1 className="text-md font-bold">
                              {depoiment.name}
                            </h1>
                            <div>
                              <h2 className="text-sm text-muted-foreground">
                                {depoiment.role}
                              </h2>
                              <h2 className="text-sm font-bold text-vonix-blue-600">
                                {depoiment.company}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </CardContent>
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
        </div>
      </div>
    </div>
  )
}
