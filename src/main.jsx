import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router'
import route from './Router/route';
import Authprovider from './UseContext/UseContext'


createRoot(document.getElementById('root')).render( 
  <Authprovider>
    <RouterProvider router={route}/> 
  </Authprovider>
)
