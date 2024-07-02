import { LogoFooterTheme } from "./logoFooterTheme"

export function Footer() {
  return (
    <>
      <div className="m-auto">
        <LogoFooterTheme />
      </div>
      <div className="m-auto">
        <span className="justify-center text-sm font-bold text-background">
          {`Todos os direitos reservados © Vonix ${new Date().getFullYear()}`}
        </span>
      </div>
    </>
  )
}
