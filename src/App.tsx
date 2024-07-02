import "./global.css"

import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"

import { ThemeProvider } from "./components/theme-provider"
import { IsMobileContextProvider } from "./context/isMobileContext"
import { router } from "./routes/routes"

export function App() {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="vite-ui-theme"
    >
      <HelmetProvider>
        <Helmet
          titleTemplate="%s | Vonix"
          theme-color="%s"
          msapplication-navbutton-color="%s"
          apple-mobile-web-app-status-bar-style="%s"
        />
        <IsMobileContextProvider>
          <RouterProvider router={router} />
        </IsMobileContextProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}
