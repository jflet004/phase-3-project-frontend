import React from 'react'
import './Styles/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navigation-bar'>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/programs">Programs</NavLink>
      <NavLink className="link" to="/students">Students</NavLink>
      <NavLink className="link" to="/students/new">Register Student</NavLink>
      <NavLink className="link" to="/programs/new">Add New Program</NavLink>
    </div>
  )
}

export default Navbar
