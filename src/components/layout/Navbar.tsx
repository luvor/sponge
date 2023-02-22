import { NavLink } from "react-router-dom";

function App() {
  const linkStyle = 'px-4 py-2 text-sm font-medium text-gray-500 hover:decoration-none rounded-md'
  const activeLinkStyle = 'px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md'
  return (
    <nav className="flex px-6 py-2 bg-gray-100">
      <NavLink to="/" className={({isActive}) => isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle} >Home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle} >About</NavLink>
      <NavLink to="/todo" className={({isActive}) => isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle} >Todo</NavLink>
    </nav>
  )
}

export default App
