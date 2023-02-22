import {
  createBrowserRouter,
} from "react-router-dom";

import MainPage from '../components/layout/MainPage'
import TodoTimer from '../pages/TodoTimer'

export default createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/todo",
        element: <TodoTimer />,
      }
    ]
  },
  
]);
