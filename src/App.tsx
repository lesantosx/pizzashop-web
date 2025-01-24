import { RouterProvider } from 'react-router'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

import './global.css'

import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>       
      </ThemeProvider>
    </HelmetProvider>    
  )
}