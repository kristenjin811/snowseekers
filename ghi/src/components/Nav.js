import { NavLink } from 'react-router-dom';
import Logo from '../myLogo.svg'


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo"/>
        SnowSeeker
      </a>
      <div className="btn-group">
        <NavLink to="all/" className="nav-link" style={({ isActive }) => ({color: isActive ? 'black' : 'grey' })}>
          Ski resorts
        </NavLink>
        <NavLink to="new/" className="nav-link" style={({ isActive }) => ({color: isActive ? 'black' : 'grey' })}>
          Add new resort
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;
