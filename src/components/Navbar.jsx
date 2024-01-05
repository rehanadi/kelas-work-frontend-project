import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-light border-bottom border-2 border-success shadow">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
        <Link className="navbar-brand text-success fw-bolder" to='/'>Kelas Food</Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link link-dark fw-semibold active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-dark" to='/list-menu'>List Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-dark" to="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar