// import { useEffect, useState } from "react"

import { useContext } from "react"

import { IsMobileContext } from "@/context/isMobileContext"

import { DesktopMenu } from "./desktopMenu"
import { MobileMenu } from "./mobileMenu"

export function NavBar() {
  const { isMobile } = useContext(IsMobileContext)

  return (
    <div className="m-auto flex h-24 w-full items-center justify-between p-8">
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  )
}
