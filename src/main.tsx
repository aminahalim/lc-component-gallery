import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponentGallery from '@/sections/lc-component-gallery/ComponentGallery'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComponentGallery />
  </StrictMode>,
)
