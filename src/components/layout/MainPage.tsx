import { Outlet } from "react-router-dom";

import Navbar from './Navbar'

function App() {
  
  return (
    <div className="font-sans">
      <Navbar />
      <main>
      <Outlet />
      </main>
    </div>
  )
}

export default App
