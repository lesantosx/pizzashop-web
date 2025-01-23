import { RouterProvider } from 'react-router'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Toaster } from 'sonner'

import './global.css'

import { router } from './routes'

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>    
  )
}