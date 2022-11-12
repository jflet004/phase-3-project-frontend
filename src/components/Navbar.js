import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h3><NavLink to="/">Home</NavLink></h3>
      <h3><NavLink to="/programs">Programs</NavLink></h3>
      <h3><NavLink to="/students">Students</NavLink></h3>
      <h3><NavLink to="/students/new">Register Student</NavLink></h3>
      <h3><NavLink to="/programs/new">Add New Program</NavLink></h3>
    </div>
  )
}

export default Navbar
