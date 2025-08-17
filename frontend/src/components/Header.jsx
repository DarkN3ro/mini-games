import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav className="shadow-sm navbar navbar-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">На главную</Link>
      </div>
    </nav>
  )
}

export default Header