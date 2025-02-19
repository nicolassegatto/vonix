import logoNegative from "../assets/logoDark.png"
import logoPositive from "../assets/logoLight.png"
import { useTheme } from "../context/theme-provider"

export function LogoTheme() {
  const { theme } = useTheme()

  return (
    <img
      src={theme === "light" ? logoPositive : logoNegative}
      alt="logotipo vonix tecnologia"
      className="h-12 w-auto"
    />
  )
}
