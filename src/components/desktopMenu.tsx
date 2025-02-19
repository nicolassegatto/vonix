import pagesNavigate from "../data/pagesNavigate.json"
import { ContactButton } from "./contactButton"
import { LogoTheme } from "./logoTheme"
import { ModeToggle } from "./mode-toggle"
import { NavLink } from "./navlink"

export function DesktopMenu() {
  return (
    <div className="flex w-full justify-between gap-8">
      <div>
        <LogoTheme />
      </div>

      <div className="flex flex-1 items-center justify-end gap-6">
        <div className="flex items-center ">
          <div className="flex items-center gap-4">
            {pagesNavigate.map(page => {
              return (
                <NavLink
                  key={page.id}
                  to={page.to || "/vonix"}
                  className="flex items-center text-muted-foreground  hover:text-foreground data-[active=true]:text-vonix-blue-400 dark:text-foreground data-[active=true]:dark:text-vonix-orange-600"
                >
                  <span className="font-bold first-letter:uppercase">
                    {page.name}
                  </span>
                </NavLink>
              )
            })}
          </div>
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
