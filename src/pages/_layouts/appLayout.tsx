import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"

import { ContactBanner } from "@/components/contactBanner"
import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import { IsMobileContext } from "@/context/isMobileContext"
import { useTheme } from "@/context/theme-provider"

export function AppLayout() {
  const { theme } = useTheme()
  const themeColor = theme === "dark" ? "#FD6602" : "#175A9F"
  const { isMobile } = useContext(IsMobileContext)

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
        <div
          className={`sticky top-5 z-[2] mx-auto w-full ${isMobile ? "px-6" : "px-0"} lg:max-w-screen-lg xl:max-w-screen-xl`}
        >
          <div className="w-full rounded-3xl bg-white bg-opacity-70 shadow-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30">
            <NavBar />
          </div>
        </div>

        <div className="m-auto flex w-full flex-col items-center justify-center">
          <Outlet />
        </div>

        <ContactBanner />

        <footer
          className={`mt-12 flex w-full flex-col gap-4 px-2 py-4 ${theme === "dark" ? "bg-vonix-orange-600" : "bg-vonix-blue-400"}`}
        >
          <Footer />
        </footer>
      </div>
    </>
  )
}
