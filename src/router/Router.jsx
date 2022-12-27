import { createBrowserRouter } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Product from '../pages/Product'
import { App } from '../components/templates/App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Product />
      }
    ]
  }
])
