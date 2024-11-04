import React, { useContext } from "react"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { NavActiveContext } from "@/context/isNavActive"
import { cn } from "@/lib/utils"

import pagesNavigate from "../data/pagesNavigate.json"
import { ContactButton } from "./contactButton"
import { LogoTheme } from "./logoTheme"
import { ModeToggle } from "./mode-toggle"
import { NavLink } from "./navlink"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"

export function DesktopMenu() {
  const { navActive } = useContext(NavActiveContext)

  return (
    <div className="flex w-full justify-between gap-8">
      <div>
        <NavLink to={"/vonix/"}>
          <LogoTheme />
        </NavLink>
      </div>

      <div className="flex flex-1 items-center justify-end gap-6">
        <div className="flex flex-1 items-center ">
          <NavigationMenu className="z-[5]">
            <NavigationMenuList>
              {pagesNavigate.map(page => {
                return (
                  <NavigationMenuItem key={page.id}>
                    <NavigationMenuTrigger
                      className={`text-background ${navActive && "text-muted-foreground/70 hover:bg-accent hover:text-muted-foreground hover:shadow-inner"}`}
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
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="https://ui.shadcn.com"
                            >
                              <div className="font-heading mb-2 mt-4 text-lg">
                                shadcn/ui
                              </div>
                              <p className="font-base text-sm leading-tight">
                                Beautifully designed components that you can
                                copy and paste into your apps. Accessible.
                                Customizable. Open Source.
                              </p>
                            </a>
                          </NavigationMenuLink>
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
              <NavigationMenuItem>
                <NavLink to={"/vonix/about"}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-background ${navActive && "text-muted-foreground/70 hover:bg-accent hover:text-muted-foreground hover:shadow-inner"}`}
                  >
                    <span
                      className={`text-lg font-bold first-letter:uppercase`}
                    >
                      Sobre nós
                    </span>
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <ContactButton
            text="Fale conosco"
            className="bg-vonix-blue-400 dark:bg-vonix-orange-600 "
          />
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "text-text rounded-base dark:hover:border-darkBorder block select-none space-y-1 rounded-xl border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border hover:bg-accent",
            className,
          )}
          {...props}
        >
          <div className="font-heading text-base leading-none">{title}</div>
          <p className="font-base line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
