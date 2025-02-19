import { useContext } from "react"

import { IsMobileContext } from "@/context/isMobileContext"

import { useTheme } from "../context/theme-provider"
import { ContactButton } from "./contactButton"

export function ContactBanner() {
  const { isMobile } = useContext(IsMobileContext)
  const { theme } = useTheme()

  return (
    <div
      className={`${isMobile && "p-6"} m-auto w-full  lg:max-w-screen-lg xl:max-w-screen-xl`}
    >
      <div
        className={`flex w-full items-center justify-between rounded-3xl ${theme === "dark" ? "bg-vonix-orange-600" : "bg-vonix-blue-400"} ${isMobile ? "p-4" : "px-16 py-8"}`}
      >
        <div
          className={`font-bold text-background ${isMobile ? "text-sm" : "text-2xl"}`}
        >
          <p>Fale com a Vonix hoje</p>
        </div>
        <div>
          <ContactButton
            variant={"outline"}
            text="Contate-nos"
            className={`${isMobile ? "rounded-2xl p-2 text-xs" : "rounded-2xl"}`}
          />
        </div>
      </div>
    </div>
  )
}
