import { createBrowserRouter } from 'react-router-dom'

import MainPage from '../components/layout/MainPage'

import HomePage from '../pages/HomePage'
import TodoTimer from '../pages/TodoTimer'
import CharacterDetailPage from '../pages/characters/CharacterDetailPage'
import ComicsDetailPage from '../pages/comics/ComicsDetailPage'

export default createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <div>About</div>,
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
        path: '/comics/:id',
        element: <ComicsDetailPage />,
      },
    ],
  },
])
