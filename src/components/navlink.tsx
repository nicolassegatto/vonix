import { Link, LinkProps, useLocation } from "react-router-dom"

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={pathname === props.to}
      {...props}
      className={`${props.className}`}
    />
  )
}
