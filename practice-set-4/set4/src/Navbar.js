import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Question1</NavLink> |
      <NavLink to="/q2">Question2</NavLink> |
      <NavLink to="/q3">Question3</NavLink> |
      <NavLink to="/q4">Question4</NavLink> |
      <NavLink to="/q5">Question5</NavLink>
    </div>
  )
}
