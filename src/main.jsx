import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Homepage from './Components/Homepage.jsx'
import ErrorPage from './errorPage.jsx'
import Shop from './Components/Shop.jsx'
import Checkout from './Components/Checkout.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "homepage",
        element: <Homepage />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "checkout",
        element: <Checkout />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
