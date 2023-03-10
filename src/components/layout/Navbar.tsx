import { NavLink } from 'react-router-dom'

function App() {
  const linkStyle = 'duration-300 px-4 py-2 text-sm font-medium text-gray-500 decoration-none hover:decoration-underline rounded-md'
  const activeLinkStyle = 'duration-300 px-4 py-2 text-sm font-medium !text-white bg-red-400 rounded-md'
  return (
    <nav className="flex px-6 py-2 bg-gray-50 shadow">
      <NavLink to="/" className={({ isActive }) => (isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle)}>
        Главная
      </NavLink>
      <NavLink to="/comics" className={({ isActive }) => (isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle)}>
        Комиксы
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle)}>
        О проекте
      </NavLink>
      <NavLink to="/todo" className={({ isActive }) => (isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle)}>
        Todo-лист
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => (isActive ? linkStyle + ' ' + activeLinkStyle : linkStyle)}>
        Корзина
      </NavLink>
    </nav>
  )
}

export default App
