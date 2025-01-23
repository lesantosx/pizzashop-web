import { Link, LinkProps, useLocation } from 'react-router'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={pathname === props.to}
      className='flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground'
      {...props} 
    />
  )
}