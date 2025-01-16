import { RouterProvider } from 'react-router'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import './global.css'

import { router } from './routes'

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop"/>
      <RouterProvider router={router} />
    </HelmetProvider>    
  )
}