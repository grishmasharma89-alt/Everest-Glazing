import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/shared/styles/index.css'
import { AppRouterProvider } from '@/app/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouterProvider />
  </StrictMode>,
)
