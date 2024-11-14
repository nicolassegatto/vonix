import React, { useContext } from "react"

// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { NavActiveContext } from "@/context/isNavActive"
import { cn } from "@/lib/utils"

import pagesNavigate from "../data/pagesNavigate.json"
import { ContactButton } from "./contactButton"
import { LogoTheme } from "./logoTheme"
// import { ModeToggle } from "./mode-toggle"
import { NavLink } from "./navlink"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"

export function DesktopMenu() {
  const { navActive, setNavMenuOpen } = useContext(NavActiveContext)

  return (
    <div className="flex w-full justify-between gap-8">
      <div>
        <NavLink to={"/vonix"}>
          <LogoTheme />
        </NavLink>
      </div>

      <div className="flex flex-1 items-center justify-end gap-6">
        <div className="flex flex-1 items-center ">
          <NavigationMenu
            onMouseEnter={() => setNavMenuOpen(true)}
            onMouseLeave={() => setNavMenuOpen(false)}
          >
            <NavigationMenuList>
              {pagesNavigate.map(page => {
                return (
                  <NavigationMenuItem key={page.id}>
                    <NavigationMenuTrigger
                      className={`${navActive && "text-foreground/70 hover:bg-accent hover:text-muted-foreground hover:shadow-inner"}`}
                    >
                      <span
                        className={`text-lg font-bold first-letter:uppercase`}
                      >
                        {page.name}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-full flex-1 grid-cols-[.75fr_1fr] gap-3 p-6">
                        <li className="row-span-3">
                          <NavLink
                            to="/vonix"
                            className={cn(
                              `flex h-full select-none flex-col justify-end rounded-xl bg-accent p-6 no-underline outline-none transition-shadow hover:shadow-xl`,
                            )}
                          >
                            <div className="font-heading text-base font-semibold leading-none">
                              Vonix Home
                            </div>
                            <p className="font-base line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A plataforma omnichannel ideal para alavancar o
                              seu negocio.
                            </p>
                          </NavLink>
                        </li>
                        {page.menu.map(subPage => {
                          return (
                            <ListItem
                              key={subPage.id}
                              title={subPage.name}
                              href={subPage.to}
                            >
                              {subPage.description}
                            </ListItem>
                          )
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <ContactButton
            text="Fale conosco"
            className="bg-vonix-blue-400 dark:bg-vonix-orange-600 "
          />
          {/* {<ModeToggle />} */}
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }) => {
  return (
    <li>
      <NavLink
        to={props.href || "/vonix"}
        className={cn(
          `text-text rounded-base dark:hover:border-darkBorder block select-none space-y-1 rounded-xl border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border hover:bg-accent data-[active=true]:border-border data-[active=true]:bg-accent`,
          className,
        )}
        {...props}
      >
        <div className="font-heading text-base leading-none">{title}</div>
        <p className="font-base line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
