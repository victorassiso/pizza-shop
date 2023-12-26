import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/pizza-shop-web',
    element: <AppLayout />,
    children: [
      { path: '/pizza-shop-web', element: <Dashboard /> },
      { path: '/pizza-shop-web/orders', element: <Orders /> },
    ],
  },

  {
    path: '/pizza-shop-web/',
    element: <AuthLayout />,
    children: [
      { path: '/pizza-shop-web/sign-in', element: <SignIn /> },
      { path: '/pizza-shop-web/sign-up', element: <SignUp /> },
    ],
  },
])
