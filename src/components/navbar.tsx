// import { useEffect, useState } from "react"

import { useContext } from "react"

import { IsMobileContext } from "@/context/isMobileContext"

import { DesktopMenu } from "./desktopMenu"
import { MobileMenu } from "./mobileMenu"

export function NavBar() {
  const { isMobile } = useContext(IsMobileContext)

  return (
    <div className="m-auto flex h-16 w-full items-center justify-between lg:w-[1024px]">
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  )
}
