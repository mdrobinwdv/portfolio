import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router'
import route from './Router/route';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/> 
  </StrictMode>,
)
