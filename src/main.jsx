import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App  from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import Hero from './components/Elements/Hero/Hero'
import Opening from './pages/opening'
import HomePage from './pages/homepage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Opening />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
