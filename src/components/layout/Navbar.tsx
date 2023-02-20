import { NavLink } from "react-router-dom";

function App() {
  const linkStyle = 'px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md'
  const activeLinkStyle = 'px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md'
  return (
    <nav className="flex px-6 py-2">
      <NavLink to="/" className={({isActive}) => isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle} >Home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle} >About</NavLink>
    </nav>
  )
}

export default App
