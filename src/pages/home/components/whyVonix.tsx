import { useContext } from "react"

import imageSample from "@/assets/6.jpg"
import { IsMobileContext } from "@/context/isMobileContext"

export function WhyVonix() {
  const { isMobile } = useContext(IsMobileContext)

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full flex-col gap-16 px-2 lg:max-w-screen-lg xl:max-w-screen-xl">
        <div
          className={`mx-auto flex ${isMobile ? "w-full" : "w-[60%]"}  flex-col items-center justify-center gap-6`}
        >
          <h2
            className={`text-center font-semibold ${isMobile ? "text-lg" : "text-xl"}`}
          >
            SOLUÇÕES QUE TRANSFORMAM
          </h2>
          <h1
            className={`text-center ${isMobile ? "text-2xl" : "text-4xl"} font-bold`}
          >
            Personalize o atendimento em larga escala com a plataforma confiável
            da Vonix.
          </h1>
          <p className={`text-center ${isMobile ? "text-md" : "text-lg"} `}>
            A Vonix simplifica a gestão do seu contact center, elevando a
            eficiência operacional, a satisfação do cliente e o desempenho da
            equipe — tudo com controle de custos em tempo real.
          </p>
        </div>

        <div
          className={`gap-4 ${isMobile ? "flex flex-col" : "grid grid-cols-2"}`}
        >
          <div
            className={`${
              isMobile
                ? "flex flex-col p-6 transition-all hover:shadow-xl"
                : "col-span-2 p-24"
            } flex w-full items-stretch gap-4 rounded-3xl bg-muted`}
          >
            {isMobile && (
              <div className="flex items-stretch">
                <img
                  className="h-80 rounded-3xl object-cover"
                  src={imageSample}
                  alt="sample"
                />
              </div>
            )}

            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-2xl font-bold">
                Customização e Escalabilidade
              </h1>
              <p className="text-lg">
                Desde pequenos ajustes até grandes integrações, a Vonix oferece
                flexibilidade para expandir suas funcionalidades conforme seu
                contact center cresce e evolui.
              </p>
            </div>

            {!isMobile && (
              <div className="flex items-stretch">
                <img
                  className="h-80 rounded-3xl object-cover"
                  src={imageSample}
                  alt="sample"
                />
              </div>
            )}
          </div>

          <div
            className={`col-span-1 flex w-full flex-col items-center gap-6 rounded-3xl bg-muted ${isMobile ? "p-6 transition-all hover:shadow-xl" : "p-12"}`}
          >
            {!isMobile && (
              <div className="flex items-stretch">
                <img
                  className="h-64 rounded-3xl object-cover"
                  src={imageSample}
                  alt="sample"
                />
              </div>
            )}

            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-2xl font-bold">Tecnologia de Ponta</h1>
              <p className="text-lg">
                Com recursos de monitoramento em tempo real, integração
                multicanal e relatórios personalizados, a Vonix oferece uma
                plataforma completa que se adapta às necessidades específicas do
                seu negócio.
              </p>
            </div>
          </div>

          <div
            className={`col-span-1 flex w-full flex-col items-center gap-6 rounded-3xl bg-muted ${isMobile ? "p-6 transition-all hover:shadow-xl" : "p-12"}`}
          >
            {!isMobile && (
              <div className="flex items-stretch">
                <img
                  className="h-64 rounded-3xl object-cover"
                  src={imageSample}
                  alt="sample"
                />
              </div>
            )}
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-2xl font-bold">
                Gestão Completa do Contact Center
              </h1>
              <p className="text-lg">
                A nossa solução permite uma visão unificada de toda a operação
                de atendimento, facilitando a supervisão, o controle e o ajuste
                de prioridades em tempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
