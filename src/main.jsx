import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router/dom'
import BookContext from './BookContext/BookContext'
import { ToastContainer } from 'react-toastify'
import { HashRouter } from 'react-router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
  <BookContext>

  <RouterProvider router={router}/>
  <ToastContainer />
    </BookContext>
    </HashRouter>
    
  </StrictMode>,
)
