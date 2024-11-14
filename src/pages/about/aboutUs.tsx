import { useContext } from "react"
import { Helmet } from "react-helmet-async"

import imageUs from "@/assets/1.jpg"
import { IsMobileContext } from "@/context/isMobileContext"

export function AboutUs() {
  const { isMobile } = useContext(IsMobileContext)

  return (
    <div className="mb-24 flex w-full flex-col gap-24">
      <Helmet title="Sobre nós" />
      <div className="-mt-24 bg-vonix-blue-400 pt-32 shadow-inner-bottom">
        <div
          className={`m-auto flex flex-col gap-6 ${isMobile ? "px-12" : "px-6"} lg:max-w-screen-lg xl:max-w-screen-xl`}
        >
          <div className="flex w-full flex-col justify-center gap-2 py-52 text-background">
            <p className="font-semibold opacity-40">Vonix</p>
            <h1
              className={`text-center ${isMobile ? "text-6xl" : "text-8xl"} font-bold`}
            >
              Redefinindo o Contato com o Cliente.
            </h1>
            <p
              className={`text-center ${isMobile ? "text-xl" : "text-2xl"} font-semibold opacity-65`}
            >
              Potencializamos a gestão do seu contact center com soluções
              inovadoras e personalizadas.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`mx-auto w-full ${isMobile ? "px-12" : "px-6"} lg:max-w-screen-lg xl:max-w-screen-xl`}
      >
        <div
          className={`flex flex-col items-center justify-center gap-3 rounded-3xl bg-muted shadow-xl`}
        >
          <div
            className={`flex items-stretch gap-8 ${isMobile ? "flex-col p-6" : "p-12"}`}
          >
            <div className="flex items-stretch">
              <img
                className="h-full rounded-3xl object-cover"
                src={imageUs}
                alt="imagem"
              />
            </div>

            <div className="flex flex-col justify-center gap-8">
              <h1
                className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold text-foreground`}
              >
                Quem Somos
              </h1>
              <p
                className={`${isMobile ? "text-lg" : "text-xl"} text-muted-foreground`}
              >
                A Vonix é uma empresa especializada em soluções tecnológicas
                para contact centers, atuando desde 2007 com o compromisso de
                transformar a experiência de atendimento ao cliente. Somos uma
                referência em inovação e eficiência, ajudando empresas de
                diversos setores a simplificar e otimizar suas operações de
                atendimento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full  lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className={`flex w-full flex-col px-6`}>
          <div className="flex flex-col items-stretch gap-16">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1
                className={`${isMobile ? "text-4xl" : "text-6xl"}  font-bold text-foreground`}
              >
                Vonix em Números
              </h1>
              <p
                className={`text-center ${isMobile ? "text-lg" : "text-xl"}text-muted-foreground`}
              >
                Esses números refletem nossa experiência e comprometimento com o
                sucesso dos nossos clientes.
              </p>
            </div>

            <div
              className={`${isMobile ? "flex flex-col gap-12" : "grid grid-cols-3 gap-6"} mx-auto items-center`}
            >
              <div className="text-center">
                <h1 className="text-6xl font-bold">+587</h1>
                <p className="text-2xl font-semibold text-muted-foreground">
                  clientes atendidos
                </p>
              </div>
              <div className="text-center">
                <h1 className="text-6xl font-bold">+10</h1>
                <p className="text-2xl font-semibold text-muted-foreground">
                  segmentos de mercado
                </p>
              </div>
              <div className="text-center">
                <h1 className="text-6xl font-bold">5+</h1>
                <p className="text-2xl font-semibold text-muted-foreground">
                  canais de comunicação integrados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
