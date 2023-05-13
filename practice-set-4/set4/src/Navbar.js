import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'




export const Navbar = () => {
  return (
    <nav className='navigation'>
      <NavLink to="/" className="nav-item">Question1</NavLink>
      <NavLink to="/q2" className="nav-item">Question2</NavLink>
      <NavLink to="/q3" className="nav-item">Question3</NavLink>
      <NavLink to="/q4" className="nav-item">Question4</NavLink>
      <NavLink to="/q5" className="nav-item">Question5</NavLink>
    </nav>
  )
}
