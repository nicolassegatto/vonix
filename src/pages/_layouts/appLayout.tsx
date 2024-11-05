import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"

import { ContactBanner } from "@/components/contactBanner"
import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import { useTheme } from "@/components/theme-provider"
import { NavActiveContext } from "@/context/isNavActive"

export function AppLayout() {
  const { theme } = useTheme()
  const themeColor = theme === "dark" ? "#FD6602" : "#175A9F"
  const { setNavActive, navMenuOpen } = useContext(NavActiveContext)

  setNavActive(true)
  return (
    <>
      <Helmet
        meta={[
          { name: "theme-color", content: themeColor },
          { name: "msapplication-navbutton-color", content: themeColor },
          {
            name: "apple-mobile-web-app-status-bar-style",
            content: themeColor,
          },
        ]}
      />

      <div className="z-[0] flex flex-col justify-start antialiased">
        <div className="sticky top-5 z-[2] mx-auto w-full px-6 lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="w-full rounded-3xl bg-white bg-opacity-70 shadow-lg backdrop-blur-lg transition-colors duration-1000 hover:bg-opacity-100 dark:bg-black dark:bg-opacity-30 dark:hover:bg-opacity-100">
            <NavBar />
          </div>
        </div>

        <div
          className={`z-[1] transition-all duration-500 ${navMenuOpen ? "blur-md" : ""}`}
        >
          <div className="m-auto flex w-full flex-col items-center justify-center">
            <Outlet />
          </div>

          <ContactBanner />

          <footer
            className={`mt-12 flex w-full flex-col gap-4 px-2 py-4 ${
              theme === "dark" ? "bg-vonix-orange-600" : "bg-vonix-blue-400"
            }`}
          >
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}