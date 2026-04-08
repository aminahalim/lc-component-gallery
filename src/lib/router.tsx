import { createBrowserRouter } from 'react-router-dom'
import ComponentGallery from '@/sections/lc-component-gallery/ComponentGallery'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentGallery />,
  },
])
