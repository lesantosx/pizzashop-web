import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div>
      <h1>Sign In</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}