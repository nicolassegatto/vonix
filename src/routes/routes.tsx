import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "@/pages/_layouts/appLayout"
import { AboutUs } from "@/pages/aboutUs"
import { Carrer } from "@/pages/carrer"
import { Cases } from "@/pages/cases"
import { Solutions } from "@/pages/solutions"

import { Home } from "../pages/home/home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/solutions",
    element: <AppLayout />,
    children: [{ path: "/solutions", element: <Solutions /> }],
  },
  {
    path: "/cases",
    element: <AppLayout />,
    children: [{ path: "/cases", element: <Cases /> }],
  },
  {
    path: "/carrer",
    element: <AppLayout />,
    children: [{ path: "/carrer", element: <Carrer /> }],
  },
  {
    path: "/about",
    element: <AppLayout />,
    children: [{ path: "/about", element: <AboutUs /> }],
  },
])
