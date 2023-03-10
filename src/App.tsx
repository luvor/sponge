import { RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import router from './router'

function App() {
  return (
    <Provider store={store}>
      <div className="font-sans">
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App
