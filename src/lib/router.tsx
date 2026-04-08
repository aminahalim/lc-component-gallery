import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const ComponentGallery = lazy(() => import('@/sections/lc-component-gallery/ComponentGallery'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>}>
        <ComponentGallery />
      </Suspense>
    ),
  },
])
