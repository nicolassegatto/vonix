import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "@/pages/_layouts/appLayout"
import { AboutUs } from "@/pages/aboutUs"
import { Carrer } from "@/pages/carrer"
import { Cases } from "@/pages/cases"
import { Solutions } from "@/pages/solutions"
import { baseURL } from "@/viteBase"

import { Home } from "../pages/home/home"

export const router = createBrowserRouter([
  {
    path: `${baseURL}`,
    element: <AppLayout />,
    children: [{ path: `${baseURL}`, element: <Home /> }],
  },
  {
    path: `${baseURL}/solutions`,
    element: <AppLayout />,
    children: [{ path: `${baseURL}/solutions`, element: <Solutions /> }],
  },
  {
    path: `${baseURL}/cases`,
    element: <AppLayout />,
    children: [{ path: `${baseURL}/cases`, element: <Cases /> }],
  },
  {
    path: `${baseURL}/carrer`,
    element: <AppLayout />,
    children: [{ path: `${baseURL}/carrer`, element: <Carrer /> }],
  },
  {
    path: `${baseURL}/about`,
    element: <AppLayout />,
    children: [{ path: `${baseURL}/about`, element: <AboutUs /> }],
  },
])
