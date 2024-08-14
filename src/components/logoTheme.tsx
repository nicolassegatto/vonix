import { useContext } from "react"

import { NavActiveContext } from "@/context/isNavActive"

import logoDark from "../assets/logoDark.png"
import logoLight from "../assets/logoLight.png"
import logoPositive from "../assets/logoPositivo.png"
import { useTheme } from "./theme-provider"

export function LogoTheme() {
  const { theme } = useTheme()
  const { navActive } = useContext(NavActiveContext)
  return (
    <img
      src={navActive ? (theme === "dark" ? logoDark : logoLight) : logoPositive}
      alt="logotipo vonix tecnologia"
      className="h-12 w-auto"
    />
  )
}
