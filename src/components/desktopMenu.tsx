import pagesNavigate from "../data/pagesNavigate.json"
import { ContactButton } from "./contactButton"
import { LogoTheme } from "./logoTheme"
import { ModeToggle } from "./mode-toggle"
import { NavLink } from "./navlink"
export function DesktopMenu() {
  return (
    <>
      <LogoTheme />

      <nav className="flex items-center space-x-4 lg:space-x-6">
        {pagesNavigate.map(page => {
          return (
            <NavLink
              key={page.id}
              to={page.to}
              className="flex items-center text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
            >
              <span className="font-bold first-letter:uppercase">
                {page.name}
              </span>
            </NavLink>
          )
        })}
      </nav>

      <div className="flex gap-2">
        <ContactButton
          text="Fale conosco"
          className=" bg-vonix-blue-400 dark:bg-vonix-orange-600 "
        />
        <ModeToggle />
      </div>
    </>
  )
}
