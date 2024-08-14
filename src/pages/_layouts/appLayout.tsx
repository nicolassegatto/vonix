import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"

import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import { useTheme } from "@/components/theme-provider"

export function AppLayout() {
  const { theme } = useTheme()
  const themeColor = theme === "dark" ? "#FD6602" : "#175A9F"

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
      <div className="flex flex-col justify-start antialiased">
        <div className="sticky top-0 z-50 w-full bg-background shadow-lg">
          <div className="mx-auto w-full lg:max-w-screen-lg xl:max-w-screen-xl">
            <NavBar />
          </div>
        </div>

        <div className="m-auto flex w-full flex-col items-center justify-center">
          <Outlet />
        </div>

        <footer
          className={`flex w-full flex-col gap-4 px-2 py-4 ${
            theme === "dark" ? "bg-vonix-orange-600" : "bg-vonix-blue-400"
          }`}
        >
          <Footer />
        </footer>
      </div>
    </>
  )
}
