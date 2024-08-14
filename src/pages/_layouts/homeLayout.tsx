import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"

import { Footer } from "@/components/footer"
import { useTheme } from "@/components/theme-provider"

export function HomeLayout() {
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
