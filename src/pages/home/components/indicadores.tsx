import { useContext } from "react"

import { IsMobileContext } from "@/context/isMobileContext"

export function Indicadores() {
  const { isMobile } = useContext(IsMobileContext)
  return (
    <div
      className={`m-auto ${!isMobile && "grid grid-cols-3 gap-8"} ${isMobile && " flex flex-col justify-between gap-8 "}`}
    >
      <div className="col-span-1 flex flex-col items-center justify-center">
        <p
          className={`font-extrabold text-vonix-blue-400 dark:text-vonix-orange-600 ${isMobile ? "text-6xl" : "text-8xl"}`}
        >
          +587
        </p>
        <p className="font-bold">Clientes</p>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <p
          className={`font-extrabold text-vonix-blue-400 dark:text-vonix-orange-600 ${isMobile ? "text-6xl" : "text-8xl"}`}
        >
          +5k
        </p>
        <p className="font-bold">Fluxos de atendimento</p>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <p
          className={`font-extrabold text-vonix-blue-400 dark:text-vonix-orange-600 ${isMobile ? "text-6xl" : "text-8xl"}`}
        >
          +8k
        </p>
        <p className="font-bold">Usuários</p>
      </div>
      <div className="col-span-3 flex flex-col items-center justify-center">
        <p
          className={`font-extrabold text-vonix-blue-400 dark:text-vonix-orange-600 ${isMobile ? "text-6xl" : "text-8xl"}`}
        >
          +800.000
        </p>
        <p className="font-bold">Atendimentos realizados</p>
      </div>
    </div>
  )
}
