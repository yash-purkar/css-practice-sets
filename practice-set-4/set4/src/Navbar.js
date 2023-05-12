import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Question1</NavLink> |
      <NavLink to="/q2">Question2</NavLink>
    </div>
  )
}
