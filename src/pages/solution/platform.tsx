import { ArrowRightCircle } from "lucide-react"
import { useContext } from "react"
import { Helmet } from "react-helmet-async"

import bannerVonixPc from "@/assets/bannerVonixPC.png"
import applicationBg from "@/assets/vonixLogoBg.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { IsMobileContext } from "@/context/isMobileContext"
import { Services } from "@/data/platformServices"

import { CardPlatform } from "./components/cardPlatform"

export function Platform() {
  const { isMobile } = useContext(IsMobileContext)

  return (
    <>
      <Helmet title="Soluções" />

      <div
        className={`px-6 py-12 ${isMobile ? "flex flex-col" : "grid grid-cols-2"} m-auto gap-6 lg:w-[1024px]`}
      >
        <div className="flex flex-col justify-center gap-2">
          <p className="font-semibold  opacity-40">Vonix Platform</p>
          <h1 className={`text-4xl font-bold`}>
            Transforme seu negócio com soluções de integrações.
          </h1>
          <p className="font-semibold opacity-65">
            Com a plataforma Vonix seu negócio pode integrar diversos sistemas e
            gerar autoservico para comodidade do seu cliente.
          </p>
          <div>
            <Button className="mt-4 rounded-full bg-vonix-blue-600 px-12 py-6 font-bold dark:bg-vonix-orange-600">
              Conheça
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <img
            src={applicationBg}
            alt="platform image"
          />
        </div>
      </div>

      <div
        className={`w-full bg-vonix-blue-400 px-6 pb-32 pt-6 dark:bg-vonix-orange-600`}
      >
        <div className="m-auto flex flex-col items-center justify-center gap-8 px-4 py-12 lg:w-[1024px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className={`text-center text-4xl font-bold text-background`}>
              Tenha o controle da sua operação!
            </h1>
            <p className="text-background opacity-65">
              Faça a gestão e acomapanhe os resultados
            </p>
          </div>

          <div
            className={`${isMobile ? "flex flex-col" : "grid grid-cols-2"} items-center justify-center gap-6`}
          >
            {Services.management.map(service => (
              <CardPlatform
                service={service}
                key={service.name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`m-auto flex flex-col gap-6 py-8 lg:w-[1024px]`}>
        <div className="mt-[-12rem] p-6">
          <img
            src={bannerVonixPc}
            alt="image management"
            className="m-auto w-[80%] rounded-3xl"
          />
        </div>

        <div
          className={`${isMobile ? "flex flex-col" : "grid grid-cols-2"} items-center justify-center gap-6 px-4`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className={`text-center text-4xl font-bold`}>
              Crie soluções personalizadas
            </h1>
            <p className="text-center opacity-65">
              Integre sistemas e gere autoserviço para comodidade do seu cliente
            </p>
          </div>

          <div className="w-[90%]">
            <Accordion
              type="single"
              collapsible
            >
              {Services.development.map(serivce => (
                <AccordionItem
                  value={serivce.name}
                  key={serivce.name}
                >
                  <AccordionTrigger
                    className={`${isMobile ? "text-md" : "text-2xl"} font-bold opacity-85`}
                  >
                    {serivce.name}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`${isMobile && "text-xs"} font-semibold opacity-65`}
                  >
                    {serivce.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="m-auto flex flex-col items-center justify-center gap-6 px-6 py-12 lg:w-[1024px]">
        <h1 className={`text-center text-4xl font-bold`}>
          Tenha suporte e tecnologia de ponta.
        </h1>

        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center justify-center gap-6">
            <div className="rounded-full bg-vonix-blue-400 text-background dark:bg-vonix-orange-600">
              <ArrowRightCircle />
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold ">Suporte e Treinamento</h1>
              <p className="text-sm opacity-65">
                Suporte técnico 24/7, treinamento contínuo para clientes e
                manutenção da infraestrutura de telefonia.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="rounded-full bg-vonix-blue-400 text-background dark:bg-vonix-orange-600">
              <ArrowRightCircle />
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold ">Atualização constante</h1>
              <p className="text-sm opacity-65">
                Atualização constante da ferramenta e implementação de
                técnologia de ponta
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
