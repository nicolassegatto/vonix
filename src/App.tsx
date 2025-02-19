import "./global.css"

import { QueryClientProvider } from "@tanstack/react-query"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"

import { IsMobileContextProvider } from "./context/isMobileContext"
import { ThemeProvider } from "./context/theme-provider"
import { queryClient } from "./lib/react-query"
import { router } from "./routes/routes"

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        defaultTheme="light"
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
    </QueryClientProvider>
  )
}
