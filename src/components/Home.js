import React from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to SchoolRostr</h1>
      <li>To view our Programs, click <NavLink to="/programs">here</NavLink></li>
      <li>To view our Students, click <NavLink to="/students">here</NavLink></li>
      <li>To register a Student, click <NavLink to="/students/new">here</NavLink></li>
      <li>To add a new Program, click <NavLink to="/programs/new">here</NavLink></li>
    </div>
  )
}

export default Home
