import { CircleMinus, PlusCircle } from "lucide-react"
import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

import applicationlogo from "@/assets/application.png"
import vonixPc from "@/assets/bannerVonixPC.png"
import contactPerson from "@/assets/contactPerson.png"
import aws from "@/assets/customerLogos/aws.png"
import meta from "@/assets/customerLogos/meta.png"
import voip from "@/assets/customerLogos/voip.png"
import vonix from "@/assets/customerLogos/vonix.png"
import vonixbg from "@/assets/vonixLogoBg.png"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { IsMobileContext } from "@/context/isMobileContext"
import { baseURL } from "@/viteBase"

import { CustomersCarousel } from "./components/customersCarousel"
import { HomeCard } from "./components/homeCard"
import { Indicadores } from "./components/indicadores"

export function Homer() {
  const { isMobile } = useContext(IsMobileContext)

  return (
    <>
      <Helmet title="Home" />
      <div className="flex w-full flex-col pt-12">
        <div className={`flex flex-col gap-2 `}>
          <div
            className={`m-auto flex flex-col items-center justify-center gap-4 px-6 lg:w-[1024px]`}
          >
            <div>
              <h1 className="text-center text-4xl font-semibold text-foreground">
                Bem vindo a
              </h1>
              <h1 className="text-center font-quicksand text-8xl font-extrabold text-foreground text-vonix-blue-400 dark:text-vonix-orange-600">
                Vonix
              </h1>
            </div>

            <p className="text-center text-lg text-muted-foreground md:max-w-[80%]">
              Impulsione o seu negócio com uma solução completa para Gestão de
              Call Center Vonix é a plataforma que vai simplificar e otimizar as
              interações e comunicações entre a sua empresa e os seus clientes,
              economizando tempo e recursos.
            </p>

            <div
              className={`m-auto gap-4 text-muted-foreground ${isMobile ? "flex flex-wrap items-center justify-center" : "flex items-center"}`}
            >
              <span className="flex items-center gap-2">
                <PlusCircle className="text-vonix-blue-400 dark:text-vonix-orange-600" />{" "}
                Controle operacional
              </span>
              <span className="flex items-center gap-2">
                <PlusCircle className="text-vonix-blue-400 dark:text-vonix-orange-600" />{" "}
                Agilidade
              </span>
              <span className="flex items-center gap-2">
                <PlusCircle className="text-vonix-blue-400 dark:text-vonix-orange-600" />{" "}
                Customização
              </span>
              <span className="flex items-center gap-2">
                <CircleMinus className="text-vonix-orange-600 dark:text-vonix-blue-400" />{" "}
                custo
              </span>
            </div>
          </div>

          <div
            className={`${isMobile ? "mt-[6rem]" : "mt-[12rem]"} bg-vonix-blue-400 pb-8 dark:bg-vonix-orange-600`}
          >
            <img
              src={vonixPc}
              alt="pessoa trabalhando em um computador"
              className={`${isMobile ? "mt-[-6rem] p-8" : "mt-[-14rem] p-16"} m-auto lg:w-[1024px]`}
            />
          </div>
        </div>

        <div className="m-auto w-full bg-background py-8 font-quicksand lg:w-[1024px]">
          <Indicadores />
        </div>

        <div className="flex">
          <div className="bg-vonix-blue-400 dark:bg-vonix-orange-600 lg:flex-1" />

          <div
            className={`m-auto mr-12 w-full rounded-r-full bg-vonix-blue-400 p-8 dark:bg-vonix-orange-600 lg:mr-0 lg:w-[1024px]`}
          >
            <div className="flex w-full items-center justify-between gap-4 ">
              <p className="font-bold text-background">
                Descubra nossa solução para o nicho do seu negócio.
              </p>
              <Button
                asChild
                className="rounded-full bg-vonix-blue-600 font-extrabold dark:bg-vonix-orange-400"
              >
                <Link to={`${baseURL}/cases`}>Saiba mais</Link>
              </Button>
            </div>
          </div>
          <div className="lg:flex-1" />
        </div>

        <div
          className={`${isMobile ? "flex flex-col gap-12" : "grid grid-cols-2"} m-auto justify-center py-8 lg:w-[1024px]`}
        >
          <HomeCard
            to={`${baseURL}/solutions`}
            button="Conheça nossas soluções"
            description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              officia id possimus, dicta eveniet hic exercitationem quis et
              cumque perferendis, obcaecati accusamus soluta praesentium placeat
              dolores commodi quasi? Suscipit, minus!`}
            logo={applicationlogo}
            title="Por que escolher a Vonix?"
          />

          <HomeCard
            to={`${baseURL}/about`}
            button="Sobre a Vonix"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              officia id possimus, dicta eveniet hic exercitationem quis et
              cumque perferendis, obcaecati accusamus soluta praesentium placeat
              dolores commodi quasi? Suscipit, minus!"
            logo={vonixbg}
            title="Quem somos?"
          />
        </div>

        <div
          className={`w-full bg-slate-100 ${isMobile ? "pb-8" : "pb-32"} dark:bg-slate-900`}
        >
          <CustomersCarousel />
        </div>

        <div className={`bg-vonix-blue-400 pb-[6rem] dark:bg-vonix-orange-600`}>
          <div
            className={`m-auto  ${isMobile ? " flex flex-col p-8" : "grid grid-cols-2 px-4 py-8"} items-center  lg:w-[1024px]`}
          >
            <div className={`flex flex-col gap-8 `}>
              <div
                className={` gap-2 ${isMobile ? "flex h-4 justify-center" : "flex h-6 justify-start"}`}
              >
                <img
                  src={vonix}
                  alt="logo vonix"
                  className="dark:invert dark:filter"
                />
                <Separator orientation="vertical" />
                <img
                  src={meta}
                  alt="logo meta"
                  className="dark:invert dark:filter"
                />
                <Separator orientation="vertical" />
                <img
                  src={voip}
                  alt="logo voip"
                  className="dark:invert dark:filter"
                />
                <Separator orientation="vertical" />
                <img
                  src={aws}
                  alt="logo aws"
                  className="dark:invert dark:filter"
                />
              </div>

              <div
                className={`flex flex-col gap-4 ${isMobile && "items-center"}`}
              >
                <h2
                  className={`${isMobile ? "text-2xl" : "text-3xl"}  font-extrabold text-background`}
                >
                  Provemos soluções de voz em nuvem, temos ferramentas de IA e
                  somos provedores oficiais da Meta Business API.
                </h2>
                <p className="text-xl font-medium text-muted">
                  Isso significa que nossa solução é escalável, moderna e ideal
                  para você.
                </p>
              </div>
            </div>

            <div>
              <img
                src={contactPerson}
                alt="pessoa utilizando celular"
                className={`m-auto ${isMobile ? "w-[500px] pt-12" : "mt-[-6rem] w-[1200px]"}  h-auto `}
              />
            </div>
          </div>
        </div>

        <div
          className={` ${isMobile ? "mb-[4rem] mt-[-12rem] w-full" : "mb-[6rem] mt-[-8rem]"} m-auto  flex lg:w-[1024px]`}
        >
          <Contact />
        </div>
      </div>
    </>
  )
}
