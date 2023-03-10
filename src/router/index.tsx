import { createBrowserRouter } from 'react-router-dom'

import MainPage from '../components/layout/MainPage'

import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import AboutPage from '../pages/AboutPage'
import TodoTimer from '../pages/TodoTimer'
import CharacterDetailPage from '../pages/characters/CharacterDetailPage'
import ComicsListPage from '../pages/comics/ComicsListPage'
import ComicsDetailPage from '../pages/comics/ComicsDetailPage'
import CartPage from '../pages/cart/CartPage'

export default createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/todo',
        element: <TodoTimer />,
      },
      {
        path: '/character/:id',
        element: <CharacterDetailPage />,
      },
      {
        path: '/comics',
        element: <ComicsListPage />,
      },
      {
        path: '/comics/:id',
        element: <ComicsDetailPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
])
