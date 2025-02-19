import { EllipsisVertical } from "lucide-react"
import { useState } from "react"

import pagesNavigate from "../data/pagesNavigate.json"
import { LogoTheme } from "./logoTheme"
import { NavLink } from "./navlink"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex items-center gap-2 outline-none">
        <Drawer
          direction="left"
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DrawerTrigger className="flex items-center gap-2 outline-none">
            <EllipsisVertical />
            <LogoTheme />
          </DrawerTrigger>
          <DrawerContent className="outline-none">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="mx-auto">
                  <LogoTheme />
                </DrawerTitle>
                <DrawerDescription>
                  Redefinindo o contato com o cliente.
                </DrawerDescription>
              </DrawerHeader>
              <div className="mt-4 flex flex-col items-center gap-2">
                {pagesNavigate.map(page => {
                  return (
                    <NavLink
                      key={page.id}
                      to={page.to}
                      onClick={() => setIsOpen(false)}
                      className="flex w-full items-center justify-center border-b p-2 font-quicksand text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
                    >
                      <span className="font-bold first-letter:uppercase">
                        {page.name}
                      </span>
                    </NavLink>
                  )
                })}
              </div>
            </div>
            <DrawerFooter className="mb-4 text-center text-sm text-muted-foreground">
              {`© Vonix Técnologia ${new Date().getFullYear()}`}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
