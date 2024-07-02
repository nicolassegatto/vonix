import logoDark from "../assets/logoNegativo.png"
import logoLight from "../assets/logoPositivo.png"
import { useTheme } from "./theme-provider"

export function LogoFooterTheme() {
  const { theme } = useTheme()
  return (
    <img
      src={theme === "dark" ? logoDark : logoLight}
      alt="logotipo vonix tecnologia"
      className="h-8 w-auto"
    />
  )
}
