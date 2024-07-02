import logoDark from "../assets/logoDark.png"
import logoLight from "../assets/logoLight.png"
import { useTheme } from "./theme-provider"

export function LogoTheme() {
  const { theme } = useTheme()
  return (
    <img
      src={theme === "dark" ? logoDark : logoLight}
      alt="logotipo vonix tecnologia"
      className="h-8 w-auto"
    />
  )
}
