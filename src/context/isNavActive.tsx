import { createContext, ReactNode, useEffect, useState } from "react"

interface NavActiveContextType {
  navActive: boolean
  setNavActive: (active: boolean) => void
}

export const NavActiveContext = createContext<NavActiveContextType>({
  navActive: false,
  setNavActive: () => {},
})

export function NavActiveContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [navActive, setNavActiveState] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavActiveState(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const setNavActive = (active: boolean) => {
    if (!active && window.scrollY > 0) {
      // Se tentar definir como false, mas houver scroll, não altera o estado
      return
    }
    setNavActiveState(active)
  }

  return (
    <NavActiveContext.Provider value={{ navActive, setNavActive }}>
      {children}
    </NavActiveContext.Provider>
  )
}
