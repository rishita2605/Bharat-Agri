import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { Products, SignUp } from './components'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />
    // add error boundary?
  },
  {
    path: '/products',
    element: <Products />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
